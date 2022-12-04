<template>
  <div class="dropdown">
    <div class="dropdown__block" @click="openAbout = !openAbout">
      <p>About the item</p>
      <transition name="fade" appear>
        <div class="dropdown__text" v-if="openAbout">
          {{ product.description }}
        </div>
      </transition>
    </div>

    <div
      class="dropdown__block"
      @click="openCharacteristics = !openCharacteristics">
      <p>Characteristics</p>
      <transition name="fade" appear>
        <div class="dropdown__text" v-if="openCharacteristics">
          <p v-for="(parameter, index) in product.parameters" :key="index">
            {{ parameter.parameterName }}: {{ parameter.value }}
          </p>
        </div>
      </transition>
    </div>

    <div class="dropdown__block" @click="openShipping = !openShipping">
      <p>SHIPPING INFORMATION</p>
      <transition name="fade" appear>
        <div class="dropdown__text" v-if="openShipping">
          <a href="https://delivery.unhar.com/" target="_blank"
            >Shipping with Unhar</a
          >
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown__block {
  margin-bottom: 20px;
  border-bottom: 1px solid #dfdfdf;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  text-transform: uppercase;
  * {
    margin-bottom: 20px;
  }
  a {
    color: #ff9b30;
    font-weight: 700;
  }
  p {
    cursor: pointer;
  }
}
.dropdown__text {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  text-transform: none;
  color: #7a7a7a;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

<script lang="js">
export default {
  name: "v-dropdown-product",
  props: ["descriptions", "product"],
  data() {
    return {
      selected: "",
      openAbout: false,
      openCharacteristics: false,
      openShipping: false,
    };
  },
};
</script>
