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
      <button class="btn-light" @click="goBack">Back</button>
      <button
        class="btn-orange"
        id="custom-button"
        @click.prevent.once="addCart">
        Save
      </button>
    </div>
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
import axios from "axios";

export default {
  data() {
    return {
      serverNotification: "",
      // token: null,
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
      loaderInChildren: false,
      // cardHolder: null,
    };
  },
  computed: {
    stripeElements() {
      return this.$stripe.elements();
    },
  },
  mounted() {
    // Style Object documentation here: https://stripe.com/docs/js/appendix/style
    const style = {
      base: {
        color: "#2E2E2E",
        // fontFamily: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        // fontSmoothing: 'antialiased',
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

    // this.cardHolder = this.stripeElements.create('cardHolder', { style });
    // this.cardHolder = this.mount('#card-holder');
  },
  beforeDestroy() {
    this.cardNumber.destroy();
    // this.cardHolder.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  },
  methods: {
    async addCart() {
      this.loaderInChildren = true;
      this.$emit("Loader", this.loaderInChildren);
      try {
        const res = await axios(
          process.env.VUE_APP_HOST + "/buyer/accounts/payment-method",
          {
            method: "POST",
            headers: {
              "AUTH-KEY": localStorage.Token,
            },
            data: {},
          }
        );
        const fullName = res.data.firstName + " " + res.data.lastName;
        await this.$stripe.confirmCardSetup(res.data.clientSecret, {
          payment_method: {
            card: this.cardNumber,
            billing_details: {
              email: res.data.email,
              name: fullName,
            },
          },
        });
        this.$emit(
          "paymentMethodCreated",
          fullName,
          this.cardNumber,
          res.data.email
        );
      } catch (e) {
        const error = await e.response.data.error;
        this.serverNotification = error;
      }
      this.loaderInChildren = false;
      this.$emit("Loader", this.loaderInChildren);
    },

    async createToken() {
      const { token, error } = await this.$stripe.createToken(this.cardNumber);
      if (error) {
        // handle error here
        document.getElementById("card-error").innerHTML = error.message;
        return;
      }
      try {
        const res = await axios(
          process.env.VUE_APP_HOST + "/buyer/accounts/payment-method",
          {
            method: "POST",
            headers: {
              "AUTH-KEY": localStorage.Token,
            },
            data: {
              clientSecret: token,
            },
          }
        );
        const data = await res;
        if (res.status === 200 || res.status === 201) {
          alert(data.token);
        } else {
          this.errors = data;
          alert(data.token);
        }
      } catch (error) {
        alert("ERROR");
      }
    },
    goBack() {
      this.$emit("goBack");
    },
  },
};
</script>
