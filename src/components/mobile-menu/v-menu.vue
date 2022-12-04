<template>
  <div class="v-menu">
    <nav class="">
      <transition name="fade" mode="out-in">
        <span @click.stop="showMobileMenu" key="menu">
          <img src="../../assets/img/icon-burger.svg" alt="" />
        </span>
      </transition>
      <transition name="fadeX">
        <div class="menu" v-if="isActive" v-clickOutside="hideMobileMenu">
          <div class="title">
            <span @click.stop="hideMobileMenu" key="clear">&times;</span>
            <div v-if="localStorage">
              <router-link to="/Profile" class="profile-link">
              <img :src="user.avatar" />
              <div class="title__info">
                <div class="">
                  <p>{{ user.firstName }} {{ user.lastName }}</p>
                  <router-link to="/Profile">View profile</router-link>
                </div>

                <svg
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.22578 10.25C0.922238 10.25 0.618477 10.1368 0.381143 9.90906C-0.109432 9.43753 -0.128995 8.65309 0.337288 8.157L3.07995 5.24133L0.340083 2.34586C-0.12792 1.85151 -0.110722 1.06707 0.378564 0.5938C0.868064 0.120529 1.64391 0.13813 2.11192 0.632696L5.66009 4.3817C6.1124 4.85976 6.11326 5.61269 5.66289 6.09226L2.11493 9.86473C1.87351 10.1205 1.5504 10.25 1.22578 10.25Z"
                    fill="#FDFDFD" />
                </svg>
              </div>
              </router-link>
            </div>
            <div class="title__guest" v-else>
              <router-link to="/Login" class="profile-link"
                >Welcome! Sign in</router-link
              >
            </div>
          </div>
          <ul v-if="localStorage">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/Orders">My orders</router-link>
            </li>
            <li>
              <router-link to="/Wishlist">Wishlist</router-link>
            </li>
            <li
              class="v-menu_submenu"
              @click.stop="openSettings = !openSettings">
              Settings
              <transition name="fadeX">
                <ul v-if="openSettings">
                  <li><p @click.prevent="goToSettings">Account Settings</p></li>
                  <li>
                    <p @click.prevent="goToNotification">Notifications</p>
                  </li>
                  <li><p @click.prevent="goTo">Rate Our App</p></li>
                  <li><p @click.prevent="goTo">About</p></li>
                </ul>
              </transition>
            </li>
            <button @click="logOut" v-if="localStorage">Sign out</button>
          </ul>
          <ul v-if="!localStorage">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/Registration">Sing up</router-link>
            </li>
            <button @click="logOut" v-if="localStorage">Sign out</button>
          </ul>
        </div>
      </transition>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.v-menu {
  ul {
    padding: 20px 30px;
    li {
      width: 100%;
      display: block;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid #e2e2e2;
      a {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        color: #2e2e2e;
      }
    }
  }
  .v-menu_submenu {
    ul {
      padding: 0;
      padding-top: 25px;
    }
    li {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 10px;
      color: #2e2e2e;
      padding-bottom: 15px;
      margin-bottom: 15px;
      &:last-child {
        padding-bottom: 0;
        margin-bottom: 0;
        border-bottom: 1px solid transparent;
      }
    }
    p {
      color: #979797;
    }
  }
}
.menu {
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #fff;
  width: 252px;
}
.title {
  padding-bottom: 15px;
  background: #ff9b30;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  span {
    font-size: 30px;
    font-weight: 500;
    padding-top: 7px;
    padding-right: 17px;
    float: right;
  }
  a {
    display: flex;
    color: #fff;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
  }
  .profile-link {
    margin-top: 40px;
  }
  .title__info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 22px;
  }
  img {
    width: 32px;
    height: 32px;
    min-width: 32px;
    border-radius: 100%;
    object-fit: cover;
    margin-right: 9px;
    margin-left: 30px;
  }
}
.title__guest {
  padding: 20px 30px;
  a {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
}

//amination
.fadeX-enter-active,
.fadeX-leave-active {
  transition: all 0.5s ease-out;
}
.fadeX-enter,
.fadeX-leave-to {
  opacity: 0;
  transform: translateX(-100vh);
}
</style>

<script lang="js">
export default {
  name: "v-menu",
  props: [ "user", ],
  data() {
    return {
      isActive: false,
      openSettings: false,
      menuVar: null,
      localStorage: localStorage.Token
    };
  },
  methods: {
    showMobileMenu: function() {
      this.isActive = true;
      document.body.classList.toggle("active");
      document.documentElement.style.overflow = 'hidden'
    },
    hideMobileMenu: function() {
      this.isActive = false;
      document.body.classList.remove("active");
      document.documentElement.style.overflow = 'auto'
    },
    goToSettings() {
      this.$router.push("/Settings");
      this.hideMobileMenu();
    },
    goToNotification() {
      this.$router.push("/Settings/Notification");
      this.hideMobileMenu();
    },
    goTo() {
      this.$router.push("/");
      this.hideMobileMenu();
    },
    logOut() {
      alert(localStorage.Token)
      localStorage.clear();
      location.reload();
      // this.$router.push("/Login");
    }
  },
};
</script>


