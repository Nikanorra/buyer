<template>
  <div class="accountAddress">
    <section class="tab-content">
      <div v-if="addAddress" class="account__add-address">
        <v-autocomplete
          :locations="locations"
          @selectMethod="locationSelect"
          @saveAddress="saveAddress"
          @cancelForm="addAddress = false"
          :selectStreet="selectStreet"
          >{{ form.selectStreet }}</v-autocomplete
        >
      </div>

      <div v-else class="account__address">
        <transition name="fadeX">
          <button @click="addAddress = !addAddress" class="btn-add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5085 4.5967H7.4042V1.49242C7.4042 0.72975 6.76364 0.105469 6.00069 0.105469C5.23775 0.105469 4.59719 0.72975 4.59719 1.49242V4.5967H1.4929C0.730238 4.5967 0.105957 5.23726 0.105957 6.00021C0.105957 6.76315 0.730238 7.40372 1.4929 7.40372H4.59719V10.508C4.59719 11.2707 5.23775 11.8949 6.00069 11.8949C6.76364 11.8949 7.4042 11.2707 7.4042 10.508V7.40372H10.5085C11.2712 7.40372 11.8954 6.76315 11.8954 6.00021C11.8954 5.23726 11.2712 4.5967 10.5085 4.5967Z"
                fill="#FDFDFD" />
            </svg>

            <span>Add new address</span>
          </button>
        </transition>

        <div class="cards__wrap">
          <div class="cards" v-for="address in addresses" :key="address.id">
            <div class="cards__header">
              <div class="title">{{ address.title }}</div>
            </div>
            <div class="address">{{ address.address }}</div>
            <button class="cards__del" @click="deleteAddress(address.id)">
              Delete address
            </button>
          </div>
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

//cards address
.cards__wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  .cards {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 30px;
    box-shadow: 0px 4px 70px 0px rgba(0, 0, 0, 0.07);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    color: #979797;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      border: 1px solid #ff9b30;
    }
    .title {
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      color: #000000;
    }
    .address {
      margin-bottom: 30px;
    }
    .cards__del {
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      color: #f83d3d;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        font-size: 18px;
      }
    }
    .cards__edit {
      cursor: pointer;
      svg {
        background: none;
        padding: 0;
        margin: 0;
        height: 16px;
        path {
          transition: 0.3s;
        }
      }
      &:hover svg {
        height: 18px;
        path {
          fill: red;
        }
      }
    }
  }
}
.cards__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  //height: 32px;
  margin-bottom: 16px;
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

@media screen and (max-width: 2000px) {
  .btn-add span {
    font-size: calc(12px + 10 * (100vw / 1920));
  }
  .cards__wrap .cards {
    .title {
      font-size: calc(12px + 6 * (100vw / 1920));
    }
    .cards__edit svg {
      height: 12px;
    }
    .address {
      font-size: calc(10px + 8 * (100vw / 1920));
      margin-bottom: 15px;
      height: 100px;
      overflow: hidden;
    }
    .cards__del {
      font-size: calc(8px + 8 * (100vw / 1920));
    }
  }
}
// @media screen and (max-width: 485px) {
//   .btn-orange, .btn-light {
//     width: 100%;
//   }
// }
</style>

<script>
import VAutocomplete from "@/components/autocomplete/v-autocomplete.vue";
import axios from "axios";
export default {
  components: { VAutocomplete },
  data() {
    return {
      addresses: [],
      locations: [],
      addAddress: false,
      addPayment: false,
      selectStreet: "Search",
      form: {
        address: "",
        title: "",
      },
    };
  },
  async beforeCreate() {
    const addresses = await axios(
      process.env.VUE_APP_HOST + "/buyer/accounts/address",
      {
        method: "GET",
        headers: {
          "AUTH-KEY": localStorage.Token,
        },
      }
    );
    this.addresses = addresses.data.buyerAddresses;
  },
  methods: {
    locationSelect(location) {
      this.selectStreet = location.address;
    },
    async saveAddress(selectType) {
      const newAddress = await axios(
        process.env.VUE_APP_HOST + "/buyer/accounts/address",
        {
          method: "POST",
          headers: {
            "AUTH-KEY": localStorage.Token,
          },
          data: {
            title: selectType,
            address: this.selectStreet,
          },
        }
      );
      this.addresses = newAddress.data.buyerAddresses;
      this.addAddress = false;
      this.selectStreet = "Search";
    },
    async deleteAddress(id) {
      const deletedAddress = await axios(
        `${process.env.VUE_APP_HOST}/buyer/accounts/address/${id}`,
        {
          method: "DELETE",
          headers: {
            "AUTH-KEY": localStorage.Token,
          },
        }
      );
      this.addresses = deletedAddress.data.buyerAddresses;
    },
  },
};
</script>
