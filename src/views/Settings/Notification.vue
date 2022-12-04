<template>
  <div class="notification">
    <div class="container">
      <div class="notification__wrap">
        <h2>Account notifications</h2>
        <div class="notification__block">
          <span>Messages</span>
          <span>
            <label class="switch">
              <input type="checkbox" @click="checkMessage" />
              <span class="backdrop round"></span>
            </label>
          </span>
        </div>
        <div class="notification__block">
          <span>Delivery notifications</span>
          <span>
            <label class="switch">
              <input type="checkbox" @click="checkDelivery" />
              <span class="backdrop round"></span>
            </label>
          </span>
        </div>
      </div>

      <div class="notification__wrap">
        <h2>Store notifications</h2>
        <div class="notification__block">
          <span>Discounts notifications</span>
          <span>
            <label class="switch">
              <input type="checkbox" @click="checkDiscount" />
              <span class="backdrop round"></span>
            </label>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notification__wrap {
  margin-bottom: 60px;
  h2 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    margin-bottom: 35px;
  }
  .notification__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.05);
    margin-bottom: 24px;
  }
}

/* checkbox */
.switch {
  position: relative;
  display: inline-block;
  width: 51px;
  height: 31px;
}
/* Hide default HTML checkbox */
.switch input {
  display: none;
}
/* The backdrop */
.backdrop {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: grey;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.backdrop:before {
  position: absolute;
  content: "";
  height: 27px;
  width: 27px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  margin-top: 2px;
  margin-left: 2px;
}
input:checked + .backdrop {
  background-color: orange;
}
input:focus + .backdrop {
  box-shadow: 0 0 1px #2196f3;
}
input:checked + .backdrop:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}
/* Rounded backdrops */
.backdrop.round {
  border-radius: 18px;
}
.backdrop.round:before {
  border-radius: 100%;
}
</style>

<script lang="js">
export default {
  methods: {
    checkMessage() {
      console.log("Message");
    },
    checkDelivery() {
      console.log("Delivery");
    },
    checkDiscount() {
      console.log("checkDiscount");
    },
  },
};
</script>
