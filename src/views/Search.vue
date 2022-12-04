<template>
  <div class="category">
    <v-loader v-if="loader"></v-loader>
    <v-header :cart="cart" @search="search"></v-header>
    <section class="title">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 filter__wrap">
            <v-catalog
              :catalogs="catalogs"
              @goToCatalog="goToCatalog"
              @goToCategory="goToCategory"
              @goToSubcategory="goToSubcategory"></v-catalog>
          </div>
          <div class="col-lg-10 col-md-12 products__position">
            <section class="products">
              <div class="container">
                <div class="products__header">
                  <v-cards-btn
                    @changeForGridView="gridStyle"
                    @changeForLineView="lineStyle"
                    :lineActive="lineActive"
                    :gridActive="gridActive"
                    @changedMobileView="changedMobileView"
                    :gridViewMobile="gridViewMobile">
                  </v-cards-btn>
                </div>

                <span v-if="serverNotification" class="invalid">
                  {{ serverNotification }}
                </span>
                <v-cards-by-category
                  :catalog="catalog"
                  :lineActive="lineActive"
                  :gridActive="gridActive"
                  @addToWishList="addToWishList"
                  @showModalForAuth="showModalForAuth"></v-cards-by-category>
                <v-pagination
                  v-if="addPagination"
                  :key="defaultKey"
                  :total="total"
                  :quantity="quantity"
                  @changeCurrentPage="paginationAction"></v-pagination>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
    <v-modal-cart
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
.category__range {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  margin-bottom: 15px;
}
.col-lg-10.col-md-12.products__position {
  position: static;
}
.products__header {
  display: flex;
  // justify-content: space-between;
  justify-content: end;
  align-items: center;
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-bottom: 1px solid #dfdfdf;
}
.title h2 {
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 43px;
}

//modal
::v-deep .v-modal-cart .modal-wrap-bg__content .footer button {
  background: #ff9b30;
  border: 1px solid #ff9b30;
}
::v-deep .v-modal-cart .modal-wrap-bg__content .footer button:first-child {
  background: white;
  color: #ff9b30;
  border: 1px solid #ff9b30;
}

@media screen and (max-width: 990px) {
  ::v-deep .filter__wrap {
    display: none;
  }
  v-filter-mobile {
    display: flex;
  }
}
</style>

<script lang="js">
import axios from "axios";
import { FingerprintService } from "@/FingerprintService";
import vLoader from "@/components/v-loader.vue";
import VHeader from "@/layots/v-header.vue";
import vCatalog from "@/components/filter/v-сatalog.vue";
import VCardsBtn from "@/components/category/v-cards-btn.vue";
import VCardsByCategory from "@/components/product/v-cards-by-category.vue";
import VPagination from "../components/pagination/v-pagination";
import VModalCart from "../components/modal/v-modal-cart";

export default {
  services: ['FingerprintService'],
  props: {
    cart: {
      type: Number,
      default: 0,
    },
    user: {
      type: Object,
    },
    searchValue: {
      type: String,
    }
  },
  components: {
    vLoader,
    VHeader,
    VPagination,
    VCardsByCategory,
    VCardsBtn,
    vCatalog,
    VModalCart,
  },
  data() {
    return {
      loader: false,
      noAuth: false,
      catalogs: [],
      catalog: {},
      comment: {},
      visitorId: "",
      defaultKey: 1,
      page: 1,
      quantity: 5,
      total: 0,
      addPagination: true,
      catalogId: this.$route.params.id,
      deviceId: "",
      parameters: new Map(),
      gridActive: true,
      lineActive: false,
      gridViewMobile: true,
      activeIndex: -1,
      serverNotification: "",
     };
  },
    async created() {
    this.loader = true;
    const newFPS = new FingerprintService();
    this.visitorId = await newFPS.getUserToken();

    this.search();

    //for all category and subcategory
    try {
      let deviceId = this.visitorId;
      const res = await axios.get(
        `${process.env.VUE_APP_HOST}/buyer/store/catalog?deviceId=${deviceId}`
      );
      this.catalogs = res.data.catalogs;
      const data = await res.data.error;
      if (res.status === !200 || res.status === !201) {
        this.serverNotification = data;
      }
    } catch (error) {
      this.serverNotification = error.message;
    };
    this.loader = false;
  },
  methods: {
    gridStyle() {
      this.gridActive = true;
      this.lineActive = false;
    },
    lineStyle() {
      this.lineActive = true;
      this.gridActive = false;
    },
    changedMobileView() {
      this.gridViewMobile = !this.gridViewMobile;
      this.lineActive = !this.lineActive;
      this.gridActive = !this.gridActive;
    },
    async search() {
      this.paginationAction(this.page);
      this.defaultKey++;

      let start = this.page;
      let quantity = this.quantity;
      let search = localStorage.searchValue;
      try {
        let result = await axios(
          process.env.VUE_APP_HOST +
            `/buyer/store/search?start=${start}&quantity=${quantity}&search=${search}&deviceid=${this.visitorId}`,
          {
            method: "GET",
            headers: {
              "AUTH-KEY": localStorage.Token,
            },
          }
        );
        this.catalog = result.data;
      } catch (e) {
        alert(e);
      }
    },
    async goToCatalog() {
      this.loader = true;
       try {
       const param = await axios(process.env.VUE_APP_HOST + "/buyer/store/catalog/products", {
          method: "POST",
          headers: {
            "AUTH-KEY": localStorage.Token
          },
          data: {
            start: this.page,
            quantity: this.quantity,
            minPrice: this.minVal,
            maxPrice: this.maxVal,
            parameters: Array.from(this.parameters.values()),
            catalogId: this.$route.params.id,
            categoryId: this.$route.params.categoryId,
            subсategoryId: this.$route.params.subcategoryId,
            deviceId: this.visitorId
          }
        });
      } catch(e) {
        this.serverNotification = e.message;
      }
      this.loader = false;
    },
    async goToCategory() {
      this.loader = true;
       try {
       const param = await axios(process.env.VUE_APP_HOST + "/buyer/store/catalog/products", {
          method: "POST",
          headers: {
            "AUTH-KEY": localStorage.Token
          },
          data: {
            start: this.page,
            quantity: this.quantity,
            minPrice: this.minVal,
            maxPrice: this.maxVal,
            parameters: Array.from(this.parameters.values()),
            catalogId: this.$route.params.id,
            categoryId: this.$route.params.categoryId,
            subсategoryId: this.$route.params.subcategoryId,
            deviceId: this.visitorId
          }
        });
      } catch(e) {
        this.serverNotification = e.message;
      }
      this.loader = false;
    },
    async goToSubcategory() {
      this.loader = true;
      try {
       const param = await axios(process.env.VUE_APP_HOST + "/buyer/store/catalog/products", {
          method: "POST",
          headers: {
            "AUTH-KEY": localStorage.Token
          },
          data: {
            start: this.page,
            quantity: this.quantity,
            minPrice: this.minVal,
            maxPrice: this.maxVal,
            parameters: Array.from(this.parameters.values()),
            catalogId: this.$route.params.id,
            categoryId: this.$route.params.categoryId,
            subcategoryId: this.$route.params.subcategoryId,
            deviceId: this.visitorId
          }
        });
      } catch(e) {
        this.serverNotification = e.message;
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
    showModalForAuth() {
      this.noAuth = true;
        this.modalTitle = "You must have an account to be able to add a product to your favorites";
        this.modalDescription = "Sing up or Login";
        this.btnModalRight = "Login";
        this.btnModalLeft = "Sing Up";
        document.body.classList.toggle("active");
        document.documentElement.style.overflow = "hidden";
    },
    closeModal() {
      document.body.classList.remove("active");
      document.documentElement.style.overflow = "auto";
      this.noAuth = false;
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
    async paginationAction(pageNumber) {
      this.loader = true;
      let start = pageNumber;
      let quantity = this.quantity;
      let search = localStorage.searchValue;
      try {
        let catalogWithPagination = await axios(
          process.env.VUE_APP_HOST +
            `/buyer/store/search?start=${start}&quantity=${quantity}&search=${search}&deviceid=${this.visitorId}`,
          {
            method: "GET",
          }
        );
        const data = await catalogWithPagination;
        this.total = data.data.total;
        this.catalog = data.data;
      } catch (e) {
        alert(e);
      }
      this.loader = false;
    },
  },
};
</script>
