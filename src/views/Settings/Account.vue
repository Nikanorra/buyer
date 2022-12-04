<template>
  <div class="account">
    <div class="container">
      <div class="account__tabs">
        <router-link to="/Settings" exact active-class="active">
          <a>Your addresses</a>
        </router-link>
        <router-link to="/Settings/accountPayment" exact active-class="active">
          <a>Payment options</a>
        </router-link>
        <router-link to="/Settings/accountSecurity" exact active-class="active">
          <a>Login & Security</a>
        </router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.account {
  margin-bottom: 139px;
}
.account__tabs {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  color: #bfbfbf;
  border-bottom: 1px solid #dfdfdf;
  padding-bottom: 23px;
  a {
    margin-right: 73px;
    &:last-child {
      margin-right: 0;
    }
  }
  a.active {
    //font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    color: #000000;
    border-bottom: 3px solid #ff9b30;
    padding-bottom: 22px;
  }
}

@media screen and (max-width: 2000px) {
  .account__tabs {
    font-size: calc(10px + 8 * (100vw / 1920));
    line-height: 22px;
  }
}
@media screen and (max-width: 767px) {
  .account__tabs {
    display: flex;
    justify-content: space-between;
    // flex-direction: column;
  }
  .account__tabs {
    padding-bottom: 0;
  }
  .account__tabs a {
    margin-right: 10px;
    text-align: center;
    &:last-child {
      margin-right: 0;
    }
  }
}
@media screen and (max-width: 485px) {
  ::v-deep .btn-orange,
  ::v-deep .btn-light {
    width: 100% !important;
  }
}
</style>

<script>
export default {
  methods: {
    locationSelect(location) {
      this.selectStreet = location.street;
    },
  },
};
</script>
