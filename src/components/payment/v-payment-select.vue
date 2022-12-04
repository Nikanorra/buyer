<template>
  <div class="v-payment-select">
    <div class="checkout__type" v-for="payment in payments" :key="payment.id">
      <label class="checkout__check">
        <input type="radio" name="type-delivery" />
        <div class="payment__wrap">
          <div class="payment">
            <div class="payment__header">
              <div class="type">{{ payment.type }}</div>
              <div class="number">**** {{ payment.number }}</div>
            </div>
            <div class="payment__footer">
              <div class="text">
                <p>Card Holder</p>
                <span>{{ payment.firstName }}</span
                ><span>{{ payment.lastName }}</span>
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-payment-select {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
  justify-content: start;
}

//payment
.payment__wrap {
  width: 318px;
  height: 134px;
  cursor: pointer;
  border-radius: 18px;
  transition: 0.5s;
}
.payment {
  border-radius: 15px;
  box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.05);
  padding: 20px;
  transition: 0.5s;
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
  justify-content: center;
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
}

//cards - check type of payment
.checkout__check {
  margin-right: 22px;
  input {
    display: none;
  }
  input:checked + .payment__wrap {
    background: linear-gradient(102.02deg, #ffd88b -25.5%, #ff9c31 100%);
    border-radius: 18px;
    box-shadow: none;
    * {
      color: #fff;
    }
  }
}
</style>

<script lang="js">
export default {
  name: "v-payment-select",
  props: ["payments"],
};
</script>
