<template>
  <div class="v-cards-similar">
    <div class="similar__items">
      <div
        v-for="(catalog, index) in cataloges"
        :key="index"
        class="cards__wrap">
        <div class="products__nav">
          <div class="col-lg-12">
            <div class="row">
              <div class="products__title">{{ catalog.section }}</div>
            </div>
          </div>
        </div>

        <div class="products__cards">
          <router-link
            :to="`/Product/${product.id}`"
            v-for="product in catalog.product"
            :key="product.id">
            <!--          <router-link-->
            <!--            :to="`/Product/${product.id}`"-->
            <!--            v-for="product in catalog.product.slice(0, 3)"-->
            <!--            :key="product.id"-->
            <!--          >-->
            <div class="card">
              <div class="">
                <img :src="product.img" :alt="product.alt" />
                <div class="card__label">
                  <p>{{ product.option }}</p>
                </div>
                <div class="card__favorite">
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.7988 3.67247C11.6289 1.91306 10.3056 0.636563 8.64959 0.636563C7.54631 0.636563 6.53612 1.1953 5.96769 2.09081C5.40441 1.18372 4.43562 0.636353 3.35001 0.636353C1.69419 0.636353 0.370691 1.91284 0.201057 3.67226C0.18763 3.74997 0.132578 4.15897 0.299973 4.82597C0.541219 5.78802 1.09846 6.6631 1.91104 7.35599L5.965 10.8182L10.0886 7.35621C10.9011 6.6631 11.4584 5.78823 11.6996 4.82597C11.867 4.15918 11.812 3.75018 11.7988 3.67247Z"
                      fill="#F83D3D" />
                  </svg>
                </div>
              </div>

              <div class="card__text">
                <h5>{{ product.title }}</h5>
                <p class="card__description">{{ product.type }}</p>
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
                </p>
                <span>35 Reviews</span>
              </div>
            </div>
          </router-link>
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

// category page
//.products__btn {
//  display: flex;
//  justify-content: flex-end;
//}
//.products__line {
//  svg {
//    fill: #000;
//    transition: .3s;
//    &:hover {
//      fill: #FF9B30;
//    }
//  }
//}
//.products__grid {
//  margin-right: 33px;
//  svg {
//    fill: #2E2E2E;
//    transition: .3s;
//    &:hover {
//      fill: #FF9B30;
//    }
//  }
//}
//.products__line.view svg,
//.products__grid.view svg {
//  fill: #FF9B30;
//}

.products__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

// card
.card {
  position: relative;
  min-height: 323px;
  margin-bottom: 80px;
  border: 1px solid transparent;
  img {
    max-width: 318px;
  }
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
.card__favorite {
  position: absolute;
  top: 176px;
  left: 160px;
  width: 32px;
  height: 32px;
  background: #fff;
  border-radius: 100%;
  padding: 8px 10px;
  display: flex;
  align-items: center;
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
}
.card__price {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  text-align: left;
  margin-bottom: 9px;
}
</style>

<script lang="js">
export default {
  name: "v-cards-similar",
  props: ["cataloges", "product"],
};
</script>
