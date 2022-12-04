<template>
  <div @click.stop="show" class="v-dropdown-account">
    <a href="#">{{ title }}</a>
    <transition name="fade" appear>
      <div class="dropdown__item" v-if="isOpen" v-clickOutside="hide">
        <div class="" v-if="localStorage">
          <div class="info">
            <router-link to="/Profile" class="user" @click="hide()">
              <div class="">
                <img :src="user.avatar" />
                <div class="user__wrap">
                  <div class="">
                    <span>{{ user.firstName }} </span>
                    <span>{{ user.lastName }}</span>
                  </div>
                  <div @click.stop="hide">
                    <router-link to="/Profile">View profile</router-link>
                  </div>
                </div>
              </div>
              <div class="">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.22578 10C0.922238 10 0.618477 9.88679 0.381143 9.65906C-0.109432 9.18753 -0.128995 8.40309 0.337288 7.907L3.07995 4.99133L0.340083 2.09586C-0.12792 1.60151 -0.110722 0.817071 0.378564 0.3438C0.868064 -0.129471 1.64391 -0.11187 2.11192 0.382696L5.66009 4.1317C6.1124 4.60976 6.11326 5.36269 5.66289 5.84226L2.11493 9.61473C1.87351 9.87049 1.5504 10 1.22578 10Z"
                    fill="#BFBFBF" />
                </svg>
              </div>
            </router-link>
          </div>
          <div class="dropdown_subtitle">
            <a
              v-for="(item, i) in items"
              :key="i"
              :href="item.link"
              @click.stop="hide"
              >{{ item.title }}</a
            >
          </div>
          <button class="dropdown__out" @click="logOut">Sign out</button>
        </div>
        <div class="" v-else>
          <div class="info">
            <div class="info__block">
              <p>Welcome back!</p>
              <div @click.stop="hide">
                <router-link to="/Login" tag="button" class="btn-light"
                  >Log in</router-link
                >
              </div>
            </div>
            <div class="info__block">
              <p>New to Unhar?</p>
              <div @click.stop="hide">
                <router-link
                  to="/Registration"
                  tag="button"
                  class="btn-orange"
                  @click="hide"
                  >Sign up</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="js">
export default {
  name: "v-dropdown-account",
  props: ["title", "items", "user"],
  data() {
    return {
      openSettings: false,
      isOpen: false,
      localStorage: localStorage.Token,
    };
  },
  methods: {
    show() {
      this.isOpen = true
    },
    hide() {
      this.isOpen = false;
    },
    logOut() {
      localStorage.clear();
      this.$router.push("/")
      location.reload();
    }
  },
  events: {
    closeEvent: function () {
      this.hide()
    }
  }
};
</script>

<style lang="scss" scoped>
.v-dropdown-account {
  position: relative;
}
.dropdown__item {
  position: absolute;
  width: 318px;
  right: 0;
  z-index: 101;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 12px 60px 0px rgba(0, 0, 0, 0.08);
  padding: 30px;
  margin-top: 13px;
  .info {
    .user {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      margin-bottom: 37px;
      color: #2e2e2e;
      > * {
        display: flex;
        align-items: center;
      }
      .user__wrap {
        > * {
          margin-bottom: 6px;
        }
        span {
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: 22px;
          letter-spacing: 0em;
          text-transform: none;
        }
        a {
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 17px;
          color: #979797;
          margin: 0;
          padding: 0;
          text-transform: none;
        }
      }
    }
    .info__block {
      margin-bottom: 30px;
      p {
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
        margin-bottom: 20px;
      }
      button {
        margin: 0 auto;
        width: 100%;
      }
    }
  }
  img {
    width: 59px;
    height: 59px;
    border-radius: 100%;
    margin-right: 16px;
    -o-object-fit: cover;
    object-fit: cover;
  }
  .dropdown_subtitle {
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
    padding: 30px 0;
    a {
      margin: 0;
      margin-bottom: 30px;
      display: block;
      color: #2e2e2e;
      text-transform: none;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .dropdown__out {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    color: #ff9b30;
    padding-top: 30px;
    width: 100%;
    text-align: left;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

//btn
.btn-orange,
.btn-light {
  width: 204px;
  height: 45px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  border-radius: 22px;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  //cursor: pointer;
  margin-top: 45px;
}
.btn-orange {
  background: #ff9b30;
  color: #fff;
  grid-column-start: 2;
  grid-column-end: 3;
  transition: 0.3s;
  a {
    color: #fff;
  }
  &:hover {
    background: #e97a03;
    color: #fff;
  }
}
.btn-light {
  border: 1px solid #ff9b30;
  color: #ff9b30;
  transition: 0.3s;
  a {
    color: #ff9b30;
  }
  &:hover {
    background: #fabf80;
    border: 1px solid #fff;
    color: #fff;
  }
}
</style>
