<template>
  <div class="v-autocomplete-with-addresses">
    <div class="autocomplete__block">
      <input
        class="search"
        type="search"
        :placeholder="selectStreet"
        :value="value"
        @input="enterAddress($event.target.value)"
        @blur="onBlur" />

      <transition name="fadeY">
        <ul v-show="focused">
          <li
            v-for="location in searchHandler"
            :key="location.id"
            @click="selectLocation(location)">
            <p>{{ location.title }}</p>
            <p>{{ location.address }}</p>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-autocomplete {
  margin-top: 67px;
  .autocomplete__block:first-child {
    margin-right: 26px;
  }
  .title {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    margin-bottom: 14px;
  }
}
input {
  border: none;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 10px;
  margin-bottom: 10px;
  // width: 432px;
  width: 100%;
  position: relative;
  transition: 0.3s;
  &:hover,
  &:focus,
  &:active {
    // width: 432px;
    border-bottom: 1px solid #ff9b30;
  }
}
ul {
  max-height: 369px;
  max-width: 432px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
}
li {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  color: #2e2e2e;
  padding: 12px 20px;
  cursor: pointer;
  transition: 0.7s;
  &:hover {
    background: #bfbfbf;
  }
}
li:first-child:hover {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
li:last-child:hover {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
li p:last-child {
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  color: #979797;
}

.fadeY-enter-active,
.fadeY-leave-active {
  transition: all 0.5s ease-out;
}
.fadeY-enter,
.fadeY-leave-to {
  opacity: 0;
  transform: translateY(-10px);
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

<script lang="js">
import axios from "axios";

export default {
  props: ["locations", "selectStreet", "form"],
  data() {
    return {
      value: "",
      selectType: "",
      focused: false,
    };
  },
  computed: {
    searchHandler() {
      return this.locations.filter((elem) => {
        return elem.address.toLowerCase().includes(this.value.toLowerCase());
      });
    },
  },
  methods: {
    async enterAddress(value) {
      if (value.length >= 3) {
        this.value = value;
        this.focused = true;
        let addressString = value;
        const res = await axios.get(process.env.VUE_APP_HOST + "/buyer/accounts/address")
        this.locations = res.data;
      } else {
        this.focused = false;
      }
    },

    onFocus() {
      if (this.search.length >= 3) {
        this.focused = true;
      } else {
        this.focused = false;
      }
    },
    onBlur() {
      this.focused = false;
    },
    selectLocation(location) {
      this.value = location.address;
      this.$emit("selectMethod", location);
      this.visible = false;
      // this.search = "";
    },
    cancelEdit() {
      this.$emit("cancelForm");
    },

    saveAddress() {
      axios (process.env.VUE_APP_HOST + "/buyer/accounts/address", {
        method: "POST",
        headers: {
          "AUTH-KEY": localStorage.Token,
        },
        data: {
          title: this.selectType,
          address: this.selectStreet,
        }
      });
      this.$emit("cancelForm");
    }
  },
};
</script>
