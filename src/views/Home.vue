<template>
  <div class="home">
    <v-loader v-if="loader"></v-loader>
    <v-header :cart="cart"></v-header>
    <v-banner></v-banner>

    <section class="products">
      <div class="container">
        <span v-if="serverNotification" class="invalid">
          {{ serverNotification }}
        </span>
        <v-cards
          :previews="previews"
          @addToWishList="addToWishList"
          @showModalForAuth="showModalForAuth"></v-cards>

        <v-pagination
          v-if="addPagination"
          :key="defaultKey"
          :total="total"
          :quantity="quantity"
          @changeCurrentPage="paginationAction"></v-pagination>
      </div>
    </section>
    <v-modal-cart
      v-if="noAuth"
      btnModalRight="Login"
      btnModalLeft="Sing Up"
      @closeModalFromChild="close"
      @deleteItemFromChild="deleteItemFromChild"
      @closeModal="closeModal">
      <div class="modal__content">
        <img src="/img/notifications/authentication.svg" />
        <div class="title">
          You must have an account to be able to add a product to your favorites
        </div>
        <div class="text">Sing up or Login</div>
      </div>
    </v-modal-cart>
  </div>
</template>

<style lang="scss" scoped>
::v-deep .v-modal-cart .modal-wrap-bg__content .footer button {
  background: #ff9b30;
  border: 1px solid #ff9b30;
}
::v-deep .v-modal-cart .modal-wrap-bg__content .footer button:first-child {
  background: white;
  color: #ff9b30;
  border: 1px solid #ff9b30;
}
</style>

<script lang="js">
import axios from "axios";
import { FingerprintService } from "@/FingerprintService";
import vLoader from "@/components/v-loader.vue";
import VHeader from "@/layots/v-header.vue";
import vBanner from "@/components/v-banner.vue"; // @ is an alias to /src
import VCards from "@/components/v-cards.vue";
import VPagination from "@/components/pagination/v-pagination.vue";
import VModalCart from "@/components/modal/v-modal-cart.vue"

export default {
  services: ['FingerprintService'],
  components: {
    vLoader,
    VHeader,
    VPagination,
    VCards,
    vBanner,
    VModalCart
  },
  data() {
    return {
      loader: false,
      serverNotification: "",
      quantityShow: 6, // items in the category
      noAuth: false,
      cart: 0,
      deviceId: "",
      previews: [],
      defaultKey: 1,
      page: 1,
      quantity: 2,
      total: 0,
      addPagination: true,
    };
  },
  async created() {
    this.loader = true;
    const newFPS = new FingerprintService();
    this.visitorId = await newFPS.getUserToken();

    this.paginationAction(this.page);
    const res = await axios.get(
      `${process.env.VUE_APP_HOST}/buyer/orders/shopping-cart?deviceid=${this.visitorId}`,
      {
        headers: {
          "AUTH-KEY": localStorage.Token,
        },
      }
    );
    if (res.status === 204) {
      this.cart = 0
      this.$forceUpdate();
    } else {
      this.cart = res.data.itemQuantity;
    }

    try {
      let quantityShow = this.quantityShow;
      let deviceId = this.visitorId;
      let start = this.page;
      let quantity = this.quantity;
      const res = await axios.get(`${process.env.VUE_APP_HOST}/buyer/store/catalog/latest-products?quantityshow=${quantityShow}&deviceid=${deviceId}&start=${start}&quantity=${quantity}`, {
        headers: {
          "AUTH-KEY": localStorage.Token
        }
      });
      this.previews = res.data.previews;
    } catch (e) {
      alert("error.e")
    }
    this.loader = false;
  },
  methods: {
    async paginationAction(pageNumber) {
      this.loader = true;
      try {
         let quantityShow = this.quantityShow;
         let deviceId = this.visitorId;
         let start = pageNumber;
         let quantity = this.quantity;
         const res = await axios.get(`${process.env.VUE_APP_HOST}/buyer/store/catalog/latest-products?quantityshow=${quantityShow}&deviceid=${deviceId}&start=${start}&quantity=${quantity}`, {
          headers: {
            "AUTH-KEY": localStorage.Token
          }
        });
        this.total = res.data.totalQuantity;
        this.previews = res.data.previews;

      } catch (e) {
        this.addPagination = false;
      }
      this.loader = false;
    },
    addToWishList(product) {
      this.loader = true;
      if (product.favorite) {
        try {
        let id = product.id;
        axios(process.env.VUE_APP_HOST + "/buyer/orders/wish-product", {
          method: "DELETE",
          headers: {
            "AUTH-KEY": localStorage.Token
          },
          data: {
            segmentShop: product.sellerInfo.segmentShop,
            segmentProduct: product.segmentProduct
          }
        });
        product.favorite = false;
      } catch (e) {
        const error = e.response.data.error;
        this.serverNotification = error;
      }} else {
        try {
        axios(process.env.VUE_APP_HOST + "/buyer/orders/wish-product", {
          method: "POST",
          headers: {
            "AUTH-KEY": localStorage.Token
          },
          data: {
            segmentShop: product.sellerInfo.segmentShop,
            segmentProduct: product.segmentProduct
          }
        });
        product.favorite = true;
      } catch (e) {
        const error = e.response.data.error;
        this.serverNotification = error;
      }
      }
      this.loader = false;
    },
    close() {
      this.$router.push("/Login");
      document.body.classList.remove("active");
      document.documentElement.style.overflow = "auto";
    },
    deleteItemFromChild() {
      this.$router.push("/Registration");
      document.body.classList.remove("active");
      document.documentElement.style.overflow = "auto";
    },
    closeModal() {
      this.noAuth = false;
      document.body.classList.remove("active");
      document.documentElement.style.overflow = "auto";
    },
    showModalForAuth() {
      this.noAuth = true;
      document.body.classList.toggle("active");
      document.documentElement.style.overflow = "hidden";
    }
  },
};
</script>
