<template>
  <div>
    <v-loader v-if="loader"></v-loader>
    <v-header :cart="cart.itemQuantity"></v-header>
    <section class="product">
      <div class="container">
        <div class="product__nav">
          <div class="back">
            <button @click="goToBack">Back to search results</button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 carousel__position">
            <div class="product__bg">
              <h2 class="product__name">{{ product.name }}</h2>
              <div class="product__rate">
                <img src="../assets/img/catalog/icon-star.svg" alt="rate" />
                <span class="review">{{ comment.count }} Reviews</span>
              </div>
              <div class="product__delivery">
                <span>Real-time: 2 hours</span>
                <img class="logo" src="../assets/img/header/logo.svg" alt="" />
              </div>
              <div class="product__cost">${{ product.price }}</div>
              <div v-if="serverNotification" class="invalid">
                {{ serverNotification }}
              </div>
              <div
                v-if="product.quantityMessage"
                class="product__rate"
                :class="{ invalid: !product.freeQuantity }">
                {{ product.quantityMessage }}
              </div>
              <div class="product__btn">
                <button
                  class="btn-orange"
                  :disabled="!product.freeQuantity"
                  @click="addToCart(product)">
                  Add to cart
                </button>
                <div
                  class="btn-like"
                  @click="addToWishList(product)"
                  :class="{ active: product.favorite }">
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.6549 5.63331C17.4161 3.15913 15.5552 1.36407 13.2264 1.36407C11.6749 1.36407 10.2543 2.1498 9.45499 3.4091C8.66287 2.13351 7.30052 1.36377 5.77388 1.36377C3.44538 1.36377 1.58421 3.15884 1.34566 5.63301C1.32678 5.7423 1.24936 6.31745 1.48476 7.25541C1.82402 8.6083 2.60763 9.83888 3.75033 10.8133L9.45121 15.6819L15.25 10.8136C16.3927 9.83888 17.1763 8.6086 17.5155 7.25541C17.7509 6.31775 17.6735 5.74259 17.6549 5.63331Z"
                      stroke=""
                      stroke-width="1.4"
                      stroke-linejoin="round" />
                  </svg>
                </div>
              </div>

              <v-dropdown-product
                :descriptions="descriptions"
                :product="product">
                <p class="slot=title">About the item</p>
                <p class="slot=info">{{ product.description }}</p>
              </v-dropdown-product>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="shop">
              <h2>{{ product.shop }}</h2>
              <div class="shop__info">
                <div class="shop-info__block">
                  <p>Rating</p>
                  <div class="rate">
                    <span class="shop__value">!!!add shop rate!</span>
                    <svg
                      data-v-91916128=""
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        data-v-91916128=""
                        d="M7.5 0L9.18385 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                        fill="#FFC400"></path>
                    </svg>
                  </div>
                </div>
                <div class="shop-info__block">
                  <p>Items</p>
                  <div class="shop__value">{{ product.freeQuantity }}</div>
                </div>
                <div class="shop-info__block">
                  <p>Working</p>
                  <div class="shop__value">3 months</div>
                </div>
              </div>
              <router-link to="/Shop" class="btn-orange" tag="button"
                >Go to store</router-link
              >
            </div>
          </div>
          <div class="col-md-8">
            <div class="review__title">Review</div>
            <v-comment :comment="comment" :product="product"></v-comment>
            <v-pagination
              :key="defaultKey"
              :total="total"
              :quantity="quantity"
              @changeCurrentPage="paginationAction"></v-pagination>
            <v-comment-form v-if="localStorage"></v-comment-form>
          </div>
        </div>
      </div>
    </section>
    <v-modal-cart
      v-if="successOrder"
      @closeModalFromChild="goToOrders"
      @deleteItemFromChild="closeModal"
      @closeModal="closeModal"
      :btnModalRight="btnModalRight"
      :btnModalLeft="btnModalLeft">
      <div class="modal__content">
        <img src="../assets/img/modals/modal-success.svg" />
        <div class="title">
          {{ modalTitle }}
        </div>
        <div class="text">
          {{ modalTitle }}
        </div>
      </div>
    </v-modal-cart>
    <v-modal-cart
      class="noAuth"
      v-if="noAuth"
      @closeModalFromChild="login"
      @deleteItemFromChild="singUp"
      @closeModal="closeModal"
      :btnModalRight="btnModalRight"
      :btnModalLeft="btnModalLeft">
      <div class="modal__content">
        <img src="/img/notifications/authentication.svg" />
        <div class="title">
          {{ modalTitle }}
        </div>
        <div class="text">
          {{ modalTitle }}
        </div>
      </div>
    </v-modal-cart>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: auto;
}
.logo {
  max-width: 54px;
}

//shop
.shop {
  margin-bottom: 50px;
  h2 {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    margin-bottom: 30px;
  }
  .btn-orange {
    margin-bottom: 20px;
    width: 70%;
  }
  .btn-light {
    width: 70%;
  }
}
.shop__info {
  width: 70%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  color: #7a7a7a;
  margin-bottom: 30px;
  .rate {
    margin-top: 10px;
  }
  .shop__value {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    color: #2e2e2e;
    margin-top: 10px;
  }
}

// product page
.product__nav {
  display: flex;
  justify-content: start;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  margin-bottom: 63px;
  .back {
    margin-right: 10rem;
  }
  .breadcrumbs {
    color: #979797;
  }
}
.product__name {
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 41px;
  margin-bottom: 16px;
}
.product__rate {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  color: #979797;
  margin-bottom: 15px;
  display: flex;
  .review {
    margin-left: 10px;
  }
}
.product__rate.invalid {
  color: #F06666;
  font-weight: bold;
  font-size: calc(8px + 12 * (100vw / 1920) );
  line-height: calc(10px + 10 * (100vw / 1920) );
  display: block;
}
.product__delivery {
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  margin-bottom: 16px;
  display: flex;
  span {
    margin-right: 10px;
  }
}
.product__value {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  color: #979797;
  margin-bottom: 10px;
  text-decoration: line-through;
}
.product__cost {
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 41px;
  margin-bottom: 40px;
}
.product__details {
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  margin-bottom: 20px;
  .options {
    display: flex;
    margin-top: 14px;
    * {
      width: 36px !important;
      height: 36px !important;
      margin-right: 20px;
      background: #f8f8f8;
      border-radius: 4px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      color: #979797;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.product__btn {
  display: flex;
  margin-bottom: 78px;
}
.btn-orange,
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
  //cursor: pointer;
}
.btn-orange {
  background: #ff9b30;
  color: #fff;
  transition: 0.3s;
  a {
    color: #fff;
  }
  &:hover {
    background: #e97a03;
    color: #fff;
  }
  &:disabled {
    background: #dfdfdf;
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
.btn-like {
  width: 45px;
  height: 45px;
  min-width: 45px;
  border-radius: 100%;
  border: 1px solid #dfdfdf;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  //cursor: pointer;
  svg path {
    fill: #fff;
    stroke: #000;
    transition: 0.3s;
  }
  &:hover {
    svg path {
      fill: #f83d3d;
      stroke: #f83d3d;
    }
  }
  &.active {
    svg path {
      fill: #f83d3d;
      stroke: #f83d3d;
    }
  }
}

//comments
.review__title {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  text-transform: uppercase;
  margin-bottom: 37px;
}
//slide
.comments-slide {
  max-height: 423px;
}

//modal
::v-deep .v-modal-cart {
  .footer {
    button {
      border: 1px solid #06b68c;
      &:first-child {
        color: #06b68c;
      }
      &:last-child {
        background: #06b68c;
        color: #fff;
      }
    }
  }
}
::v-deep .v-modal-cart.noAuth {
  .footer {
    button {
      border: 1px solid #ff9b30;
      &:first-child {
        color: #ff9b30;
      }
      &:last-child {
        background: #ff9b30;
        color: #fff;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .product__bg {
    width: calc(270px + 248 * (100vw / 1920));
  }
}
@media screen and (max-width: 1500px) {
  .product__name,
  .product__cost {
    font-size: calc(25px + 10 * (100vw / 1920));
  }
  .product__nav {
    font-size: calc(12px + 4 * (100vw / 1920));
  }
}
@media screen and (max-width: 800px) {
  .product__nav {
    flex-direction: column;
    a {
      margin-bottom: 20px;
      display: block;
    }
  }
}
@media screen and (max-width: 767px) {
  .product__bg {
    width: 100%;
  }
  .product__bg {
    background: #fff;
    border-radius: 20px;
    padding: 29px 16px;
  }
  .shop__info {
    width: 100%;
  }
  .col-md-6.carousel__position {
    padding-right: 0;
    padding-left: 0;
  }
}
</style>

<script>
import axios from "axios";
import { FingerprintService } from "@/FingerprintService";
import vLoader from "@/components/v-loader.vue";
import VHeader from "@/layots/v-header.vue";
import vDropdownProduct from "../components/dropdown/v-dropdown-product.vue";
import VComment from "../components/commets/v-comment";
import VCommentForm from "../components/commets/v-comment-form";
import VPagination from "../components/pagination/v-pagination";
import VModalCart from "../components/modal/v-modal-cart";

export default {
  services: ["FingerprintService"],
  components: {
    vLoader,
    VHeader,
    VPagination,
    VCommentForm,
    VComment,
    vDropdownProduct,
    VModalCart,
  },
  data() {
    return {
      loader: false,
      defaultKey: 1,
      page: 1,
      quantity: 4,
      total: 0,
      productId: this.$route.params.id,
      product: {},
      comment: {},
      visitorId: "",
      localStorage: "",
      slides: [],
      interval: 5000,
      showPrew: false,
      successOrder: false,
      btnModalRight: "",
      btnModalLeft: "",
      modalTitle: "",
      modalDescription: "",
      noAuth: false,
      serverNotification: "",
      cataloges: [],
      descriptions: [],
      cart: {},
    };
  },
  async created() {
    this.loader = true;
    const newFPS = new FingerprintService();
    this.visitorId = await newFPS.getUserToken();
    try {
      const res = await axios.get(
        `${process.env.VUE_APP_HOST}/buyer/orders/shopping-cart`,
        {
          headers: {
            "AUTH-KEY": localStorage.Token,
          },
          data: {
            segmentShop: this.$route.params.segmentShop,
            segmentProduct: this.$route.params.segmentProduct,
            deviceId: this.visitorId,
          },
        }
      );
      this.cart = res.data;
    } catch (e) {
      const error = e.response.data.error;
      this.serverNotification = error;
    }

    try {
      let segmentShop = this.$route.params.segmentShop;
      let segmentProduct = this.$route.params.segmentProduct;
      const res = await axios(
        `${process.env.VUE_APP_HOST}/buyer/store/product?segmentShop=${segmentShop}&segmentProduct=${segmentProduct}&deviceId=${this.visitorId}`,
        {
          method: "GET",
          headers: {
            "AUTH-KEY": localStorage.Token,
          },
        }
      );
      this.product = res.data;
      if (res.data.galleryImages.length > 1) {
        this.showPrew = true;
      } else {
        this.showPrew = false;
      }
    } catch (e) {
      const error = e.response.data.error;
      this.serverNotification = error;
    }

    this.paginationAction(this.page);
    this.defaultKey++;

    try {
      let productId = this.$route.params.id;
      let deviceId = this.visitorId;
      let start = this.page;
      let quantity = this.quantity;
      const res = await axios.get(
        `${process.env.VUE_APP_HOST}/buyer/store/review-product?start=${start}&quantity=${quantity}&productid=${productId}&deviceid=${deviceId}`,
        {
          headers: {
            "AUTH-KEY": localStorage.Token,
          },
        }
      );
      this.comment = res.data;
      this.total = res.data.count;
    } catch (e) {
      const error = e.response.data.error;
      this.serverNotification = error;
    }
    this.loader = false;
  },
  methods: {
    async addToCart(product) {
      this.loader = true;
      try {
        const result = await axios(
          `${process.env.VUE_APP_HOST}/buyer/orders/shopping-cart`,
          {
            method: "POST",
            headers: {
              "AUTH-KEY": localStorage.Token,
            },
            data: {
              segmentShop: product.sellerInfo.segmentShop,
              segmentProduct: product.segmentProduct,
              deviceId: this.visitorId,
            },
          }
        );
        this.successOrder = true;
        this.modalTitle =
          "Congratulations! Your item has been added to your cart";
        (this.modalDescription =
          "Should you continue shopping or complete an order?"),
          (this.btnModalRight = "Go to cart"),
          (this.btnModalLeft = "Continue shopping"),
          (this.cart = result.data);
        document.body.classList.toggle("active");
        document.documentElement.style.overflow = "hidden";
      } catch (e) {
        const error = e.response.data.error;
        this.serverNotification = error;
      }
      this.loader = false;
    },
    addToWishList(product) {
      this.loader = true;
      if (localStorage.Token) {
        if (product.favorite) {
          try {
            let id = product.id;
            axios(process.env.VUE_APP_HOST + "/buyer/orders/wish-product", {
              method: "DELETE",
              headers: {
                "AUTH-KEY": localStorage.Token,
              },
              data: {
                segmentShop: product.sellerInfo.segmentShop,
                segmentProduct: product.segmentProduct
              },
            });
            product.favorite = false;
          } catch (e) {
            const error = e.response.data.error;
            this.serverNotification = error;
          }
        } else {
          try {
            axios(process.env.VUE_APP_HOST + "/buyer/orders/wish-product", {
              method: "POST",
              headers: {
                "AUTH-KEY": localStorage.Token,
              },
              data: {
                segmentShop: product.sellerInfo.segmentShop,
                segmentProduct: product.segmentProduct
              },
            });
            product.favorite = true;
          } catch (e) {
            const error = e.response.data.error;
            this.serverNotification = error;
          }
        }
      } else {
        this.noAuth = true;
        this.modalTitle =
          "You must have an account to be able to add a product to your favorites";
        this.modalDescription = "Sing up or Login";
        this.btnModalRight = "Login";
        this.btnModalLeft = "Sing Up";
        document.body.classList.toggle("active");
        document.documentElement.style.overflow = "hidden";
      }
      this.loader = false;
    },
    goToBack() {
      this.$router.go(-1);
    },
    async paginationAction(pageNumber) {
      this.loader = true;
      try {
        let productId = this.$route.params.id;
        let deviceId = this.visitorId;
        let start = pageNumber;
        let quantity = this.quantity;
        const res = await axios.get(
          `${process.env.VUE_APP_HOST}/buyer/store/review-product?start=${start}&quantity=${quantity}&productid=${productId}&deviceid=${deviceId}`
        );
        this.comment = res.data;
      } catch (e) {
        const error = e.response.data.error;
        this.serverNotification = error;
      }
      this.loader = false;
    },
    goToOrders() {
      document.body.classList.remove("active");
      document.documentElement.style.overflow = "auto";
      this.$router.push("/Cart");
    },
    closeModal() {
      document.body.classList.remove("active");
      document.documentElement.style.overflow = "auto";
      this.noAuth = false;
      this.successOrder = false;
    },
    login() {
      this.$router.push("/Login");
      document.body.classList.remove("active");
      document.documentElement.style.overflow = "auto";
    },
    singUp() {
      this.$router.push("/Registration");
      document.body.classList.remove("active");
      document.documentElement.style.overflow = "auto";
    },
  },
};
</script>
