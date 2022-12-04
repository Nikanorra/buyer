<template>
  <div class="orders">
    <v-loader v-if="loader"></v-loader>
    <v-header :cart="cart"></v-header>
    <div class="container">
      <router-view
        @loaderTrue="loader = true"
        @loaderFalse="loader = false"></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 43px;
  margin-bottom: 60px;
}
</style>
<script>
import VHeader from "@/layots/v-header.vue";
import vLoader from "@/components/v-loader.vue";
export default {
  components: { VHeader, vLoader },
  props: {
    cart: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      loader: false,
    }
  },
};
</script>
