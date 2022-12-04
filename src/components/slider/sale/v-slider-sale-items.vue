<template>
  <transition :name="direction" mode="in-out">
    <div v-show="visibleSlideSale == index" class="v-slider-sale-items">
      <slot></slot>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.v-slider-sale-items {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.next-enter-active {
  animation: nextSaleInAnimation 0.4s ease-in-out;
}
.next-leave-active {
  animation: nextSaleOutAnimation 0.4s ease-in-out;
}
@keyframes nextSaleInAnimation {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes nextSaleOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.prev-enter-active {
  animation: prevSaleInAnimation 0.4s ease-in-out;
}
.prev-leave-active {
  animation: prevSaleOutAnimation 0.4s ease-in-out;
}
@keyframes prevSaleInAnimation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes prevSaleOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>

<script lang="js">
export default {
  name: "v-slider-sale-items",
  props: ["visibleSlideSale", "index", "direction"],
};
</script>
