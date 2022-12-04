<template>
  <div class="shop">
    <v-header :cart="cart.itemQuantity"></v-header>
    <div class="container">
      <div class="shop__info">
        <div class="row">
          <div class="col-lg-6">
            <div class="shop__block">
              <img :src="shop.img" />
              <h2>{{ shop.name }}</h2>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="shop__block left">
              <p>Seller rating</p>
              <p>{{ shop.rate }}</p>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.5 0L9.18385 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                  fill="#FFC400" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <v-slider-sale
        @prevSliderSale="prevSliderSale"
        @nextSliderSale="nextSliderSale">
        <v-slider-sale-items
          v-for="(sliderSaleItem, index) in sliderSaleItems"
          :key="index"
          :index="index"
          :visibleSlideSale="visibleSlideSale"
          :direction="direction"
          :interval="interval">
          <div class="item">
            <img
              :src="require('../assets/img/home/' + sliderSaleItem.img)"
              alt="slider" />
            <div class="slideText">
              <p>{{ sliderSaleItem.textLeftTop }}</p>
              <p class="slideText__upper">
                {{ sliderSaleItem.textLeftBottom }}
              </p>
            </div>

            <div class="slideText">
              <p class="slideText__upper">
                {{ sliderSaleItem.textRightTopMain }}
                <span>{{ sliderSaleItem.textRightTop }}</span>
              </p>
              <p class="slideText__small">
                {{ sliderSaleItem.textRightBottom }}
              </p>
            </div>
          </div>
        </v-slider-sale-items>
      </v-slider-sale>
      <v-cards
        :cataloges="cataloges"
        :section="cataloges.sections"
        :product="cataloges.product"></v-cards>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  max-height: 344px;
  border-radius: 8px;
  margin: 0 auto;
}
.shop__info {
  margin-bottom: 60px;
  .shop__block {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 170px;
    img {
      border-radius: 100%;
      width: 170px;
      height: 170px;
      object-fit: cover;
      margin: 0;
      margin-right: 58px;
    }
    h2 {
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 43px;
    }
  }
}
</style>

<script lang="js">
import VHeader from "@/layots/v-header.vue";
import VSliderSale from "../components/slider/sale/v-slider-sale.vue";
import vSliderSaleItems from "@/components/slider/sale/v-slider-sale-items.vue";
import VCards from "@/components/v-cards.vue";

export default {
  components: {
    VHeader,
    VCards,
    VSliderSale,
    vSliderSaleItems,
  },
  props: {
    cart: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      sliderSaleItems: [
        {
          id: 1,
          title: "img01",
          img: "slide.svg",
          textLeftTop: "Today",
          textLeftBottom: "FLASH SALE",
          textRightTopMain: "60%",
          textRightTop: "off",
          textRightBottom: "Women`s clothes",
        },
        {
          id: 2,
          title: "img02",
          img: "slide-01.svg",
          textLeftTop: "Next day",
          textLeftBottom: "FLASH SALE",
          textRightTopMain: "20%",
          textRightTop: "off",
          textRightBottom: "Women`s clothes",
        },
        {
          id: 3,
          title: "img03",
          img: "slide-02.svg",
          textLeftTop: "Next week",
          textLeftBottom: "FLASH SALE",
          textRightTopMain: "70%",
          textRightTop: "off",
          textRightBottom: "Women`s clothes",
        },
        {
          id: 4,
          title: "img04",
          img: "slide-03.svg",
          textLeftTop: "Next month",
          textLeftBottom: "FLASH SALE",
          textRightTopMain: "65%",
          textRightTop: "off",
          textRightBottom: "Women`s clothes",
        },
      ],
      visibleSlideSale: 0,
      direction: "next",
      interval: 5000,

      cataloges: [
        {
          section: "DRESSES",
          product: [
            {
              title: "Basic autumn sweater",
              type: "Women`s top",
              price: "20.50",
              rate: "",
              img: "/img/catalog/product-basic-autumn-sweater.svg",
              alt: "sweater",
              option: "-20%",
              review: "35",
            },
            {
              title: "Basic winter sweater",
              type: "Women`s top",
              price: "50.50",
              rate: "",
              img: "/img/catalog/product-shirt.svg",
              alt: "sweater",
              option: "30%",
              review: "35",
            },
            {
              title: "Basic autumn dress",
              type: "Man`s top",
              price: "25.50",
              rate: "",
              img: "/img/catalog/product-basic-autumn-sweater.svg",
              alt: "sweater",
              option: "-10%",
              review: "35",
            },
            {
              title: "Basic spring dress",
              type: "Children`s top",
              price: "15.50",
              rate: "",
              img: "/img/catalog/product-basic-autumn-sweater.svg",
              alt: "sweater",
              option: "-50%",
              review: "35",
            },
          ],
        },
        {
          section: "Later",
          product: [
            {
              title: "Basic autumn sweater",
              type: "Women`s top",
              price: "20.50",
              rate: "",
              img: "/img/catalog/product-basic-autumn-sweater.svg",
              alt: "sweater",
              option: "-20%",
              review: "35",
            },
            {
              title: "Basic spring sweater",
              type: "Man`s top",
              price: "10.50",
              rate: "",
              img: "/img/catalog/product-cap.svg",
              alt: "sweater",
              option: "sale",
              review: "35",
            },
            {
              title: "Basic summer sweater",
              type: "Children`s top",
              price: "2.50",
              rate: "",
              img: "/img/catalog/product-blue-trousers.svg",
              alt: "sweater",
              option: "new",
              review: "35",
            },
            {
              title: "Basic summer dress",
              type: "Man`s top",
              price: "50.50",
              rate: "",
              img: "/img/catalog/product-basic-autumn-sweater.svg",
              alt: "sweater",
              option: "new",
              review: "35",
            },
            {
              title: "Basic summer sweater",
              type: "Children`s top",
              price: "2.50",
              rate: "",
              img: "/img/catalog/product-blue-trousers.svg",
              alt: "sweater",
              option: "new",
              review: "35",
            },
          ],
        },
      ],
      shop: {
        img: "/img/catalog/product-basic-autumn-sweater.svg",
        name: "Twirl store",
        rate: 5.2,
        id: "S01",
      },
    };
  },
  mounted() {
    if (this.interval >= 0) {
      setInterval(() => {
        this.nextSliderSale();
      }, this.interval);
    }
  },
  methods: {
    prevSliderSale() {
      if (this.visibleSlideSale >= this.sliderSaleItems.length - 1) {
        this.visibleSlideSale = 0;
      } else {
        this.visibleSlideSale++;
      }
      this.direction = "prev";
    },
    nextSliderSale() {
      if (this.visibleSlideSale <= 0) {
        this.visibleSlideSale = this.sliderSaleItems.length - 1;
      } else {
        this.visibleSlideSale--;
      }
      this.direction = "next";
    },
  },
};
</script>
