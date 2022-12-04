<template>
  <div class="v-wishlist-items">
    <div class="" v-for="(product, index) in products" :key="index">
      <div class="v-wishlist-items__wrap">
        <div class="wishlist__info">
          <img :src="product.pictureUrl" />
          <div class="text">
            <p class="title">{{ product.name }}</p>
            
            <p class="type">{{ product.type }}</p>
            <p class="price">${{ product.price }}</p>
            <div class="rate">
              <span>rate: {{ product.rate }}</span>
              <router-link :to="`/Product/${product.id}`"
                >{{ product.review }} Reviews</router-link
              >
            </div>
            <button class="btn-light" v-if="product.freeQuantity" @click="addToCart(product)">
              Add to cart
            </button>
            <div class="invalid" v-if="!product.freeQuantity">{{ notAvailable }}</div>
          </div>
        </div>
        <div class="wishlist__nav-btn">
          <v-wishlist-btns
            :product="product"
            @deleteItem="deleteItem"
            @addToCart="addToCart"></v-wishlist-btns>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-wishlist-items__wrap {
  display: flex;
  justify-content: space-between;
}
.wishlist__info {
  display: flex;
  margin-bottom: 24px;
  img {
    width: 204px;
    height: 220px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 25px;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    * {
      margin: 0;
      padding: 0;
    }
    .title {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      margin-bottom: 10px;
    }
    .type {
      display: none;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 12px;
      color: #979797;
    }
    .price {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
    }
    .rate {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px;
      color: #979797;
      a {
        color: #979797;
      }
    }
  }

  //btn
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
    &:disabled,
    &:disabled:hover {
      border: 1px solid #dfdfdf;
      background: #fff;
      color: #dfdfdf;
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
      background: #ff9b30;
      border: 1px solid #fff;
      color: #fff;
    }
  }
}

@media screen and (max-width: 998px) {
  .wishlist__nav-btn {
    display: none !important;
  }
}
@media screen and (max-width: 575px) {
  .wishlist__info img {
    width: 118px;
    min-width: 118px;
    height: 117px;
  }
}
</style>

<script lang="js">
import VWishlistBtns from "@/components/Wishlist/v-wishlist-btns.vue";
export default {
  components: {
    VWishlistBtns,
  },
  props: ["products", "wishlists", "notAvailable"],
  methods: {
    addToCart(product) {
      this.$emit("addToCart", product)
    },
    deleteItem(product) {
      this.$emit("deleteItem", product)
    },
  },
};
</script>
