<template>
  <div class="v-slider-product">
    <div class="picture">
      <img :src="picture.img" />
      <div class="btn">
        <button class="btn__prev" @click="prevSlide">prev</button>
        <button class="btn__next" @click="nextSlide">next</button>
      </div>
    </div>

    <div class="pictures">
      <div v-for="(picture, index) in pictures" :key="index">
        <img :src="picture.img" @click="changeActivePic(index)" />
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
  .btn {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: space-between;
    width: 60%;
    .btn__prev {
      background: #2196f3;
      margin: 20px;
    }
    .btn__prev {
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
  props: ["visibleSlideSale", "index"],
  data() {
    return {
      activePic: { img: "/img/catalog/product-blue-trousers.svg" },
      pictures: [
        {
          img: "/img/catalog/product-blue-trousers.svg",
          title: "product",
          id: "product002",
        },
        {
          img: "/img/catalog/product-basic-autumn-sweater.svg",
          title: "product",
          id: "product003",
        },
        {
          img: "/img/catalog/product-shirt.svg",
          title: "product",
          id: "product004",
        },
        {
          img: "/img/catalog/product-cap.svg",
          title: "product",
          id: "product005",
        },
      ],
    };
  },
  methods: {
    changeActivePic(index) {
      this.activePic = this.pictures[index];
    },
    prevSlide() {
      alert("prev");
      // this.activePic = this.pictures[]
    },
    nextSlide() {
      alert("next");
    },
  },
};
</script>
