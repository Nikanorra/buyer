<template>
  <div class="v-payment-method">
    <div class="card__wrap">
      <div class="card__field">
        <label>Card Number</label>
        <div id="card-number"></div>
      </div>

      <div class="card__field">
        <label>Expiration Date</label>
        <div id="card-expiry"></div>
      </div>

      <div class="card__field">
        <label>Security Code</label>
        <div id="card-cvc"></div>
      </div>
    </div>

    <div id="card-error"></div>
    <div class="row">
      <button class="btn-light" @click="goToPrev">Back</button>
      <button class="btn-orange" id="custom-button" @click.prevent.once="toPay">
        Place order
      </button>
    </div>

    <v-modal-cart
      v-if="successOrderByGuest"
      @closeModalFromChild="goToOrders"
      @deleteItemFromChild="goToHome"
      @closeModal="closeModal"
      :btnModalLeft="btnModalLeft">
      <div class="modal__content">
        <img src="~@/assets/img/modals/modal-success.svg" />
        <div class="title">Congratulations! Your order has been placed</div>
        <div class="text">
          Your items are on the way and should arrive shortly
        </div>
      </div>
    </v-modal-cart>
  </div>
</template>

<style lang="scss" scoped>
.card__wrap {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  margin-top: 67px;
  .card__field {
    margin-bottom: 80px;
    label {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px;
      color: #c7c7c7;
    }
  }
}
#card-number,
#card-cvc,
#card-holder,
#card-expiry {
  margin-top: 10px;
  border-bottom: 1px solid #eeeeee;
  width: 90%;
  transition: all 0.3s ease-in-out;
  &:hover {
    border-bottom: 1px solid #ff9b30;
  }
}

#card-error {
  color: red;
  margin-bottom: 20px;
}

//btn
.btn-orange,
.btn-light {
  width: 204px;
  height: 45px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  border-radius: 22px;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
}
.btn-orange {
  background: #ff9b30;
  color: #fff;
  grid-column-start: 2;
  grid-column-end: 3;
  transition: 0.3s;
  a {
    color: #fff;
  }
  &:hover {
    background: #e97a03;
    color: #fff;
  }
  &:disabled {
    opacity: 0.5;
  }
}
.btn-light {
  border: 1px solid #ff9b30;
  color: #ff9b30;
  transition: 0.3s;
  a {
    color: #ff9b30;
  }
  &:hover {
    background: #fabf80;
    border: 1px solid #fff;
    color: #fff;
  }
}
</style>

<script>
import VModalCart from "@/components/modal/v-modal-cart";

export default {
  components: { VModalCart },
  props: {
    guestFirstName: {
      type: String,
    },
    guestLastName: {
      type: String,
    },
    guestEmail: {
      type: String,
    },
    guestPhone: {
      type: String,
    },
    orderGuest: {
      type: Object,
    },
  },
  data() {
    return {
      serverNotification: "",
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
      guestFullName: "",
      successOrderByGuest: false,
    };
  },
  computed: {
    stripeElements() {
      return this.$stripe.elements();
    },
  },
  mounted() {
    const style = {
      base: {
        color: "#2E2E2E",
        fontSize: "18px",
        "::placeholder": {
          color: "#e5e5e5",
          border: "1px solid red",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    };
    this.cardNumber = this.stripeElements.create("cardNumber", { style });
    this.cardNumber.mount("#card-number");

    this.cardExpiry = this.stripeElements.create("cardExpiry", { style });
    this.cardExpiry.mount("#card-expiry");

    this.cardCvc = this.stripeElements.create("cardCvc", { style });
    this.cardCvc.mount("#card-cvc");
  },
  beforeDestroy() {
    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  },
  methods: {
    async toPay() {
      const { error } = await this.$stripe.createToken(this.cardNumber);
      if (error) {
        document.getElementById("card-error").innerHTML = error.message;
        return;
      }
      // console.log(token);

      const guestFullName = this.guestFirstName + " " + this.guestLastName;
      await this.$stripe.confirmCardPayment(this.orderGuest.data.clientSecret, {
        payment_method: {
          card: this.cardNumber,
          billing_details: {
            name: guestFullName,
            phone: this.guestPhone,
            email: this.guestEmail,
          },
        },
      });
      this.successOrderByGuest = true;
      document.body.classList.toggle("active");
      document.documentElement.style.overflow = "hidden";
      // } catch (e) {
      //   const error = await e.response.data.error;
      //   this.serverNotification = error;
      // }
    },
    goToPrev() {
      this.$emit("goToPrev");
    },
    async createToken() {
      const { token, error } = await this.$stripe.createToken(this.cardNumber);
      if (error) {
        document.getElementById("card-error").innerHTML = error.message;
        return;
      }
      console.log(token);
      // handle the token
      // send it to your server
    },
    goToHome() {
      document.body.classList.remove("active");
      document.documentElement.style.overflow = "auto";
      this.$router.push("/");
    },
    goToOrders() {
      document.body.classList.remove("active");
      document.documentElement.style.overflow = "auto";
      this.$router.push("/");
    },
    closeModal() {
      this.successOrder = false;
      document.body.classList.remove("active");
      document.documentElement.style.overflow = "auto";
      this.$router.push("/");
    },
  },
};
</script>
