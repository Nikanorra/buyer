<template>
  <div class="v-cart">
    <div class="v-cart__container">
      <h4>Item</h4>
      <h4>Quantity</h4>
      <h4>Price</h4>
    </div>
    <div
      class="v-cart__container"
      v-for="(product, id) in products"
      :key="id"
      :id="product.product.id">
      <div class="block mobile__left">
        <div class="block__item">
          <img :src="product.product.imageProduct" />
          <div class="text">
            <h5>{{ product.product.name }}</h5>
            <div class="text__option">
              <span>Size: {{ product.product.size }}</span>
              <span> | </span>
              <span>Color: {{ product.product.color }}</span>
              <span class="price">${{ product.product.price }}</span>
            </div>
            <!--            <button>Save for later</button>-->
          </div>
        </div>
      </div>
      <div class="block mobile__left">
        <div class="block__quantity">
          <button
            @click="decreaseQuantity(product.product, $event)"
            :id="product.product.id">
            <svg
              width="10"
              height="4"
              viewBox="0 0 10 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.381 0.947266H6.05279C6.05279 0.947266 4.51973 0.947317 3.94752 0.947317L1.61931 0.947266C1.04731 0.947266 0.579102 1.42769 0.579102 1.9999C0.579102 2.57211 1.04731 3.05253 1.61931 3.05253H3.94752C3.94752 3.05253 5.48058 3.05253 6.05279 3.05253H8.381C8.953 3.05253 9.42121 2.57211 9.42121 1.9999C9.42121 1.42769 8.953 0.947266 8.381 0.947266Z"
                fill="#FDFDFD" />
            </svg>
          </button>
          <span>{{ product.quantity }}</span>
          <button
            @click="addQuantity(product.product, $event)"
            :id="product.product.id">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5085 4.5967H7.4042V1.49242C7.4042 0.72975 6.76364 0.105469 6.00069 0.105469C5.23775 0.105469 4.59719 0.72975 4.59719 1.49242V4.5967H1.4929C0.730238 4.5967 0.105957 5.23726 0.105957 6.00021C0.105957 6.76315 0.730238 7.40372 1.4929 7.40372H4.59719V10.508C4.59719 11.2707 5.23775 11.8949 6.00069 11.8949C6.76364 11.8949 7.4042 11.2707 7.4042 10.508V7.40372H10.5085C11.2712 7.40372 11.8954 6.76315 11.8954 6.00021C11.8954 5.23726 11.2712 4.5967 10.5085 4.5967Z"
                fill="#FDFDFD" />
            </svg>
          </button>
        </div>
      </div>
      <div class="block">
        <div class="block__price">
          <span>${{ product.product.price }}</span>
          <button
            @click="chooseForDelete(product.product, $event)"
            :id="product.product.id">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5475 12.5793L6.5 8.53168L2.45251 12.5793C1.89143 13.1402 0.981819 13.1402 0.420737 12.5793C-0.140246 12.0182 -0.140246 11.1086 0.420737 10.5475L4.46832 6.5L0.420737 2.45251C-0.140246 1.89143 -0.140246 0.981819 0.420737 0.420737C0.981819 -0.140246 1.89143 -0.140246 2.45251 0.420737L6.5 4.46832L10.5475 0.420737C11.1086 -0.140246 12.0182 -0.140246 12.5793 0.420737C13.1402 0.981819 13.1402 1.89143 12.5793 2.45251L8.53168 6.5L12.5793 10.5475C13.1402 11.1086 13.1402 12.0182 12.5793 12.5793C12.0182 13.1402 11.1086 13.1402 10.5475 12.5793Z"
                fill="#2E2E2E" />
            </svg>
          </button>
        </div>
      </div>
      <div class="block_mobile-navigation">
        <button
          @click="chooseForDelete(product.product, $event)"
          :id="product.product.id">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.5475 12.5793L6.5 8.53168L2.45251 12.5793C1.89143 13.1402 0.981819 13.1402 0.420737 12.5793C-0.140246 12.0182 -0.140246 11.1086 0.420737 10.5475L4.46832 6.5L0.420737 2.45251C-0.140246 1.89143 -0.140246 0.981819 0.420737 0.420737C0.981819 -0.140246 1.89143 -0.140246 2.45251 0.420737L6.5 4.46832L10.5475 0.420737C11.1086 -0.140246 12.0182 -0.140246 12.5793 0.420737C13.1402 0.981819 13.1402 1.89143 12.5793 2.45251L8.53168 6.5L12.5793 10.5475C13.1402 11.1086 13.1402 12.0182 12.5793 12.5793C12.0182 13.1402 11.1086 13.1402 10.5475 12.5793Z"
              fill="#2E2E2E" />
          </svg>
        </button>
        <!--        <button>Save for later</button>-->
      </div>

      <v-modal-cart
        :modalVisible="modalVisible"
        v-if="modalVisible"
        @closeModalFromChild="modalHide"
        @closeModal="modalHide"
        :btnModalRight="btnModalRight"
        :btnModalLeft="btnModalLeft"
        :id="currentId"
        :product="product"
        @deleteItemFromChild="removeFromCart(product, $event)">
        <div class="modal__content">
          <img src="~@/assets/img/modals/modal-del.svg" />
          <div class="title">You are about to delete a product</div>
          <div class="text">
            Your item will be delivered from the cart. Are you sure?
          </div>
        </div>
      </v-modal-cart>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-cart__container {
  display: grid;
  grid-template-columns: 4fr 2fr 2fr;
  justify-content: start;
  overflow: hidden;
  h4 {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    color: #979797;
    justify-self: start;
    text-align: left;
    margin-bottom: 60px;
  }
  .block__item {
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin-bottom: 60px;
    justify-self: start;
    img {
      width: 90px;
      height: 90px;
      border-radius: 100%;
      object-fit: cover;
      margin-right: 24px;
      border: 1px solid #f1f1f1;
    }
    .text {
      h5 {
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        color: #2e2e2e;
        margin-bottom: 10px;
        margin-right: 1.5em;
      }
      .text__option {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 17px;
        color: #979797;
        margin-bottom: 25px;
      }
      button {
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 17px;
        color: #ff9b30;
      }
    }
  }
  .block__quantity {
    display: flex;
    align-items: center;
    button {
      width: 24px;
      height: 24px;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      //cursor: pointer;
      &:first-child {
        background: grey;
        margin-right: 15px;
      }
      &:last-child {
        background: orange;
      }
    }
    span {
      margin-right: 15px;
    }
  }
  .block__price {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    span {
      margin-right: 50px;
      width: 70px;
      display: inline-block;
    }
  }
}

//modal
.v-modal-cart {
  .modal__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 128px;
      height: 92px;
      margin-bottom: 27px;
    }
    .title {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      color: #2e2e2e;
      margin-bottom: 13px;
    }
    .text {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      text-align: center;
      color: #979797;
      margin-bottom: 26px;
    }
  }
}

//mob
.block_mobile-navigation {
  display: none;
}
.text__option .price {
  display: none;
}

@media screen and (max-width: 991px) {
  .v-cart__container:first-child {
    display: none;
  }
  .v-cart__container:not(:first-child) {
    background: #ffffff;
    box-shadow: 0px 5px 9px 10px #00000008;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 15px;
  }
  .v-cart__container {
    grid-template-columns: none;
    grid-template-areas: "left right";
    justify-content: space-between;
    .block {
      grid-area: left;
      &.mobile__left {
        display: grid;
        grid-gap: 21px;
        grid-template-areas:
          "left-top right-top"
          "left-down right-down";
        grid-template-rows: 90px;
        .block__quantity {
          grid-area: left-down;
          z-index: 1;
        }
      }
    }
  }

  .block_mobile-navigation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    grid-area: right;
    button:last-child {
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: 12px;
      color: #ff9b30;
      // border-radius: 100px;
      // border: 1px solid #ff9b30;
      padding: 7px 10px;
    }
  }
  .text__option .price {
    display: block;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    color: #2e2e2e;
  }
  .block__price,
  .block__item .text button {
    display: none;
  }
}
</style>

<script lang="js">
import axios from "axios";
import vModalCart from "@/components/modal/v-modal-cart.vue";

export default {
  name: "v-cart",
  props: ["modalVisible", "products", "cart"],
  components: {vModalCart},
  data() {
    return {
      productId: "",
      btnModalRight: "Cancel",
      btnModalLeft: "Delete",
      currentId: "",
      product: {},
    }
  },
  methods: {
    addQuantity(product, $event)  {
      this.$emit("increase", product, $event)
    },
    decreaseQuantity(product, $event)  {
      this.$emit("decrease", product, $event)
    },
    modalHide() {
      this.$emit("modalVisibleFalse");
    },
    chooseForDelete(product, $event) {
      this.product = product.id;
      this.$emit("modalVisibleTrue", product, $event);
    },
    removeFromCart(product) {
      this.$emit("deleteItem", product);
    }


  },
};
</script>
