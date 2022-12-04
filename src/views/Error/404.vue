<template>
  <div class="noFound">
    <v-header></v-header>
    <section class="wrapper">
      <div class="container">
        <div class="noFound__title">
          <span>4</span>
          <span class="middle">0</span>
          <span>4</span>
        </div>
        <p class="noFound__text">Page not found</p>
        <router-link to="/" tag="p" class="btn-orange">Go to home page</router-link>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.noFound {
  min-height: 80vh;
  .wrapper {
    margin-top: 8%;
  }
}
.noFound__title {
  font-size: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 12px;
  margin-bottom: 20px;
  // animation: type .5s alternate infinite;
  span {
    color: #2e2e2e;
  }
  .middle {
    color: orange;
    display: inline-block;
    animation: twist 0.3s alternate 2s;
  }
}
.noFound__text {
  text-align: center;
  font-size: 45px;
}
//btn
.btn-orange {
  width: 204px;
  height: 45px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
  cursor: pointer;
}
.btn-orange {
  background: #ff9b30;
  color: #fff;
  transition: 0.3s;
  a {
    color: #fff;
  }
  &:hover {
    background: #e97a03;
    color: #fff;
  }
}

@keyframes twist {
  from {
    transform: rotateY(45deg);
  }
  to {
    transform: rotateY(-135deg);
  }
}
</style>

<script>
import VHeader from "@/layots/v-header.vue";
export default {
  components: { VHeader },
};
</script>
