<template>
  <div class="profile">
    <v-loader v-if="loader"></v-loader>
    <v-header :cart="cart"></v-header>
    <div class="container">
      <div class="profile__title">
        <h2>Profile</h2>
      </div>
      <div class="profile__info">
        <div class="profile__wrap">
          <form class="input__wrapper">
            <input
              name="file"
              type="file"
              id="input__file"
              class="input input__file"
              multiple
              :disabled="!isEditing"
              :class="{ view: !isEditing }"
              @change="onFileSelected($event)" />
            <img
              class="input__file-icon"
              :src="user.avatar"
              alt="Take/choose a photo"
              width="25" />
            <label
              for="input__file"
              class="input__file-button"
              v-if="isEditing">
              <div class="input__text-center">
                <p class="input__file-icon-wrapper">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.8706 11.6198C15.8706 13.7541 14.1344 15.4904 12 15.4904C9.86565 15.4904 8.13004 13.7541 8.13004 11.6198C8.13004 9.48542 9.86565 7.74915 12 7.74915C14.1344 7.74915 15.8706 9.48609 15.8706 11.6198ZM24 6.12367V17.1172C24 18.5828 22.8117 19.771 21.3462 19.771H2.65384C1.18826 19.771 0 18.5828 0 17.1172V6.12367C0 4.65809 1.18826 3.46983 2.65384 3.46983H5.91806V2.5516C5.91806 1.26913 6.95704 0.229492 8.24017 0.229492H15.7598C17.043 0.229492 18.0819 1.26913 18.0819 2.5516V3.46917H21.3462C22.8117 3.46983 24 4.65809 24 6.12367ZM17.861 11.6198C17.861 8.38806 15.2317 5.75877 12 5.75877C8.76895 5.75877 6.13966 8.38806 6.13966 11.6198C6.13966 14.8515 8.76895 17.4808 12 17.4808C15.2317 17.4808 17.861 14.8515 17.861 11.6198Z"
                      fill="white" />
                  </svg>
                </p>
                <p class="input__file-button-text">Take/choose a photo</p>
              </div>
            </label>
          </form>
        </div>
        <div class="profile__wrap">
          <h3>Hello, {{ user.firstName }} {{ user.lastName }}!</h3>
        </div>
        <div class="profile__wrap">
          <button @click="isEditing = !isEditing">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.1928 3.00397L14.8545 6.68347L5.58591 15.9974L1.92638 12.3179L11.1928 3.00397ZM17.6329 2.11656L16 0.475623C15.3689 -0.158541 14.3442 -0.158541 13.7109 0.475623L12.1468 2.04747L15.8084 5.72701L17.6329 3.89353C18.1224 3.40164 18.1224 2.60842 17.6329 2.11656ZM0.0101894 17.4897C-0.0564472 17.7911 0.214319 18.0611 0.514252 17.9879L4.5945 16.9937L0.934967 13.3142L0.0101894 17.4897Z"
                fill="#FDFDFD" />
            </svg>
          </button>
        </div>
      </div>

      <div class="profile__contacts">
        <div class="profile__block">
          <span v-if="v$.user.firstName.$error" class="invalid">{{
            v$.user.firstName.$errors[0].$message
          }}</span>
          <p>First Name</p>
          <input
            type="text"
            v-model="user.firstName"
            :disabled="!isEditing"
            :class="{ view: !isEditing }" />
        </div>

        <div class="profile__block">
          <span v-if="v$.user.lastName.$error" class="invalid">{{
            v$.user.lastName.$errors[0].$message
          }}</span>
          <p>Last Name</p>
          <input
            type="text"
            v-model="user.lastName"
            :disabled="!isEditing"
            :class="{ view: !isEditing }" />
        </div>
        <div class="profile__block">
          <span v-if="v$.phoneNumber.$error" class="invalid">{{
            v$.phoneNumber.$errors[0].$message
          }}</span>
          <p>Phone Number</p>
          <div class="profile__number" v-if="!isEditing">
            <p>+1</p>
            <input
              type="text"
              v-model="phoneNumber"
              :disabled="!isEditing"
              :class="{ view: !isEditing }" />
          </div>

          <span v-if="v$.userPhone.value.$error" class="invalid">{{
            v$.userPhone.value.$errors[0].$message
          }}</span>
          <VuePhoneNumberInput
            v-if="isEditing"
            v-model="userPhone.value"
            v-bind="userPhone.props"
            size="sm"
            @update="onUpdate" />
        </div>
      </div>

      <transition name="fade">
        <div class="profile__btn" v-if="isEditing">
          <button @click="changeProfile" class="btn-orange">
            Save
          </button>
          <button @click="isEditing = false" class="btn-light">Cancel</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  .profile__title {
    display: grid;
    grid-template-columns: 2fr 3fr 3fr 4fr;
  }
  h2 {
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 43px;
    margin-bottom: 80px;
    grid-column-start: 2;
    grid-column-end: 3;
  }
  .profile__info {
    display: grid;
    grid-template-columns: 2fr 3fr 3fr 4fr;
    grid-template-rows: 250px;
    margin-bottom: 97px;
    img {
      width: 204px;
      height: 204px;
      border-radius: 100%;
      object-fit: cover;
      box-shadow: 10px 15px 45px rgba(0, 0, 0, 0.3);
    }
    button {
      width: 45px;
      height: 45px;
      border-radius: 100%;
      background: #ff9b30;
    }
    h3 {
      font-size: 34px;
      font-style: normal;
      font-weight: 700;
      line-height: 41px;
      height: 204px;
    }
  }
}
.profile__wrap {
  height: 120px;
  display: grid;
}
.profile__wrap:first-child {
  grid-column-start: 2;
  grid-column-end: 3;
}
.profile__wrap:nth-child(2) {
  grid-column-start: 3;
  grid-column-end: 6;
  justify-content: start;
  h3 {
    display: flex;
    align-items: center;
  }
}
.profile__wrap:last-child {
  grid-column-start: 6;
  grid-column-end: 7;
}
.profile__contacts {
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 6fr;
  grid-template-rows: 81px 81px;
  grid-gap: 80px;
  margin-bottom: 100px;
}
.profile__block {
  p {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    margin-bottom: 16px;
    color: #979797;
  }
  input {
    border: none;
    background: transparent;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    color: #2e2e2e;
  }
}
.profile__block:first-child,
.profile__block:nth-child(2) {
  grid-column-start: 2;
  grid-column-end: 3;
}
.profile__block:nth-child(3),
.profile__block:nth-child(4) {
  grid-column-start: 3;
  grid-column-end: 4;
}
.profile__block:nth-child(3) {
  grid-row-start: 1;
}
.view {
  border-color: red;
  background-color: initial;
  color: initial;
}

.profile__block {
  input {
    border-bottom: 1px solid #eeeeee;
  }
  input[type="text"] {
    padding-bottom: 10px;
  }
}
.profile__block input:disabled {
  border-bottom: 1px solid transparent;
}
.photoUser {
  width: 200px;
  height: 200px;
  background: red;
  border-radius: 100%;
}
.profile__number {
  display: flex;
  align-items: center;
  p {
    font-size: 16px;
    margin-right: 5px;
  }
}
//input file
.input__wrapper {
  width: 100%;
  position: relative;
  margin: 15px 0;
}
.input__file {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}
.input__text-center {
  width: 82px;
}
.input__file-icon-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 13px;
}

.input__file-button-text {
  margin-top: 1px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  text-align: center;
}

.input__file-button {
  position: absolute;
  top: 0;
  width: 204px;
  height: 204px;
  border-radius: 100%;
  background: rgba(255, 155, 48, 0.86);
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto;
}

//button
.profile__btn {
  display: grid;
  grid-template-columns: 2fr 3fr 3fr 4fr;
  margin-bottom: 80px;
}
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100vh);
}

::v-deep .vue-phone-number-input .select-country-container {
  width: 85px;
  min-width: 85px;
  max-width: 85px;
}
::v-deep .vue-phone-number-input.sm .select-country-container {
  width: 85px;
  min-width: 85px;
  max-width: 85px;
}
::v-deep .flex-1 {
  width: 185px;
  min-width: 185px;
  max-width: 185px;
}

@media screen and (max-width: 999px) {
  .profile .profile__info {
    display: flex;
    justify-content: center;
    align-items: end;
    .profile__wrap {
      height: auto;
    }
  }
  .profile__wrap:first-child,
  .profile__wrap:nth-child(2),
  .profile__wrap:last-child {
    grid-column-start: none;
    grid-column-end: none;
  }
  .profile__wrap:nth-child(2) h3 {
    display: none;
  }
  .profile__contacts {
    display: flex;
    flex-direction: column;
    margin-left: 46px;

    grid-template-columns: none;
    grid-template-rows: none;
    grid-gap: 40px;
  }
}
</style>

<script lang="js">
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, numeric, minLength, maxLength } from "@vuelidate/validators";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import vLoader from "@/components/v-loader.vue";
import VHeader from "@/layots/v-header.vue";

export default {
  components: {VHeader, vLoader, VuePhoneNumberInput},
  props: {
    cart: {
      type: Number,
      default: 0,
    }
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      loader: false,
      profile: {
        img: null,
      },
      user: {
        firstName: "",
        lastName: "",
      },
      phoneNumber: "",
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
      isEditing: false,
    };
  },
  validations() {
    return {
      user: {
        firstName: { required },
        lastName: { required },
      },
      phoneNumber: { required, numeric, minLength: minLength(10), maxLength: maxLength(10) },
      userPhone: {
        value: { required, minLength: minLength(14) },
      },
    }
  },
  async created() {
    this.loader = true;
    if (localStorage.Token) {
      try {
      const result = await axios(process.env.VUE_APP_HOST + "/buyer/accounts/profile", {
        method: "GET",
        headers: {
          "AUTH-KEY": localStorage.Token
        },
      });
      this.user = result.data;
      if (result.data.phoneNumber.includes("+1")) {
        this.phoneNumber = result.data.phoneNumber.slice(2,12);
      } else {
        this.phoneNumber = result.data.phoneNumber;
        this.userPhone.value = result.data.phoneNumber;
      }
      } catch (e) {
        alert(e)
      }
    }
    this.loader = false;
  },
  methods: {
    onUpdate(props) {
      this.userPhone.countryCode = props.countryCallingCode;
      this.userPhone.nationalNumber = props.nationalNumber;
      this.$emit("update", props);
    },
    async changeProfile() {
      this.loader = true;
      const result = await this.v$.$validate();
      if (!result) {
        this.loader = false;
        return
      } else {
        try {
          const result = await axios(process.env.VUE_APP_HOST + "/buyer/accounts/profile", {
            method: "POST",
            headers: {
              "AUTH-KEY": localStorage.Token
            },
            data: {
              firstName: this.user.firstName,
              lastName: this.user.lastName,
              phoneNumber: "+"+this.userPhone.countryCode+this.userPhone.nationalNumber,
            },
          });
          this.user = result.data;
          } catch (e) {
            alert(e)
          }
          location.reload();
          this.loader = false;
          }
    },
    onFileSelected(event) {
      this.loader = true;
      const file = event.target.files[0];
      this.profile.img = file.name;

      try {
        const fd = new FormData();
        fd.append("Avatar", file );
        let config = {
          headers: {
            "AUTH-KEY": localStorage.Token,
            // 'Content-Type': 'multipart/form-data',
          },
        };
        axios.post(process.env.VUE_APP_HOST + "/buyer/accounts/upload-avatar", fd, config)
        .then(res => {
          console.log(res)
        });
      } catch (e) {
        alert(e)
      }
      setTimeout(() => location.reload(), 1500);
      this.loader = false;
    },
  }
};
</script>
