<template>
  <div class="v-wishlist-sidebar">
    <div>
      <div class="title" v-for="(wishlist, index) in wishlists" :key="index">
        <router-link to="/">
          {{ wishlist.section }}
        </router-link>
        <span>({{ wishlist.qty }})</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  color: #979797;
  margin-bottom: 20px;
  a {
    color: #979797;
  }
}
</style>

<script lang="ts">
export default {
  props: ["wishlists"],
};
</script>
