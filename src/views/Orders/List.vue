<template>
  <div class="list">
    <v-orders-table :orders="orders">
      <v-pagination
        v-if="addPagination"
        :key="defaultKey"
        :total="total"
        :quantity="quantity"
        @changeCurrentPage="paginationAction"></v-pagination>
    </v-orders-table>
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
import VPagination from "@/components/pagination/v-pagination";
export default {
  components: { VOrdersTable, VPagination,  },
  data() {
    return {
      orders: [],
      defaultKey: 1,
      page: 1,
      quantity: 5,
      total: 0,
      addPagination: true,
    };
  },
  async created() {
    this.$emit("loaderTrue");
    this.paginationAction(this.page);
    try {
      let start = this.page;
      let quantity = this.quantity;
      let status = "all";
      const res = await axios(`${process.env.VUE_APP_HOST}/buyer/orders/orders?start=${start}&quantity=${quantity}&status=${status}`, {
        method: "GET",
        headers: {
          "AUTH-KEY": localStorage.Token
        },
      });
      const data = await res;
      this.total = data.data.quantity;
      this.orders = data.data.orderItems;
      } catch(e) {
        alert(e)
      }
      this.$emit("loaderFalse");
  },
  methods: {
    async paginationAction(pageNumber) {
      this.$emit("loaderTrue");
      try {
        let start = pageNumber;
        let quantity = this.quantity;
        let status = "Paid";
        const res = await axios(
          `${process.env.VUE_APP_HOST}/buyer/orders/orders?start=${start}&quantity=${quantity}&status=${status}`, {
            method: "GET",
            headers: {
              "AUTH-KEY": localStorage.Token
            },
          }
        );
        const data = await res;
        this.total = data.data.quantity;
        this.orders = data.data.orderItems;
      } catch (e) {
        this.addPagination = false;
      }
      this.$emit("loaderFalse");
    },
  }
};
</script>
