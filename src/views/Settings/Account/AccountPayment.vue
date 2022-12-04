<template>
  <div class="accountPayment">
    <section class="tab-content">
      <div v-if="addPayment" class="account__add-payment">
        <v-payment-card @closeCardEdit="closeCardEdit"></v-payment-card>
      </div>

      <div v-else class="account__payment">
        <transition name="fadeX">
          <button @click="addPayment = !addPayment" class="btn-add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5085 4.5967H7.4042V1.49242C7.4042 0.72975 6.76364 0.105469 6.00069 0.105469C5.23775 0.105469 4.59719 0.72975 4.59719 1.49242V4.5967H1.4929C0.730238 4.5967 0.105957 5.23726 0.105957 6.00021C0.105957 6.76315 0.730238 7.40372 1.4929 7.40372H4.59719V10.508C4.59719 11.2707 5.23775 11.8949 6.00069 11.8949C6.76364 11.8949 7.4042 11.2707 7.4042 10.508V7.40372H10.5085C11.2712 7.40372 11.8954 6.76315 11.8954 6.00021C11.8954 5.23726 11.2712 4.5967 10.5085 4.5967Z"
                fill="#FDFDFD" />
            </svg>

            <span>Add new payment method</span>
          </button>
        </transition>

        <div class="payment__wrap" v-if="payment">
          <div class="payment">
            <div class="payment__header">
              <div class="type">{{ payment.type }}</div>
              <div class="number">**** {{ payment.last4 }}</div>
            </div>
            <div class="payment__footer">
              <div class="text">
                <p>Card Holder</p>
                <span>{{ payment.firstName }}</span>
                <span>{{ payment.lastName }}</span>
              </div>
              <button class="payment__del" @click="deleteCard">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.btn-add {
  display: flex;
  align-items: center;
  margin-top: 63px;
  margin-bottom: 50px;
}
.btn-add {
  svg {
    width: 32px;
    height: 32px;
    padding: 10px;
    margin-right: 20px;
    border-radius: 4px;
    background: #ff9b30;
  }
  span {
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    color: #ff9b30;
  }
}

.payment__wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
}
.payment {
  border-radius: 15px;
  box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.05);
  padding: 20px;
}
.payment__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  color: #2e2e2e;
  margin-bottom: 35px;
  .type {
    max-width: 65px;
    overflow: hidden;
    font-size: 10px;
  }
  .number {
    display: flex;
    align-items: center;
  }
}
.payment__footer {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  color: #979797;
  span {
    font-size: 16px;
    line-height: 19px;
    color: #2e2e2e;
  }
  button {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    color: #ff9b30;
    margin-left: 60px;
  }
}

//animation
.fadeX-enter-active,
.fadeX-leave-active {
  transition: all 0.5s ease-out;
}
.fadeX-enter,
.fadeX-leave-to {
  opacity: 0;
  transform: translateX(100vh);
}
</style>

<script>
import axios from "axios";
import VPaymentCard from "@/components/payment/v-payment-card.vue";

export default {
  components: { VPaymentCard },
  data() {
    return {
      payment: [],
      addAddress: false,
      addPayment: false,
      selectStreet: "Search",
    };
  },
  async created() {
    try {
      const res = await axios.get(
        process.env.VUE_APP_HOST + "/buyer/accounts/payment-method",
        {
          headers: {
            "AUTH-KEY": localStorage.Token,
          },
        }
      );
      const data = await res;
      this.payment = data.data;
    } catch (e) {
      alert("error.e");
    }
  },
  methods: {
    closeCardEdit() {
      this.addPayment = false;
    },
    async deleteCard() {
      await axios.delete(
        process.env.VUE_APP_HOST + "/buyer/accounts/payment-method",
        {
          headers: {
            "AUTH-KEY": localStorage.Token,
          },
        }
      );
      location.reload();
    },
  },
};
</script>
