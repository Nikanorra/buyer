<template>
  <div class="v-cards">
    <div v-for="(preview, id) in previews" :key="id" class="cards__wrap">
      <div class="products__nav">
        <div class="col-lg-12">
          <div class="row">
            <div class="products__title">{{ preview.catalogName }}</div>
            <div class="products__view">
              <router-link :to="{ path: `/Category/${preview.id}` }">
                <span>View more</span>
                <span></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="products__cards" :class="{ line: lineActive }">
        <div
          class="card"
          v-for="(product, index) in preview.products"
          :key="index">
          <router-link :to="`/Product/${product.sellerInfo.segmentShop}/${product.segmentProduct}`">
            <div class="card__wrap">
              <img :src="product.pictureUrl" :alt="product.name" />
            </div>

            <div class="card__text">
              <h5>{{ product.name }}</h5>
              <p class="card__description">{{ product.description }}</p>
              <p class="card__price">${{ product.price }}</p>
              <p class="card__rate">
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
                <span>35 Reviews</span>
              </p>
            </div>

            <div class="card__delivery">
              <span>Real-time: 2 hours</span>
              <img src="../assets/img/header/logo.svg" alt="" />
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

.card {
  position: relative;
  height: 345px;
  min-width: 204px;
  margin-bottom: 80px;
  a {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
  }
  .card__favorite {
    position: absolute;
    z-index: 3;
    top: 50%;
    right: 5%;
    width: 32px;
    height: 32px;
    background: #fff;
    border-radius: 100%;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
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
}
.products__cards {
  display: grid;
  // grid-template-columns: repeat(6, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(204px, 1fr));
  grid-gap: 0.5rem;
  justify-items: stretch;
  .card__text span,
  .card__delivery {
    display: none;
  }
}

.card__wrap {
  position: relative;
  height: 220px;
  min-height: 220px;
  min-width: 204px;
  img {
    height: 220px;
    min-height: 220px;
    min-width: 204px;
    border-radius: 8px;
    background: #c4c4c4;
    object-fit: cover;
    border: 1px solid #f3f3f3;
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

//modal
v-modal-cart {
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

@media screen and (max-width: 450px) {
  .products__cards {
    display: grid;
    grid-gap: 0.5rem;
    justify-items: stretch;
  }
}
@media screen and (max-width: 446px) {
  .products__cards {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
  .card__wrap {
    position: relative;
    height: 164px;
    min-height: 164px;
    min-width: auto;
    img {
      height: 164px;
      min-height: 164px;
      min-width: auto;
      border-radius: 8px;
      background: #c4c4c4;
      object-fit: cover;
      border: 1px solid #f3f3f3;
    }
  }
  .card {
    position: relative;
    height: 300px;
    min-width: auto;
    margin-bottom: 0;
    .card__favorite {
      top: 40%;
      right: 5%;
    }
  }
}
</style>

<script lang="js">
export default {
  name: "VCards",
  props: ["cataloges", "gridActive", "lineActive", "previews"],
  methods: {
    addToWishList(product) {
      if (localStorage.Token) {
        this.$emit("addToWishList", product);
      } else {
        this.$emit("showModalForAuth")
      }
    },
  },
};
</script>
