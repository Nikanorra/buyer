<template>
  <div class="v-modal-cart">
    <transition name="modal">
      <div class="modal-wrap-bg__content">
        <div class="header">
          <span @click="closeWindow">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5475 12.5793L6.5 8.53168L2.45251 12.5793C1.89143 13.1402 0.981819 13.1402 0.420737 12.5793C-0.140246 12.0182 -0.140246 11.1086 0.420737 10.5475L4.46832 6.5L0.420737 2.45251C-0.140246 1.89143 -0.140246 0.981819 0.420737 0.420737C0.981819 -0.140246 1.89143 -0.140246 2.45251 0.420737L6.5 4.46832L10.5475 0.420737C11.1086 -0.140246 12.0182 -0.140246 12.5793 0.420737C13.1402 0.981819 13.1402 1.89143 12.5793 2.45251L8.53168 6.5L12.5793 10.5475C13.1402 11.1086 13.1402 12.0182 12.5793 12.5793C12.0182 13.1402 11.1086 13.1402 10.5475 12.5793Z"
                fill="#2E2E2E" />
            </svg>
          </span>
        </div>
        <div class="body">
          <slot></slot>
        </div>
        <div class="footer">
          <button @click="closeButton" class="close">
            {{ btnModalRight }}
          </button>
          <button @click="deleteButton" class="close">
            {{ btnModalLeft }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.v-modal-cart {
  position: fixed;
  padding: 30px 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  .header {
    float: right;
    span {
      cursor: pointer;
      svg {
        -webkit-animation: spin 4s linear infinite;
        -moz-animation: spin 4s linear infinite;
        animation: spin 4s linear infinite;
      }
    }
  }
}

::v-deep .modal__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 128px;
    height: 92px;
    margin-bottom: 27px;
    display: flex;
    align-self: center;
  }
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    color: #2e2e2e;
    margin-bottom: 13px;
    text-align: center;
  }
  .text {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    text-align: center;
    color: #979797;
    margin-bottom: 26px;
  }
}

.modal-wrap-bg__content {
  background: #fff;
  padding: 30px 40px;
  border-radius: 8px;
  max-width: 434px;
}
@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 166px;
    height: 45px;
    border: 1px solid #f83d3d;
    border-radius: 23px;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:first-child {
      background: #fff;
      color: #f83d3d;
      margin-right: 22px;
    }
    &:last-child {
      background: #f83d3d;
      color: #fff;
    }
  }
}

//animation
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media screen and (max-width: 600px) {
  .v-modal-cart {
    width: 300px;
    padding: 20px 10px;
    .modal__content {
      .title {
        font-size: calc(15px + 5 * (100vw / 1920)) !important;
      }
      .text {
        font-size: calc(10px + 6 * (100vw / 1920)) !important;
      }
    }
    .footer {
      flex-direction: column;
      button {
        margin: 0 auto;
        &:first-child {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>

<script lang="js">
export default {
  name: "v-modal-cart",
  props: {
    btnModalRight: {
      type: String,
      default: "Ok",
    },
    btnModalLeft: {
      type: String,
      default: "Cancel",
    },
  },
  data() {
    return {};
  },
  methods: {
    closeButton() {
      this.$emit("closeModalFromChild");
    },
    deleteButton() {
      this.$emit("deleteItemFromChild");
    },
    closeWindow() {
      this.$emit("closeModal", )
    }
  },
};
</script>
