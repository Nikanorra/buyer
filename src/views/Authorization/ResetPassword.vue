<template>
  <div class="reset-password">
    <div class="container">
      <div class="reset-password__wrap">
        <h1>Reset your password</h1>
        <p>
          Please, enter your valid email address. You will get a verification
          code to reset your password.
        </p>

        <div class="invalid" v-if="serverNotification">{{ serverNotification }}</div>

        <form @submit.prevent="resetPass">
          <input type="email" v-model="email" placeholder="Email" />

          <button class="btn-orange">Send email</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reset-password .container {
  display: grid;
  grid-template-areas: "emptyLeft content emptyRight";
  grid-template-columns: 3fr 6fr 3fr;
  grid-template-rows: 1fr;
}
.reset-password__wrap {
  grid-area: content;
  margin-bottom: 140px;
  h1 {
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 26px;
  }
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: 36px;
    padding-bottom: 10px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:first-child {
      margin-bottom: 73px;
    }
    &::placeholder {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      color: #979797;
    }
    &:hover {
      border-bottom: 1px solid #ff9b30;
    }
  }
  a {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    color: #ff9b30;
    margin-bottom: 36px;
  }
  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: #8c8c8c;
    margin-bottom: 114px;
  }
}

//btn
.btn-orange {
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
  margin-top: 45px;
  margin-bottom: 73px;
  background: #ff9b30;
  grid-column-start: 2;
  grid-column-end: 3;
  color: #fff !important;
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
  data() {
    return {
      email: "",
      serverNotification: "",
    };
  },
  methods: {
    async resetPass() {
      try {
        const result = await axios(
          process.env.VUE_APP_HOST + "/buyer/restore-password",
          {
            method: "POST",
            data: {
              emailAddress: this.email,
            },
          }
        );
        const data = await result;
        if (result.status === 200 || result.status === 201) {
          await this.$router.push("/Check-email");
        } else {
          debugger;
          this.serverNotification = data;
        }
      } catch (error) {
        if (error.response.status === 404) {
          this.serverNotification = "User not found"
        } else if (error.response.status === 400) {
          this.serverNotification = "Enter e-mail";
        } else {
          this.serverNotification = error;
        }
      }
    },
  },
};
</script>
