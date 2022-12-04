<template>
  <div class="v-sections">
    <div class="products__nav">
      <div class="col-lg-12">
        <div class="row">
          <div class="products__title">DRESSES</div>
          <div class="products__view">
            <router-link to="/Category">
              <span>View more</span>
              <span></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
</style>

<script lang="js">
export default {
  name: "VSections",
};
</script>
