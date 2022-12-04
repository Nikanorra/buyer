<template>
  <div class="slider__wrap">
    <div class="v-slider-sale">
      <slot></slot>
      <button @click="prevSliderSale" class="btn-slider-sale__prev">
        <svg
          width="7"
          height="10"
          viewBox="0 0 7 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.34814 10C5.66434 10 5.98075 9.88679 6.22798 9.65906C6.73899 9.18753 6.75937 8.40309 6.27366 7.907L3.41672 4.99133L6.27075 2.09586C6.75825 1.60151 6.74034 0.817071 6.23066 0.3438C5.72077 -0.129471 4.91259 -0.11187 4.42509 0.382696L0.729068 4.1317C0.257912 4.60976 0.257016 5.36269 0.726157 5.84226L4.42195 9.61473C4.67343 9.87049 5.01 10 5.34814 10Z"
            fill="#2E2E2E" />
        </svg>
      </button>
      <button @click="nextSliderSale" class="btn-slider-sale__next">
        <svg
          width="7"
          height="10"
          viewBox="0 0 7 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.65186 10C1.33566 10 1.01925 9.88679 0.772024 9.65906C0.261008 9.18753 0.24063 8.40309 0.726342 7.907L3.58328 4.99133L0.729253 2.09586C0.24175 1.60151 0.259665 0.817071 0.769337 0.3438C1.27923 -0.129471 2.08741 -0.11187 2.57491 0.382696L6.27093 4.1317C6.74209 4.60976 6.74298 5.36269 6.27384 5.84226L2.57805 9.61473C2.32657 9.87049 1.99 10 1.65186 10Z"
            fill="#2E2E2E" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider__wrap {
  margin-bottom: 60px;
}
.v-slider-sale {
  position: relative;
  height: 344px;
  button {
    position: absolute;
    width: 36px;
    height: 36px;
    top: calc(50% - 18px);
    background: rgba(255, 255, 255, 0.4);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:active,
    &:hover,
    &:focus {
      outline: none;
    }
    &.btn-slider-sale__next {
      right: 20px;
    }
    &.btn-slider-sale__prev {
      left: 20px;
    }
  }
}
</style>

<script lang="js">
export default {
  name: "v-slider-sale",
  props: ["interval"],
  methods: {
    prevSliderSale() {
      this.$emit("prevSliderSale");
    },
    nextSliderSale() {
      this.$emit("nextSliderSale");
    },
  },
};
</script>
