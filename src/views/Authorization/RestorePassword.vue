<template>
  <div class="restore-password">
    <div class="container">
      <div class="restore-password__wrap">
        <h1>Enter new password</h1>
        <!--        <p>We have sent you a restore-password code by email. Enter the code down below.</p>-->
        <div class="invalid" v-if="serverNotification">{{ serverNotification }}</div>
        <form @submit.prevent="restorePass">
          <input
            type="password"
            v-model="password"
            placeholder="Enter new password" />
          <button type="submit" class="btn-orange">Add new pass</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.restore-password .container {
  display: grid;
  grid-template-areas: "emptyLeft content emptyRight";
  grid-template-columns: 3fr 6fr 3fr;
  grid-template-rows: 1fr;
}
.restore-password__wrap {
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
    cursor: pointer;
    transition: all 0.5s ease-in-out;
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
  .restore-password__option {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    color: #797979;
    margin-bottom: 73px;
    button {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      color: #ff9b30;
    }
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
      password: "",
      serverNotification: "",
    };
  },
  methods: {
    async restorePass() {
      debugger;
      try {
        let token = this.$route.params.token;
        const res = await axios(
          `${process.env.VUE_APP_HOST}/buyer/restore-password/${token}`,
          {
            method: "POST",
            data: {
              password: this.password,
            },
          }
        );
        const data = await res;
        debugger;
        if (data.status === 200 || data.status === 201) {
          await this.$router.push("/Success");
        } else {
          this.serverNotification = "Something went wrong. Try again";
        }
      } catch (error) {
        debugger;
        if (error.response.status === 500) {
          this.serverNotification = "Please enter new password"
        } else {
          // this.serverNotification = error.response.data.Error;
          this.serverNotification = "Something went wrong. Try again";
        }
      }
    },
  },
};
</script>
