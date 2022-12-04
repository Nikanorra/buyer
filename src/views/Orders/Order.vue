<template>
  <div class="list">
    <div class="container">
      <v-orders-table :orders="orders"> </v-orders-table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
::v-deep .btn-orange,
::v-deep .btn-light {
  width: 100% !important;
  margin-right: 0;
  margin-top: 0;
}
::v-deep .btn-orange {
  margin-bottom: 16px;
}
</style>

<script lang="js">
import axios from "axios";
import VOrdersTable from "@/components/order/v-orders-table.vue";
import { FingerprintService } from "@/FingerprintService";
export default {
  services: ['FingerprintService'],
  components: { VOrdersTable, },
  data() {
    return {
      visitorId: "",
      orders: [],
      defaultKey: 1,
      page: 1,
      quantity: 2,
      total: 0,
    };
  },
  async created() {
    this.$emit("loaderTrue");
    const newFPS = new FingerprintService();
    this.visitorId = await newFPS.getUserToken();

    try {
      let deviceid = this.visitorId;
      let id = this.$route.params.id;
      const res = await axios(`${process.env.VUE_APP_HOST}/buyer/orders/order-by-cart?deviceid=${deviceid}&id=${id}`, {
        method: "GET",
        headers: {
          "AUTH-KEY": localStorage.Token
        },
      });
      const data = await res;
      this.orders = data.data.items;
    } catch(e) {
      alert(e)
    }
    this.$emit("loaderFalse");
  },
};
</script>
