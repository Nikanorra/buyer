<template>
  <div class="v-filter">
    <ul class="list__category" v-for="(filter, index) in filters" :key="index">
      <p class="category__name">{{ filter }}</p>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.list__category {
  margin-bottom: 40px;
  li {
    cursor: pointer;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    margin-bottom: 20px;
    color: #979797;
    &:first-child {
      margin-top: 10px;
    }
    ul {
      cursor: default;
      .list__subcategory p {
        cursor: pointer;
        display: none;
      }
    }
  }
}
.list__category li.active ul .list__subcategory p {
  display: flex;
  justify-content: left;
  align-items: center;
  &:hover,
  &.checked {
    ::v-deep .v-checkbox .square {
      background: #ff9b30;
      border: 1px solid #ff9b30;
    }
    ::v-deep .v-checkbox .square {
      background: #ff9b30;
      border: #ff9b30;
      .line__short,
      .line__long {
        opacity: 1;
      }
    }

    ::v-deep .v-checkbox .square.checked {
      background: #ff9b30;
      border: #ff9b30;
      .line__short,
      .line__long {
        opacity: 1;
      }
    }
  }
  span {
    margin-left: 5px;
  }
}
.category__name {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  margin-bottom: 30px;
}

//animation
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>

<script lang="js">
export default {
  name: "v-filter",
  props: ["filters", "fields", "parameters", "subcategory", ],
  data() {
    return {
      index: null,
      open: null,
      checkedItems: null,
    };
  },
  computed: {},
  methods: {
    // open(currentId) {
    //   if (this.activeIndex === currentId) {
    //     this.activeIndex = -1
    //   } else {
    //     this.activeIndex = currentId
    //   }
    // },
    // checkedParametr() {
    //   this.checkedItems = !this.checkedItems;
    //   },
    },
};
</script>
