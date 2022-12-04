<template>
  <div class="v-wishlist-section">
    <div>
      <div class="title" v-for="(wishlist, index) in wishlists" :key="index">
        <div class="wishlist-section__header">
          <h3>{{ wishlist.section }}</h3>
        </div>

        <v-wishlist-items
          :products="wishlist.products"
          :notAvailable="notAvailable"
          @addToCart="addToCart"
          @deleteItem="deleteItem">
        </v-wishlist-items>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-wishlist-section {
  padding-top: 60px;
}
.wishlist-section__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 55px;
  h3 {
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px;
    margin: 0;
  }
}
.wishlist__edit {
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  svg {
    margin-right: 11px;
  }
}
</style>

<script lang="js">
import VWishlistItems from "@/components/Wishlist/v-wishlist-items.vue";
export default {
  components: { VWishlistItems },
  props: ["wishlists", "notAvailable"],
  data() {
    return {
      toast: true,
      productName: "",
      productDescription: ""
    }
  },
  methods: {
    addToCart(product) {
      this.$emit("addToCart", product);

    },
    deleteItem(product) {
      this.$emit("deleteItem", product);
    },
    addToCheckout(product) {
      this.$emit("addToCheckout", product)
    }
  },
};
</script>


