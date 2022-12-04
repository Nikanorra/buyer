<template>
  <div class="">
    <div class="v-cards-btn">
      <div class="products__btn">
        <div
          class="products__grid"
          @click="gridView"
          :class="{ grid: gridActive }">
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0.731707C0 0.327597 0.311217 0 0.695122 0H7.98954C8.37344 0 8.68466 0.327597 8.68466 0.731707V8.41004C8.68466 8.81415 8.37344 9.14175 7.98954 9.14175H0.695122C0.311217 9.14175 0 8.81415 0 8.41004V0.731707ZM1.39024 1.46341V7.67833H7.29442V1.46341H1.39024ZM10.3153 0.731707C10.3153 0.327597 10.6266 0 11.0105 0H18.3049C18.6888 0 19 0.327597 19 0.731707V8.41004C19 8.81415 18.6888 9.14175 18.3049 9.14175H11.0105C10.6266 9.14175 10.3153 8.81415 10.3153 8.41004V0.731707ZM11.7056 1.46341V7.67833H17.6098V1.46341H11.7056ZM0 11.59C0 11.1858 0.311217 10.8583 0.695122 10.8583H7.98954C8.37344 10.8583 8.68466 11.1858 8.68466 11.59V19.2683C8.68466 19.6724 8.37344 20 7.98954 20H0.695122C0.311217 20 0 19.6724 0 19.2683V11.59ZM1.39024 12.3217V18.5366H7.29442V12.3217H1.39024ZM10.3153 11.59C10.3153 11.1858 10.6266 10.8583 11.0105 10.8583H18.3049C18.6888 10.8583 19 11.1858 19 11.59V19.2683C19 19.6724 18.6888 20 18.3049 20H11.0105C10.6266 20 10.3153 19.6724 10.3153 19.2683V11.59ZM11.7056 12.3217V18.5366H17.6098V12.3217H11.7056Z"
              fill="" />
          </svg>
        </div>
        <div
          class="products__line"
          @click="linedView"
          :class="{ line: lineActive }">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.00073023 0.731707C0.00073023 0.327597 0.327428 0 0.73043 0H17.2703C17.6733 0 18 0.327597 18 0.731707V8.53659C18 8.9407 17.6733 9.26829 17.2703 9.26829H0.73043C0.327428 9.26829 0.00073023 8.9407 0.00073023 8.53659V0.731707ZM1.46013 1.46341V7.80488H16.5406V1.46341H1.46013ZM0.2137 10.946C0.350547 10.8088 0.53616 10.7317 0.7297 10.7317H17.2696C17.6725 10.7317 17.9992 11.0593 17.9993 11.4633L18 19.2682C18 19.4623 17.9231 19.6484 17.7863 19.7857C17.6495 19.9229 17.4638 20 17.2703 20H0.73043C0.327455 20 0.000768041 19.6724 0.00073023 19.2684L3.21378e-09 11.4635C-1.81481e-05 11.2694 0.0768528 11.0833 0.2137 10.946ZM1.45947 12.1951L1.46006 18.5366H16.5405L16.5399 12.1951H1.45947Z"
              fill="" />
          </svg>
        </div>
        <div class="products__mobile">
          <div class="products__btn-mobile" @click="cardsViewMobile">
            <div v-if="gridViewMobile">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1H6.38494V6.38494H1V1Z"
                  stroke="#2E2E2E"
                  stroke-linejoin="round" />
                <path
                  d="M1 8.61506H6.38494V14H1V8.61506Z"
                  stroke="#2E2E2E"
                  stroke-linejoin="round" />
                <path
                  d="M8.61506 1H14V6.38494H8.61506V1Z"
                  stroke="#2E2E2E"
                  stroke-linejoin="round" />
                <path
                  d="M8.61506 8.61506H14V14H8.61506V8.61506Z"
                  stroke="#2E2E2E"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <div v-else @click="!cardsViewMobile">
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1H16V6H1V1Z"
                  stroke="#2E2E2E"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M1 9H16V14H1V9Z"
                  stroke="#2E2E2E"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// category page
.products__btn {
  display: flex;
  justify-content: flex-end;
}
.products__line {
  cursor: pointer;
  svg {
    fill: #000;
    transition: 0.3s;
    &:hover {
      fill: #ff9b30;
    }
  }
}
.products__grid {
  cursor: pointer;
  margin-right: 33px;
  svg {
    fill: #2e2e2e;
    transition: 0.3s;
    &:hover {
      fill: #ff9b30;
    }
  }
}
.products__line.line svg,
.products__grid.grid svg {
  fill: #ff9b30;
}

.products__mobile {
  display: none;
}

.filter h1 {
  font-size: 25px;
  background: red;
}
//amination
.fadeX-enter-active,
.fadeX-leave-active {
  transition: all 0.5s ease-out;
}
.fadeX-enter,
.fadeX-leave-to {
  opacity: 0;
  transform: translateX(100vh);
}

@media screen and (max-width: 990px) {
  .products__line,
  .products__grid {
    display: none;
  }
  .products__mobile {
    display: flex;
  }
  .products__btn-mobile {
    cursor: pointer;
    margin-right: 17px;
    //.products__line,
    //.products__grid {
    //  display: flex;
    //}
  }

  //filter
  .products__filter {
    cursor: pointer;
  }
  .filter-mobile {
    position: absolute;
    right: 0;
  }
}
</style>

<script lang="js">
export default {
  props: ["gridActive", "lineActive", "gridViewMobile", ],
  name: "v-cards-btn",
  data() {
    return {
      activeFilter: false,
    };
  },
  methods: {
    gridView() {
      this.$emit("changeForGridView", )
    },
    linedView() {
      this.$emit("changeForLineView", )
    },
    cardsViewMobile() {
      this.$emit("changedMobileView", )
    },
    showFilter() {
      this.activeFilter = !this.activeFilter;
    }
  }
};
</script>
