<template>
  <div class="order-info order-info__product">
    <div class="order-info__wrap">
      <div class="order-info__header">
        <div>Tracking Number: {{ info.trackingNumber }}</div>
      </div>
      <div class="order-info__line"></div>
      <div class="d-flex">
        <div class="order-info__pic">
          <img :src="info.productPreview" alt="product" />
        </div>
        <div class="order-info__main">
          <div class="order-info__part">
            <div class="">{{ info.title }}</div>
            <p>
              <span>Size: {{ info.size }}</span>
              <span> | </span>
              <span>Color: {{ info.color }}</span>
            </p>
          </div>
          <div class="order-info__part">
            <div>$ {{ info.value }}</div>
            <p>Quantity: x{{ info.productQuantity }}</p>
            <p>Sold by: no info</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  props: ["info"],
};
</script>
