<template>
  <div class="v-checkbox">
    <div class="square" :class="{ checked: checkItem }">
      <div class="line__short"></div>
      <div class="line__long"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.square {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 2px;
  border: 1px solid #bfbfbf;
  transition: 0.9s;
  &:hover {
    background: #ff9b30;
    border: 1px solid #ff9b30;
  }
}
.line__short {
  opacity: 0;
  position: absolute;
  top: 7px;
  left: 3px;
  height: 2px;
  width: 5px;
  transform: rotate(45deg);
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  background: #fff;
}
.line__long {
  opacity: 0;
  height: 2px;
  width: 7px;
  transform: rotate(-45deg);
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background: #fff;
  position: absolute;
  top: 6px;
  right: 2px;
}

.square:hover {
  background: #ff9b30;
  border: #ff9b30;
  .line__short,
  .line__long {
    opacity: 1;
  }
}
.category__options.red {
  .v-checkbox {
    .square {
      background: #ff9b30;
      border: 1px solid #ff9b30;
    }
    .square {
      background: #ff9b30;
      border: #ff9b30;
      .line__short,
      .line__long {
        opacity: 1;
      }
    }
  }
}
</style>

<script>
export default {
  props: ["checkItem"],
};
</script>
