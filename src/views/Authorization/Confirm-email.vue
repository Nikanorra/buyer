<template>
  <div class="confirm-email">
    <div class="container">
      <div class="confirm-email__content">
        <svg width="211" height="190" viewBox="0 0 211 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M209.823 63.9992L0.925781 64.6864L1.33125 185.985C1.33863 188.194 3.13547 189.979 5.3446 189.972L206.241 189.311C208.45 189.304 210.235 187.507 210.228 185.298L209.823 63.9992Z" fill="#FFB05B"/>
          <path d="M209.801 63.981L190.91 75.8918L105.589 129.632L20.671 76.5509L1.68457 64.6636L20.6 53.0117L65.9827 25.0707L105.163 0.895874L144.817 24.8117L190.839 52.5409L209.801 63.981Z" fill="#ED9130"/>
          <path d="M190.744 24.647L190.91 75.8919L105.589 129.632L20.6711 76.551L20.5054 25.2119L190.744 24.647Z" fill="white"/>
          <path d="M50.1216 49.3635L82.2943 49.2456" stroke="#DADFEA" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M49.9526 67.6538L159.349 67.3002" stroke="#DADFEA" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M50 80.2473L159.397 79.8937" stroke="#DADFEA" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
        </svg>
        <h3>Confirm your email address</h3>
        <button type="submit" class="btn-orange" @click="submitForm">
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.confirm-email__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  svg {
    margin-top: 20px;
    margin-bottom: 50px;
  }
  h3 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50px;
  }
}
//button
.btn-orange {
  width: 204px;
  height: 45px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  border-radius: 22px;
  margin-right: 24px;
  margin-bottom: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-orange {
  background: #ff9b30;
  color: #fff;
  transition: 0.3s;
  a {
    color: #fff;
  }
  &:hover {
    background: #e97a03;
    color: #fff;
  }
}
</style>

<script>
import axios from "axios";

export default {
  methods: {
    async submitForm() {
      try {
        let token = this.$route.params.token;
        const res = await axios.get(
          `${process.env.VUE_APP_HOST}/buyer/confirm-email?token=${token}`
        );
        const data = await res;
        if (res.status === 200 || res.status === 201) {
          await this.$router.push("/Login");
        } else {
          this.errors = data;
          alert("errors");
        }
      } catch (error) {
        alert("ERROR");
      }
    },
  },
};
</script>
