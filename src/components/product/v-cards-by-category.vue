<template>
  <div class="v-cards-by-category">
    <div class="cards__wrap">
      <div class="products__nav">
        <div class="col-lg-12">
          <div class="row"></div>
        </div>
      </div>
      <div class="products__cards" :class="{ line: lineActive }">
        <div class="card" v-for="(product, id) in catalog.products" :key="id">
          <h1>{{ catalog.name }}</h1>
          <router-link
            :to="`/Product/${product.sellerInfo.segmentShop}/${product.segmentProduct}`">
            <div class="card__wrap">
              <img :src="product.pictureUrl" :alt="product.name" />
            </div>

            <div class="card__text">
              <h5>{{ product.name }}</h5>
              <p class="card__description">{{ product.description }}</p>
              <p class="card__price">${{ product.price }}</p>

              <router-link to="/Shop" class="card__shop">
                <span>{{ product.shop }}</span>
              </router-link>
            </div>

            <div class="card__delivery">
              <span>Delivery with</span>
              <img src="@/assets/img/header/logo.svg" alt="" />
              <span class="tooltip"
                >The item you can order with our delivery</span
              >
            </div>
          </router-link>

          <div
            class="card__favorite"
            @click="addToWishList(product)"
            :class="{ active: product.favorite }">
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.7988 3.67247C11.6289 1.91306 10.3056 0.636563 8.64959 0.636563C7.54631 0.636563 6.53612 1.1953 5.96769 2.09081C5.40441 1.18372 4.43562 0.636353 3.35001 0.636353C1.69419 0.636353 0.370691 1.91284 0.201057 3.67226C0.18763 3.74997 0.132578 4.15897 0.299973 4.82597C0.541219 5.78802 1.09846 6.6631 1.91104 7.35599L5.965 10.8182L10.0886 7.35621C10.9011 6.6631 11.4584 5.78823 11.6996 4.82597C11.867 4.15918 11.812 3.75018 11.7988 3.67247Z"
                fill="#BFBFBF" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}
p {
  margin: 0 auto;
}
.products__nav {
  margin-bottom: 40px;
}
.products__nav .col-lg-12 .row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.products__title {
  font-size: 22px;
  line-height: 26px;
  text-transform: uppercase;
  font-weight: 500;
}

.products__view {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}
.products__view a {
  color: #979797;
}

.products__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

// card
.card {
  position: relative;
  height: 345px;
  // min-width: 204px;
  margin-bottom: 80px;
  a {
    // position: absolute;
    display: block;
    width: 100%;
    height: 100%;
  }
}
.card__favorite {
  position: absolute;
  top: 50%;
  right: 5%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  background: #fff;
  border-radius: 100%;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  z-index: 3;
  svg path {
    transition: 0.5s;
  }
  &.active svg path {
    fill: #f83d3d;
  }
  &:hover {
    svg path {
      fill: #f83d3d;
    }
  }
}
.products__cards {
  display: grid;
  // grid-template-columns: repeat(6, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(204px, 1fr));
  grid-gap: 0.5rem;
  justify-items: stretch;
  margin-bottom: 80px;
  .card__text span,
  .card__delivery {
    display: none;
  }
}

.products__cards.line {
  display: grid;
  grid-template-columns: 1fr;
  .card {
    height: 220px;
    a {
      display: grid;
      grid-template-columns: 250px 30% 50%;
      align-items: center;
      border: 1px solid transparent;
      .card__text span,
      .card__delivery {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        display: inline-block;
        height: 25px;
        .tooltip {
          visibility: hidden;
          width: 200px;
          padding: 10px;
          background-color: #fff;
          box-shadow: 0px 0px 7px 0px #00000026;
          color: #979797;
          font-weight: normal;
          text-align: center;
          padding: 5px 0;
          border-radius: 6px;
          /* tooltip position */
          position: absolute;
          z-index: 1;
          bottom: 35px;
          left: 42%;
          margin-left: -60px;
          /* tooltip hidden */
          opacity: 0;
          transition: opacity 0.3s;
        }
        /* tooltip arrow */
        .tooltip::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: #fff transparent transparent transparent;
        }
        /* tooltip visible */
        &:hover .tooltip {
          visibility: visible;
          opacity: 1;
        }
      }
      .card__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        h5 {
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          margin-bottom: 10px;
        }
        p {
          margin: 0;
        }
        .card__description {
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 17px;
          margin-bottom: 30px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          height: 55px;
        }
        .card__price {
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 24px;
          margin-bottom: 10px;
        }
        .card__rate {
          display: flex;
          align-items: center;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 17px;
          color: #979797;
          margin-bottom: 29px;
        }
        .card__shop {
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 17px;
          text-decoration: underline;
        }
      }
      .card__delivery {
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 17px;
        display: flex;
        align-items: center;
        span {
          margin-right: 10px;
        }
        img {
          width: 54px;
          height: 17px;
        }
      }
    }
  }
  .card__wrap {
    margin-right: 24px;
    display: flex;
  }
  .card__favorite {
    position: absolute;
    top: 175px;
    left: 180px;
    width: 32px;
    height: 32px;
    background: #fff;
    border-radius: 100%;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    transition: 0.3s;
    z-index: 3;
  }
}
.card__wrap {
  position: relative;
  height: 220px;
  min-height: 220px;
  img {
    height: 220px;
    min-height: 220px;
    border-radius: 8px;
    background: #c4c4c4;
    object-fit: cover;
    border: 1px solid #eeeeee;
  }
  .card__label {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #ff9b30;
    border-radius: 100px;
    color: #fff;
    padding: 3px 9px 4px 10px;
    font-size: 10px;
    line-height: 12px;
  }
}

.card__text {
  margin-top: 16px;
  color: #2e2e2e;
  h5 {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    text-align: left;
    margin-bottom: 10px;
  }
}
.card__description {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  color: #979797;
  margin-bottom: 9px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 28px;
}
.card__price {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  text-align: left;
  margin-bottom: 9px;
}

@media screen and (max-width: 750px) {
  .products__cards.line {
    .card {
      .card__text {
        justify-content: start;
        h5 {
          font-size: 12px;
          line-height: 14px;
          margin-bottom: 0px;
        }
        .card__description {
          font-size: 10px;
          line-height: 12px;
          margin-bottom: 0px;
        }
        .card__price {
          font-size: 12px;
          line-height: 14px;
          margin-bottom: 0;
        }
        .card__rate {
          span {
            display: none;
          }
        }
        .card__shop {
          display: none;
        }
      }
      .card__delivery {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 775px) {
  .products__cards .card .card__favorite {
    top: 140px;
    left: 165px;
  }
  .products__cards.line .card a {
    display: grid;
    grid-template-columns: 200px 35% 25%;
  }
  .products__cards.line .card a .card__delivery {
    justify-content: end;
  }
  .card__wrap {
    height: 180px;
    min-height: 180px;
    img {
      height: 180px;
      min-height: 180px;
    }
  }
  .products__cards.line .card .card__favorite {
    top: 158px;
    left: 135px;
  }
}
@media screen and (max-width: 688px) {
  .products__cards .card .card__favorite {
    top: 140px;
    left: auto;
  }
}
@media screen and (max-width: 670px) {
  .products__cards.line .card a .card__delivery {
    display: none;
  }
  .products__cards.line .card {
    margin-bottom: 0;
  }
}
@media screen and (max-width: 476px) {
  .products__cards {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  .products__cards .card .card__favorite {
    top: 125px;
    left: auto;
  }
  .card {
    position: relative;
    height: 250px;
    min-width: auto;
    margin-bottom: 70px;
  }
  .card__wrap {
    height: 180px;
    min-height: 130px;
    img {
      height: 164px;
      min-height: 164px;
    }
  }
  .card__text {
    margin-top: 0;
  }
  .products__cards.line {
    gap: 3rem;
    .card__wrap {
      height: 126px;
      min-height: 126px;
      img {
        height: 116px;
        min-height: 116px;
        width: 116px;
      }
    }
    .card {
      height: 118px;
      max-width: 400px;
      min-width: 250px;
      a {
        grid-template-columns: 150px 35%;
        overflow: hidden;
        .card__text {
          h5 {
            font-size: 12px;
            line-height: 15px;
            height: 30px;
            overflow: hidden;
          }
          .card__description {
            font-size: 9px;
            margin-bottom: 6px;
            height: 30px;
          }
          .card__price {
            font-size: 13px;
            line-height: 15px;
          }
        }
      }
    }
  }
  .products__cards.line .card .card__favorite {
    top: 87px;
    left: 86px;
    width: 22px;
    height: 22px;
    padding: 5px 6px;
  }
}
@media screen and (max-width: 450px) {
  .products__cards {
    display: grid;
    grid-gap: 0.5rem;
    justify-items: stretch;
  }
}
</style>

<script lang="js">
export default {
  name: "VCardsByCategory",
  props: ["catalog", "gridActive", "lineActive", ],
  methods: {
    addToWishList(product) {
      if (localStorage.Token) {
        this.$emit("addToWishList", product);
      } else {
        this.$emit("showModalForAuth")
      }
    }
  },
};
</script>
