<template>
  <div class="settings">
    <v-header :cart="cart"></v-header>
    <div class="container">
      <div class="col-md-4">
        <h2>Settings</h2>
      </div>
      <div class="row">
        <div class="col-lg-2 col-md-3 d-none d-sm-none d-md-block">
          <v-sidebar-settings></v-sidebar-settings>
        </div>
        <div class="col-lg-10 col-md-9">
          <router-view></router-view>
        </div>
      </div>
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
import VSidebarSettings from "../layots/v-sidebar-settings";
export default {
  components: { VSidebarSettings, VHeader },
  props: {
    cart: {
      type: Number,
      default: 0,
    },
  },
};
</script>
