<template>
  <div class="registration">
    <div class="container">
      <div class="registration__wrap">
        <h1>Hello! Welcome to Unhar. Create your account first</h1>

        <span v-if="serverNotification" class="invalid">{{
          serverNotification
        }}</span>

        <form @submit.prevent="registration">
          <span v-if="v$.form.firstName.$error" class="invalid">{{
            v$.form.firstName.$errors[0].$message
          }}</span>

          <input
            type="text"
            v-model="form.firstName"
            placeholder="First Name" />

          <span v-if="v$.form.lastName.$error" class="invalid">{{
            v$.form.lastName.$errors[0].$message
          }}</span>
          <input type="text" v-model="form.lastName" placeholder="Last Name" />

          <span v-if="v$.userPhone.value.$error" class="invalid">{{
            v$.userPhone.value.$errors[0].$message
          }}</span>
          <VuePhoneNumberInput
            v-model="userPhone.value"
            v-bind="userPhone.props"
            @update="onUpdate" />

          <span v-if="v$.form.email.$error" class="invalid">{{
            v$.form.email.$errors[0].$message
          }}</span>
          <input type="text" v-model="form.email" placeholder="Email" />

          <span v-if="v$.form.password.$error" class="invalid">{{
            v$.form.password.$errors[0].$message
          }}</span>
            <div class="form-password" v-show="!showPassword">
            <input
              type="password"
              v-model="form.password"
              placeholder="Password" />
            <button @click.prevent="showPassword = !showPassword">
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0C3.81818 0 1.08182 1.86 0 4.5C1.08182 7.14 3.81818 9 7 9C10.1818 9 12.9182 7.14 14 4.5C12.9182 1.86 10.1818 0 7 0ZM7 7.5C5.21818 7.5 3.81818 6.18 3.81818 4.5C3.81818 2.82 5.21818 1.5 7 1.5C8.78182 1.5 10.1818 2.82 10.1818 4.5C10.1818 6.18 8.78182 7.5 7 7.5ZM7 2.7C5.91818 2.7 5.09091 3.48 5.09091 4.5C5.09091 5.52 5.91818 6.3 7 6.3C8.08182 6.3 8.90909 5.52 8.90909 4.5C8.90909 3.48 8.08182 2.7 7 2.7Z"
                  fill="#797979" />
              </svg>
            </button>
          </div>
          <div class="form-password" v-show="showPassword">
            <input
              type="text"
              v-model="form.password"
              v-show="showPassword"
              placeholder="Password" />
            <button @click.prevent="showPassword = !showPassword">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.89355 3.48329L8.89764 5.30698L8.90718 5.21145C8.90718 4.25329 8.05148 3.47461 6.99853 3.47461L6.89355 3.48329Z"
                  fill="#797979" />
                <path
                  d="M6.99818 2.3165C8.75414 2.3165 10.1793 3.61335 10.1793 5.21125C10.1793 5.58467 10.0966 5.94072 9.95343 6.26782L11.8144 7.96124C12.775 7.23177 13.5322 6.28809 13.9998 5.21125C12.8959 2.66968 10.1825 0.869141 6.99821 0.869141C6.10749 0.869141 5.25498 1.01387 4.46289 1.2744L5.83712 2.52202C6.19654 2.39466 6.58782 2.3165 6.99818 2.3165Z"
                  fill="#797979" />
                <path
                  d="M0.636208 0.738158L2.08678 2.05816L2.37627 2.32159C1.32651 3.06843 0.49625 4.06134 0 5.21053C1.10067 7.7521 3.81731 9.55264 6.9984 9.55264C7.98455 9.55264 8.92614 9.37895 9.78823 9.06342L10.0586 9.30948L11.9132 11L12.7244 10.2647L1.44739 0L0.636208 0.738158ZM4.15451 3.93685L5.13747 4.83133C5.10884 4.95581 5.08975 5.08027 5.08975 5.21053C5.08975 6.1687 5.94545 6.94737 6.9984 6.94737C7.14155 6.94737 7.27835 6.93001 7.41196 6.90395L8.39491 7.79843C7.97182 7.98948 7.50104 8.10528 6.9984 8.10528C5.24244 8.10528 3.81731 6.80843 3.81731 5.21053C3.81731 4.75317 3.94456 4.32474 4.15451 3.93685Z"
                  fill="#797979" />
              </svg>
            </button>
          </div>

          <p>
            <span>I already have my Unhar account. </span>
            <router-link to="/Login">Log in</router-link>
          </p>
          <button class="btn-orange" type="submit">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.registration .container {
  display: grid;
  grid-template-areas: "emptyLeft content emptyRight";
  grid-template-columns: 3fr 6fr 3fr;
  grid-template-rows: 1fr;
}
.registration__wrap {
  grid-area: content;
  margin-bottom: 140px;
  h1 {
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 73px;
  }
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: 73px;
    padding-bottom: 10px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:last-child {
      margin-bottom: 36px;
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
    margin-bottom: 32px;
  }
}
.registration__phone {
  line-height: 12px !important;
  display: flex;
  align-items: flex-start;
  span {
    font-size: 12px;
    padding-right: 10px !important;
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
  margin-bottom: 73px !important;
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

import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    VuePhoneNumberInput,
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        countryCallingCode: "",
      },
      userPhone: {
        value: "",
        countryCode: "",
        nationalNumber: "",
        props: {
          clearable: true,
          preferredCountries: ["US", "UA", "BY", "PL"],
          "default-country-code": "US",
          translations: {
            countrySelectorLabel: "Country code",
            countrySelectorError: "Error",
            phoneNumberLabel: "Enter your phone",
            example: "Example:",
          },
        },
      },
      showPassword: false,
      serverNotification: "",
    };
  },
  validations() {
    return {
      form: {
        firstName: { required },
        lastName: { required },
        email: { required, email },
        password: { required, minLength: minLength(6) },
      },
      userPhone: {
        value: { required, minLength: minLength(14) },
      },
    };
  },
  methods: {
    onUpdate(props) {
      this.userPhone.countryCode = props.countryCallingCode;
      this.userPhone.nationalNumber = props.nationalNumber;
      this.$emit("update", props);
    },
    async registration() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      } else {
        try {
          const res = await axios(
            process.env.VUE_APP_HOST + "/buyer/registrate",
            {
              method: "POST",
              data: {
                firstName: this.form.firstName,
                lastName: this.form.lastName,
                email: this.form.email,
                password: this.form.password,
                phone:
                  "+" +
                  this.userPhone.countryCode +
                  this.userPhone.nationalNumber,
              },
            }
          );
          const data = await res;
          if (res.status === 200 || res.status === 201) {
            await this.$router.push("/Check-email");
          } else {
            this.errors = data;
            alert("errors");
          }
        } catch (e) {
          const error = await e.response.data.error;
          this.serverNotification = error;
        }
      }
    },
  },
};
</script>
