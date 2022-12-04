<template>
  <div class="sale">
    <v-header :cart="cart"></v-header>
    <div class="container">
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
    </div>

    <section class="products">
      <div class="container">
        <v-cards :previews="previews"></v-cards>
      </div>
    </section>

    <section class="products">
      <div class="container">
        <v-cards-types></v-cards-types>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
v-slider-sale-items .item {
  height: 200px;
}
img {
  width: 100%;
  height: 344px;
  border-radius: 8px;
  margin: 0 auto;
  object-fit: cover;
}

/* Анимация слайдов */
//.slider .item {
//  -webkit-animation-name: fade;
//  -webkit-animation-duration: 1.5s;
//  animation-name: fade;
//  animation-duration: 1.5s;
//}
//
//@-webkit-keyframes fade {
//  from {
//    opacity: 0.4;
//  }
//  to {
//    opacity: 1;
//  }
//}
//@keyframes fade {
//  from {
//    opacity: 0.4;
//  }
//  to {
//    opacity: 1;
//  }
//}
</style>

<script lang="js">
import VHeader from "@/layots/v-header.vue";
import VCards from "@/components/v-cards.vue";
import vCardsTypes from "@/components/v-cards-types.vue";
import vSliderSale from "@/components/slider/sale/v-slider-sale.vue";
import vSliderSaleItems from "@/components/slider/sale/v-slider-sale-items.vue";
import axios from "axios";

export default {
  components: {
    VHeader,
    VCards,
    vCardsTypes,
    vSliderSale,
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
      // interval: 5000,
      interval: 99999999,
      previews: [
        {
          id: "",
          catalogName: "",
          products: [
            {
              id: "",
              name: "",
              shop: null,
              description: "",
              price: null,
              parameters: [
                {
                  parameterName: "",
                  value: ""
                }
              ],
              catalogIds: [
                ""
              ],
              categoryIds: [],
              subCategoryIds: [],
              freeQuantity: 0,
              pictureUrl: null,
              createOn: "",
              isSucceeded: false,
              status: "",
              error: null
            },
          ],
          "isSucceeded": true,
          "status": "Unknown",
          "error": null
        },
      ],
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
  async created() {
    try {
      let quantityshow = 5;
      let deviceid = 1111111;
      const res = await axios.get(`${process.env.VUE_APP_HOST}/buyer/store/catalog/latest-products?quantityshow=${quantityshow}&deviceid=${deviceid}`,
      );
      this.previews = res.data.previews;
    } catch (e) {
      alert("error.e")
    }
  }
};
</script>
