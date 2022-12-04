<template>
  <div class="accountSecurity">
    <section class="tab-content">
      <div class="password">
        <span v-if="serverNotification" class="invalid">{{
          serverNotification
        }}</span>
        <span v-if="v$.currentPassword.$error" class="invalid">{{
          v$.currentPassword.$errors[0].$message
        }}</span>
        <p>Current password</p>
        <input type="password" v-model="currentPassword" />
        <div v-if="v$.newPassword.$error" class="invalid">
              <div>
                Must include at least two of the following elements:
                <p>- at least one letter (upper and lowercase),</p>
                <p>- at least one number,</p>
                <p>- at least 6 symbols,</p>
                <p>
                  - at least one special character from the following: # $ % ' ^
                  , ( ) * + . : | = ? @ / ] [ _ ` { } \ ! ; - ~
                </p>
              </div>
            </div>
        <p>New Password</p>
        <input type="password" placeholder="" v-model="newPassword" />

        <span v-if="v$.rePassword.$error" class="invalid">{{
          v$.rePassword.$errors[0].$message
        }}</span>
        <p>Re-enter New Password</p>
        <input type="password" placeholder="" v-model="rePassword" />

        <div class="row">
          <div class="btn-orange" @click="changePassword">Save changes</div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.btn-add {
  display: flex;
  align-items: center;
  margin-top: 63px;
  margin-bottom: 50px;
}
.btn-add {
  svg {
    width: 32px;
    height: 32px;
    padding: 10px;
    margin-right: 20px;
    border-radius: 4px;
    background: #ff9b30;
  }
  span {
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    color: #ff9b30;
  }
}

//animation
.fadeX-enter-active,
.fadeX-leave-active {
  transition: all 0.5s ease-out;
}
.fadeX-enter,
.fadeX-leave-to {
  opacity: 0;
  transform: translateX(100vh);
}

//password
.password {
  margin-top: 60px;
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    color: #979797;
    margin-bottom: 22px;
  }
  input {
    border: none;
    border-bottom: 1px solid #eeeeee;
    width: 50%;
    margin-bottom: 70px;
  }
}

//btn
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
</style>

<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, minLength, sameAs } from "@vuelidate/validators";
import { validPassword } from "@/assets/js/validation.js";
export default {
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      rePassword: "",
      serverNotification: "",
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      currentPassword: { required, minLength: minLength(6) },
      newPassword: { required, minLength: minLength(6), validPassword },
      rePassword: { required, sameAs: sameAs(this.newPassword) },
    };
  },
  methods: {
    async changePassword() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      } else {
        try {
          await axios(
            process.env.VUE_APP_HOST + "/buyer/accounts/update-password",
            {
              method: "POST",
              headers: {
                "AUTH-KEY": localStorage.Token,
              },
              data: {
                currentPass: this.currentPassword,
                newPass: this.newPassword,
              },
            }
          );
          localStorage.clear();
          this.$router.push("/Login");
        } catch (e) {
          const error = await e.response.data.error;
          this.serverNotification = error;
        }
      }
    },
  },
};
</script>
