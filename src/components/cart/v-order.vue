<template>
  <div class="v-order">
    <h3>Order summary</h3>
    <p v-if="activeCheckout" class="invalid">You cart is empty</p>
    <div class="order__block">
      <span>{{ cart.itemQuantity }} items</span>
      <span>${{ cart.totalSum }}</span>
    </div>
    <div class="order__block">
      <span>Shipping</span>
      <span>-</span>
    </div>
    <hr />
    <div class="order__block">
      <span>Total</span>
      <span>${{ cart.totalSum }}</span>
    </div>
    <div class="btn__block">
      <button
        class="btn-orange"
        :disabled="activeCheckout"
        @click="goToCheckout">
        Checkout
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-order {
  padding: 30px 36px 37px 36px;
  border-radius: 15px;
  box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.09);
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  margin-bottom: 3em;
  h3 {
    margin-bottom: 60px;
  }
  .order__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 30px;
    }
  }
}

//btn
.btn__block {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-orange {
  width: 100%;
  height: 53px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  border-radius: 27px;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff9b30;
  color: #fff;
  grid-column-start: 2;
  grid-column-end: 3;
  transition: 0.3s;
  &:disabled {
    opacity: 0.5;
  }

  a {
    color: #fff;
  }
  &:hover {
    background: #e97a03;
    color: #fff;
  }
}
</style>

<script lang="js">
export default {
  name: "v-order",
  props: ["products", "cart"],
  computed: {
    activeCheckout() {
      if (this.cart.itemQuantity === 0 || this.cart.itemQuantity === undefined) {
        return true ;
      }
      return false;
    }
  },
  methods: {
    goToCheckout() {
      if (this.activeCheckout) {
        this.activeCheckout = true;
      } else {
        this.$router.push("/Checkout");
      }
    },
  },
};
</script>
