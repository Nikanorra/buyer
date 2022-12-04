<template>
  <div class="v-wishlist-btns">
    <div class="wishlist__nav">
      <button @click="deleteItem(product)">Delete</button>
      <button @click="addToCart(product)" :disabled="!product.freeQuantity">Add to cart</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wishlist__nav {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  button {
    width: 153px;
    text-align: right;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    color: #ff9b30;
    cursor: pointer;
    &:first-child {
      margin-bottom: 16px;
    }
    &:disabled {
      color: #dfdfdf;
    }
    .wishlist__options {
      height: 168px;
      width: 153px;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.13);
      color: #2e2e2e;
      margin-top: 12px;
      li {
        width: auto;
        color: #2e2e2e;
      }
    }
  }
}

.fadeY-enter-active,
.fadeY-leave-active {
  transition: all 0.5s ease-out;
}
.fadeY-enter,
.fadeY-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>

<script lang="js">
export default {
  props: ["product"],
  data() {
    return {
      visibleWishlist: false,
    };
  },
  methods: {
    deleteItem(product) {
      this.$emit("deleteItem", product)
    },
    addToCart(product) {
      this.$emit("addToCart", product);
    },
  },
};
</script>
