<template>
  <div id="app" @click.self="isOpen = !isOpen">
    <header>
      <div class="container">
        <div class="mobile-wrap-bg">
          <div class="header-mobile__wrap">
            <v-menu :user="user" class=""></v-menu>

            <div class="category">
              <router-link to="/">
                <img class="logo__mob" src="@/assets/img/header/logo.svg" alt="Logo" />
              </router-link>
            </div>
            <router-link to="/Cart" class="basket">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.7465 2.47516C19.548 2.24399 19.2623 2.11099 18.961 2.11099H4.60363L4.40103 0.882323C4.31791 0.373545 3.88467 -0.00012207 3.37662 -0.00012207H1.03896C0.464415 -0.00012207 0 0.471711 0 1.05543C0 1.63916 0.464415 2.11099 1.03896 2.11099H2.49662L4.42908 13.8952C4.4374 13.9427 4.46129 13.9818 4.47584 14.0261C4.49246 14.082 4.50597 14.1348 4.53194 14.1855C4.56519 14.2552 4.60986 14.3143 4.65662 14.3744C4.68882 14.4156 4.71791 14.4568 4.75532 14.4927C4.81558 14.5497 4.88519 14.5898 4.95584 14.6299C4.99532 14.652 5.0296 14.6816 5.0722 14.6985C5.19272 14.7481 5.31947 14.7777 5.4535 14.7777H16.8831C17.4576 14.7777 17.922 14.3058 17.922 13.7221C17.922 13.1384 17.4576 12.6665 16.8831 12.6665H6.33454L6.16207 11.611H17.922C18.4395 11.611 18.8779 11.2247 18.9506 10.7053L19.9896 3.31643C20.0322 3.01243 19.9428 2.70527 19.7465 2.47516ZM17.7631 4.2221L17.467 6.33321H13.7662V4.2221H17.7631ZM12.7273 4.2221V6.33321H9.61037V4.2221H12.7273ZM12.7273 7.38877V9.49988H9.61037V7.38877H12.7273ZM8.57141 4.2221V6.33321H5.45454C5.39947 6.33321 5.3496 6.34905 5.30077 6.36488L4.9496 4.2221H8.57141ZM5.46908 7.38877H8.57141V9.49988H5.81506L5.46908 7.38877ZM13.7662 9.49988V7.38877H17.3174L17.0213 9.49988H13.7662Z"
                  fill="#2E2E2E"></path>
                <path
                  d="M7.01296 18.9999C7.87366 18.9999 8.5714 18.291 8.5714 17.4165C8.5714 16.5421 7.87366 15.8332 7.01296 15.8332C6.15226 15.8332 5.45452 16.5421 5.45452 17.4165C5.45452 18.291 6.15226 18.9999 7.01296 18.9999Z"
                  fill="#2E2E2E"></path>
                <path
                  d="M16.3637 18.9999C17.2244 18.9999 17.9221 18.291 17.9221 17.4165C17.9221 16.5421 17.2244 15.8332 16.3637 15.8332C15.503 15.8332 14.8052 16.5421 14.8052 17.4165C14.8052 18.291 15.503 18.9999 16.3637 18.9999Z"
                  fill="#2E2E2E"></path>
              </svg>
            </router-link>
          </div>
        </div>
        <div class="header__wrap">
          <div class="row">
            <div class="col-lg-6">
              <div class="header__nav-left">
                <ul class="header__ul-left">
                  <li>
                    <a href="https://delivery.unhar.com/">Ship with Unhar</a>
                  </li>
                  <li>
                    <a href="https://delivery.unhar.com/Driver"
                      >Deliver with Unhar</a
                    >
                  </li>
                  <li><a href="">Help</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="header__nav-right">
                <ul>
                  <!-- NOTIFICATION -->
                  <!-- <li>
                    <router-link to="/">
                      <svg
                        width="11"
                        height="17"
                        viewBox="0 0 11 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 8.54559C0 5.52063 2.45663 3.05231 5.47745 3.05231C8.49827 3.05231 10.9549 5.52063 10.9549 8.54559V13.3085C10.9549 13.7119 10.6279 14.0389 10.2246 14.0389H0.730327C0.326978 14.0389 0 13.7119 0 13.3085V8.54559ZM5.47745 4.51296C3.26791 4.51296 1.46065 6.32274 1.46065 8.54559V12.5782H9.49425V8.54559C9.49425 6.32274 7.68699 4.51296 5.47745 4.51296Z"
                          fill="#FDFDFD" />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.44966 1.92708C4.85674 1.92708 4.60714 2.2974 4.60714 2.50399V3.5639H3.14648V2.50399C3.14648 1.22669 4.34221 0.466431 5.44966 0.466431C6.62715 0.466431 7.75284 1.2849 7.75284 2.50399V3.5639H6.29219V2.50399C6.29219 2.30986 6.05757 1.92708 5.44966 1.92708Z"
                          fill="#FDFDFD" />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.2565 12.9662C8.64054 13.0895 8.85191 13.5008 8.7286 13.8848C8.2552 15.3592 7.033 16.5336 5.47709 16.5336C3.9457 16.5336 2.67019 15.4238 2.22073 13.9073C2.10611 13.5206 2.32669 13.1142 2.71341 12.9996C3.10013 12.885 3.50655 13.1055 3.62117 13.4923C3.91984 14.5 4.70172 15.073 5.47709 15.073C6.22795 15.073 7.00079 14.4881 7.33787 13.4383C7.46118 13.0542 7.87247 12.8429 8.2565 12.9662Z"
                          fill="#FDFDFD" />
                      </svg>
                    </router-link>
                  </li> -->
                  <li>
                    <v-dropdown-account
                      title="My Account"
                      :items="services"
                      :user="user"></v-dropdown-account>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="invalid" v-if="serverNotification">{{ serverNotification }}</div>

    <router-view :key="$route.path" :cart="cart" />

    <v-footer></v-footer>
  </div>
</template>

<style lang="scss" scoped>
@import "./assets/css/clearfix.css";
@import "./assets/css/bootstrap-grid.min.css";
@import "./assets/css/site.css";

.select__current {
  color: #fff;
}
.v-menu {
  display: none;
}
.header__ul-left,
.header__nav-right {
  padding: 21px 0;
}
.header-mobile__wrap {
  display: none;
}

@media screen and (max-width: 990px) {
  header {
    background: transparent;
    height: 57px;
  }
  .header__wrap {
    display: none;
  }
  .header-options__logo,
  .header-options__nav {
    display: none;
  }
  .header-mobile__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 35px;
    .category {
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
    }
  }
  .v-menu {
    display: block;
  }
  .logo__mob {
    height: 19px;
    width: auto;
  }
  ::v-deep .header-options .col-lg-2 {
    display: none;
  }
  ::v-deep .header-options__search {
    display: flex;
  }
 }

img {
  width: 20px;
}
</style>

<script lang="js">
import axios from "axios";
import { FingerprintService } from "@/FingerprintService";
import vMenu from "./components/mobile-menu/v-menu.vue";
import vDropdownAccount from "@/components/dropdown/v-dropdown-account.vue";
import VFooter from "@/layots/v-footer.vue";

export default {
  services: ['FingerprintService'],
  components: {
    VFooter,
    vMenu,
    vDropdownAccount,
  },
  data() {
    return {
      visitorId: "",
      cart: 0,
      modalVisible: false,
      isOpen: false,
      services: [
        { title: "My orders", link: "/Orders" },
        { title: "Settings", link: "/Settings" },
      ],
      user: {},
      serverNotification: "",
    };
  },
  // mounted: function () {
  //   FingerprintJS.load({
  //     token: "b3Kvl545pgep5R8G83dN",
  //   })
  //     .then((fp) => fp.get())
  //     .then((result) => {
  //       this.visitorId = result.visitorId;
  //     });
  // },
  async created() {
    const newFPS = new FingerprintService();
    this.visitorId = await newFPS.getUserToken();
    // const fp = await FingerprintJS.load({
    //   token: "b3Kvl545pgep5R8G83dN",
    // });
    // const result = await fp.get();
    // this.visitorId = result.visitorId;
    const res = await axios.get(
      `${process.env.VUE_APP_HOST}/buyer/orders/shopping-cart?deviceid=${this.visitorId}`,
      {
        headers: {
          "AUTH-KEY": localStorage.Token,
        },
      }
    );
    if (res.status === 204) {
      this.cart = 0
    } else {
      this.cart = res.data.itemQuantity;
    }

    if (localStorage.Token) {
      try {
      const result = await axios(process.env.VUE_APP_HOST + "/buyer/accounts/profile", {
        method: "GET",
        headers: {
          "AUTH-KEY": localStorage.Token
        },
      });
      this.user = result.data;
      } catch (e) {
        if (e.response.status === 401) {
          this.serverNotification = "Re-login please";
        } else if (e.response.data.error === undefined){
          this.serverNotification = "Something was wrong. Try again.";
        }
        else {
          this.serverNotification = e.response.data.error;
        }
      }
    }
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    hideModal() {
      this.modalVisible = false;
    },
  },
  events: {
    closeEvent: function () {
      this.hideModal()
    }
  },
};
</script>
