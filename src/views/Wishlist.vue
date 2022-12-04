<template>
  <div class="wishlist">
    <transition name="fadeX">
      <div
        class="toast"
        v-if="toast"
        :class="{ danger: toastDanger, success: toastSuccess }">
        <div class="toast_title">{{ productDescription }}</div>
        <div class="toast__body">
          <img :src="productPreview" :alt="productName" />
          <div class="text">{{ productName }}</div>
        </div>
      </div>
    </transition>
    <v-loader v-if="loader"></v-loader>
    <div class="container">
      <div class="row">
        <div class="col-lg-2 wishlist__mobile-wrap">
          <h2>Wishlist</h2>
          <div class="wishlist__sidebar">
            <p>
              <span>Your list</span>
              <span>({{ totalQuantityItems }})</span>
            </p>
            <button class="btn-light" @click="removeAll">
              Remove all items
            </button>
            <button class="btn-orange" @click="addToCartAll">
              Add all items to card
            </button>
          </div>
        </div>

        <span v-if="serverNotification" class="invalid">
          {{ serverNotification }}
        </span>

        <div class="col-lg-10">
          <v-wishlist-section
            :wishlists="wishlists"
            :notAvailable="notAvailable"
            @addToCart="addToCart"
            @deleteItem="deleteItem">
          </v-wishlist-section>
          <v-pagination></v-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.wishlist {
  img {
    width: 100%;
    max-height: 344px;
    border-radius: 8px;
    margin: 0 auto;
  }
  h2 {
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 43px;
    margin-bottom: 60px;
  }
  .wishlist__sidebar-mobile {
    display: none;
  }
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }
}
.invalid {
  margin: 5px 0 !important;
  padding: 10px !important;
}
//btn
.btn-orange,
.btn-light {
  width: 100%;
  height: 45px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  border-radius: 22px;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.btn-orange {
  background: #ff9b30;
  color: #fff;
  grid-column-start: 2;
  grid-column-end: 3;
  transition: 0.3s;
  a {
    color: #fff;
  }
  &:hover {
    background: #e97a03;
    color: #fff;
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
    background: #fabf80;
    border: 1px solid #fff;
    color: #fff;
  }
}

//toast
.toast {
  position: fixed;
  z-index: 3;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 100px;
  background: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px 0px 7px 0px #00000026;
  padding: 20px;
  .toast_title {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }
  &.danger {
    border: 3px solid #f83d3d55;
    border-bottom: none;
    .toast_title {
      color: #f83d3d;
    }
  }
  &.success {
    border: 3px solid #06b68d44;
    border-bottom: none;
    .toast_title {
      color: #06b68c;
    }
  }
  .toast__body {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      border-radius: 100%;
      object-fit: contain;
      margin: 0;
      margin-right: 15px;
      box-shadow: 0px 0px 7px 0px #00000026;
    }
    .text {
      font-size: 12px;
      color: grey;
    }
  }
}

//amination
.fadeX-enter-active,
.fadeX-leave-active {
  transition: all 0.5s ease-out;
}
.fadeX-enter,
.fadeX-leave-to {
  opacity: 0;
  transform: translateX(100vh);
}

@media screen and (max-width: 998px) {
  .wishlist {
    .container {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    .col-lg-2.wishlist__mobile-wrap {
      padding-right: 0 !important;
      padding-left: 0 !important;
      -webkit-box-shadow: 0px 4px 8px 0px #00000012;
      -moz-box-shadow: 0px 4px 8px 0px #00000012;
      box-shadow: 0px 4px 8px 0px #00000012;
      margin-bottom: 20px;
    }
    h2 {
      text-align: center;
      margin-bottom: 18px;
    }
    .wishlist__sidebar-mobile {
      display: flex;
      padding-bottom: 22px;
      .col-6 {
        text-align: center;
        button {
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 17px;
          color: #2e2e2e;
          position: relative;
          width: 150px;
          height: 30px;
          &.active {
            color: #ff9b30;
            &:after {
              content: "";
              width: 7px;
              height: 2px;
              border-radius: 2px;
              background: #ff9b30;
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
            }
          }
        }
      }
    }
  }
  .wishlist__sidebar {
    display: none;
  }
  .v-wishlist-section {
    padding-right: 15px !important;
    padding-left: 15px !important;
  }
  .wishlist__info .text {
    justify-content: start !important;
    .type {
      display: block !important;
      margin-bottom: 2px;
    }
    .rate {
      margin-bottom: 14px;
    }
  }
  //.wishlist__nav .v-wishlist-btns {
  //  display: none !important;
  //}
}
@media screen and (max-width: 575px) {
  .wishlist__info img {
    width: 118px;
    height: 117px;
  }
  .wishlist-section__header {
    margin-bottom: 20px !important;
  }
  .wishlist__info {
    .text {
      .title {
        font-size: 12px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        line-height: 14px !important;
        margin-bottom: 0 !important;
        margin-bottom: 2px;
      }
      .type {
        display: block !important;
        margin-bottom: 2px;
      }
      .price {
        font-size: 12px !important;
        font-style: normal !important;
        font-weight: 700 !important;
        line-height: 14px !important;
        margin-bottom: 2px;
        margin-bottom: 14px !important;
      }
      .rate {
        display: none;
      }
    }
    .btn-light {
      width: 86px !important;
      height: 26px !important;
      font-size: 10px !important;
      line-height: 12px !important;
    }
  }
}
</style>

<script>
import axios from "axios";
import { FingerprintService } from "@/FingerprintService";
import VWishlistSection from "../components/Wishlist/v-wishlist-section";
import vLoader from "@/components/v-loader.vue";
import VPagination from '@/components/pagination/v-pagination.vue';
export default {
  components: { VWishlistSection, vLoader, VPagination },
  data() {
    return {
      visitorId: "",
      notAvailable: "",
      toast: false,
      productName: "",
      productDescription: "",
      productPreview: "",
      toastDanger: false,
      toastSuccess: false,
      activeItem: true,
      activeList: false,
      loader: false,
      serverNotification: "",
      wishlists: [],
      totalQuantityItems: null,
    };
  },
  async created() {
    const newFPS = new FingerprintService();
    this.visitorId = await newFPS.getUserToken();
    this.init();
  },
  methods: {
    async init() {
      this.loader = true;
      try {
        let start = 1;
        let quantity = 25;
        const newWishLists = await axios.get(
          `${process.env.VUE_APP_HOST}/buyer/orders/wish-product?start=${start}&quantity=${quantity}`,
          {
            headers: {
              "AUTH-KEY": localStorage.Token,
            },
          }
        );
        this.wishlists = newWishLists;
        this.notAvailable = "This product is currently out of stock";
        if (!newWishLists.data) {
          this.totalQuantityItems = 0;
        } else {
          this.totalQuantityItems = newWishLists.data.products.length;
        }
      } catch (e) {
        const error = await e.response.data.error;
        this.serverNotification = error;
      }
      this.loader = false;
    },
    removeAll() {
      this.loader = true;
      this.productName = "All items from wishlist";
      this.productDescription = "Cleaned all wishlist";
      this.productPreview = "/img/notifications/danger.svg";
      this.toastDanger = true;
      this.toast = true;
      this.showToast();

      this.loader = true;
      try {
        axios(process.env.VUE_APP_HOST + "/buyer/orders/clear-wish-list", {
          method: "DELETE",
          headers: {
            "AUTH-KEY": localStorage.Token,
          },
          data: {},
        });
        this.wishlists = [];
        this.totalQuantityItems = 0;
      } catch (e) {
        alert("removeAll");
      }
      this.loader = false;
    },
    addToCartAll() {
      this.loader = true;
      this.productName = "All items from wishlist";
      this.productDescription = "Added to shop cart";
      this.productPreview = "/img/notifications/success.svg";
      this.toastSuccess = true;
      this.toast = true;
      this.showToast();
      try {
        this.loader = true;
        axios(process.env.VUE_APP_HOST + "/buyer/orders/wishlist-to-cart", {
          method: "POST",
          headers: {
            "AUTH-KEY": localStorage.Token,
          },
          data: {},
        });
      } catch (e) {
        alert("addToCartAll");
      }
      this.loader = false;
    },
    async addToCart(product) {
      this.loader = true;
      this.productName = product.name;
      this.productDescription = "Added to shop cart";
      this.productPreview = product.pictureUrl;
      this.toastSuccess = true;
      this.toast = true;
      this.showToast();
      try {
        const result = await axios(
          `${process.env.VUE_APP_HOST}/buyer/orders/shopping-cart?deviceid=${this.visitorId}`,
          {
            method: "POST",
            headers: {
              "AUTH-KEY": localStorage.Token,
            },
            data: {
              productId: product.id,
              deviceId: this.visitorId,
            },
          }
        );
        this.successOrder = true;
        this.cart = result.data;
      } catch (e) {
        const error = e.response.data.error;
        this.serverNotification = error;
      }
      this.loader = false;
    },
    async deleteItem(product) {
      this.productName = product.name;
      this.productDescription = "Deleted from wishlist";
      this.productPreview = product.pictureUrl;
      this.toastDanger = true;
      this.toast = true;
      this.showToast();
      try {
        await axios(process.env.VUE_APP_HOST + "/buyer/orders/wish-product", {
          method: "DELETE",
          headers: {
            "AUTH-KEY": localStorage.Token,
          },
          data: {
            id: product.id,
          },
        });
        this.init();
      } catch (e) {
        const error = e.response.data.error;
        this.serverNotification = error;
      }
    },
    showToast() {
      setTimeout(() => {
        this.toast = false;
      }, 3500);
    },
    itemView() {
      this.activeItem = !this.activeItem;
      this.activeList = !this.activeList;
    },
    listView() {
      this.activeItem = !this.activeItem;
      this.activeList = !this.activeList;
    },
  },
};
</script>
