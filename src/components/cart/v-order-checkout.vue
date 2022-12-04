<template>
  <div class="v-order-checkout">
    <h3>Order summary</h3>
    <div class="order__block" v-for="(product, id) in products" :key="id">
      <img :src="product.product.imageProduct" />
      <div class="text">
        <h5>{{ product.name }}</h5>
        <div class="parameters">
          <span>Size: {{ product.product.size }}</span>
          <span> | </span>
          <span>Color: {{ product.product.color }}</span>
        </div>
        <p class="price">${{ product.product.price }}</p>
      </div>
    </div>

    <div class="grey-line"></div>

    <div class="order__total">
      <p>Total</p>
      <p>${{ cart.totalSum }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-order-checkout {
  padding: 30px 36px 37px 36px;
  border-radius: 15px;
  box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.09);
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  margin-bottom: 50px;
  h3 {
    margin-bottom: 60px;
  }
  .order__block {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    color: #979797;
    margin-bottom: 30px;
    img {
      width: 90px;
      min-width: 90px;
      height: 90px;
      border-radius: 100%;
      object-fit: cover;
      margin-right: 30px;
      border: 1px solid #efefef;
    }
    .text {
      h5 {
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        color: #2e2e2e;
        margin-bottom: 10px;
      }
      .parameters {
        margin-bottom: 19px;
      }
      .price {
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        color: #2e2e2e;
      }
    }
  }
  .order__total {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

<script lang="js">
export default {
  props: ["cart", "products"],
};
</script>
