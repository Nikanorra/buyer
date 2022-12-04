<template>
  <div class="cart">
    <v-header :cart="cart.itemQuantity"></v-header>
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="cart__header">
            <h2>Cart</h2>
            <span>{{ cart.itemQuantity }} items</span>
          </div>
          <span v-if="serverNotification" class="invalid">{{
            serverNotification
          }}</span>
          <v-cart
            :products="products"
            :modalVisible="modalVisible"
            @modalVisibleTrue="modalOpen"
            @modalVisibleFalse="modalClose"
            @increase="increase"
            @decrease="decrease"
            @deleteItem="deleteItem">
          </v-cart>
        </div>
        <div class="col-lg-5">
          <v-order :cart="cart"></v-order>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 84%;
  color: #2e2e2e;
  margin-bottom: 80px;
  h2 {
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 43px;
  }
  span {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
}
</style>

<script lang="js">
import axios from "axios";
import { FingerprintService } from "@/FingerprintService";
import VHeader from "@/layots/v-header.vue";
import vCart from "@/components/cart/v-cart.vue";
import VOrder from "@/components/cart/v-order.vue";

export default {
  services: ['FingerprintService'],
  components: {
    VHeader,
    VOrder,
    vCart,
  },
  data() {
    return {
      products: [],
      cart: {},
      visitorId: "",
      serverNotification: "",
      modalVisible: false,
    };
  },
  async created() {
    const newFPS = new FingerprintService();
    this.visitorId = await newFPS.getUserToken();

    const res = await axios.get(`${process.env.VUE_APP_HOST}/buyer/orders/shopping-cart`, {
      headers: {
        "AUTH-KEY": localStorage.Token,
      },
      data: {
        segmentShop: this.$route.params.segmentShop,
        segmentProduct: this.$route.params.segmentProduct,
        deviceId: this.visitorId,
      },
    });
    this.products = res.data.products;
    this.cart = res.data;
  },
  methods: {
    modalOpen(product, event) {
      this.modalVisible = true;
      document.body.classList.toggle("active");
      document.documentElement.style.overflow = 'hidden'
    },
    modalClose() {
      this.modalVisible = false;
      document.body.classList.remove("active");
      document.documentElement.style.overflow = 'auto'
    },
    async increase(product, event) {
      try {
        const result = await axios(
          process.env.VUE_APP_HOST + "/buyer/orders/shopping-cart/increase-item",
          {
            method: "POST",
            headers: {
              "AUTH-KEY": localStorage.Token,
            },
            data: {
              segmentShop: product.segmentShop,
              segmentProduct: product.segmentProduct,
              deviceId: this.visitorId,
            },
          }
        );
        this.products = result.data.products;
        this.cart = result.data;
      } catch (e) {
        const error = await e.response.status;
        if (error === 406) {
          this.serverNotification = `You have reached the maximum number of the "${product.name}", with id: "${product.id}" that can be ordered.`;
        }
      }
    },
    async decrease(product, event) {
      try {
        const result = await axios(
          process.env.VUE_APP_HOST + "/buyer/orders/shopping-cart/decrease-item",
          {
            method: "POST",
            headers: {
              "AUTH-KEY": localStorage.Token,
            },
            data: {
              segmentShop: product.segmentShop,
              segmentProduct: product.segmentProduct,
              deviceId: this.visitorId,
            },
          }
        );
        this.products = result.data.products;
        const productItem = result.data.products.find((item) => item.product.id === product.id);
        if (productItem && productItem.quantity === 0) {
          this.deleteItem();
        }
        this.cart = result.data;
      } catch (e) {
        const error = await e.response.data.error;
        this.serverNotification = error;
      }
    },
    async deleteItem(product) {
      try {
        const result = await axios(
          `${process.env.VUE_APP_HOST}/buyer/orders/shopping-cart`,
          {
            method: "DELETE",
            headers: {
              "AUTH-KEY": localStorage.Token
            },
            data: {
              segmentShop: product.product.segmentShop,
              segmentProduct: product.product.segmentProduct,
              deviceId: this.visitorId,
            },
          }
        );
          this.modalVisible = false;
          document.body.classList.remove("active");
          document.documentElement.style.overflow = 'auto';
          this.products = result.data.products;
          this.cart = result.data;
      } catch (error) {
        alert("ERROR");
      }
    }
  },
};
</script>
