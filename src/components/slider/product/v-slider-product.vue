<template>
  <div class="v-slider-product">
    <div class="picture">
      <img :src="activePic" />
      <div class="arrow"></div>
    </div>

    <div class="pictures">
      <div v-for="(picture, index) in pictures" :key="index">
        <img :src="picture" @click="changeActivePic(index)" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  max-width: 546px;
}
.picture {
  position: relative;
  display: flex;
  justify-content: center;
  .arrow {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: space-between;
    .left {
      background: #2196f3;
      margin: 20px;
    }
    .right {
      background: #06b68c;
      margin: 20px;
    }
  }
}

.pictures {
  display: flex;
  justify-content: space-between;
  img {
    max-width: 90px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      activePic: "/img/catalog/product-shirt.svg",
      pictures: [
        "/img/catalog/product-blue-trousers.svg",
        "/img/catalog/product-blue-trousers.svg",
        "/img/catalog/product-basic-autumn-sweater.svg",
        "/img/catalog/product-shirt.svg",
        "/img/catalog/product-cap.svg",
      ],
    };
  },
  methods: {
    changeActivePic(index) {
      this.activePic = this.pictures[index];
    },
  },
};
</script>
