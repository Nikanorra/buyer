<template>
  <div class="v-modal">
    <div class="body">
      <slot></slot>
    </div>
    <div class="footer">
      <button @click="closeModal" class="close">
        {{ btnModal }}
      </button>
    </div>
  </div>
</template>

<script lang="js">

export default {
  name: "v-modal",
  props: {
    btnModal: {
      type: String,
      default: "Ok",
    },
  },
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("closeModalFromChild");
    },
  },
};
</script>

<style lang="scss" scoped>
.v-modal {
  position: absolute;
  width: 318px;
  height: 330px;
  padding: 30px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 9px 30px 0px rgba(0, 0, 0, 0.2);
  top: 50px;
  right: 0;
  //left: 63%;
  z-index: 100;
}
.footer {
  position: absolute;
  bottom: 10px;
  display: flex;
  margin: 20px 0;
}
</style>
