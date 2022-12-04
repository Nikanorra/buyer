<template>
  <div class="track">
    <v-header :cart="cart"></v-header>
    <section>
      <div class="container">
        <div class="col-md-12">
          <h3>Delivery information</h3>
          <div class="row">
            <div class="col-lg-6">
              <track-product :info="info"></track-product>

              <track-driver :info="info"></track-driver>

              <track-address :info="info"></track-address>
            </div>

            <div class="col-lg-6">
              <div class="order-info order-info__schedule">
                <track-schedule :info="info"></track-schedule>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
h3 {
  font-size: 36px;
  margin-bottom: 60px;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: 0.02em;
}
.order-info__wrap {
  padding: 40px 50px;
}
.order-info {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 60px 0px rgba(0, 0, 0, 0.06);
  margin-bottom: 24px;

  div {
    color: #2e2e2e;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.02em;
  }
  p {
    color: #979797;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
  }
}
.order-info__line {
  height: 1px;
  background: #dfdfdf;
  margin: 30px 0;
}

// img
.order-info__pic {
  border-radius: 100%;
  width: 90px;
  height: 90px;
  margin-right: 30px;
  overflow: hidden;
}
.order-info__ava {
  border-radius: 100%;
  width: 64px;
  height: 64px;
  margin-right: 30px;
  overflow: hidden;
}
.order-info__pic img,
.order-info__ava img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

// text
.order-info__part {
  margin-bottom: 19px;
}
.order-info__product .order-info__wrap .order-info__main {
  p {
    padding-top: 10px;
    margin-bottom: 0;
  }
}

// driver
// rate
.order-info__name {
  padding-bottom: 10px;
}
.order-info__rate {
  margin-bottom: 16px;
  span {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: #2e2e2e;
    letter-spacing: 0.02em;
  }
}

// footer
.order-info__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.02rem;
    text-align: right;
  }
}

// address
.order-info__address .order-info__wrap .order-info__main {
  div {
    margin-bottom: 34px;
  }
  p {
    margin-bottom: 16px;
  }
}

// schedule
.order-info__shop {
  margin-top: 16px;
  width: 95%;
  display: flex;
  justify-content: space-between;
}
.order-info__statuses p {
  margin-top: 16px;
}
.order-info__text div {
  line-height: 20px;
}

@media (min-width: 991px) and (max-width: 1200px) {
  .order-info__text p {
    font-size: 12px;
    line-height: 15px;
  }
}
</style>

<script lang="js">
import axios from "axios";
import { FingerprintService } from "@/FingerprintService";
import VHeader from "@/layots/v-header.vue";
import TrackProduct from "@/components/track/TrackProduct.vue";
import TrackDriver from "@/components/track//TrackDriver.vue";
import TrackAddress from "@/components/track/TrackAddress.vue";
import TrackSchedule from "@/components/track/TrackSchedule.vue";

export default {
  services: ["FingerprintService"],
  components: {
    VHeader,
    TrackProduct,
    TrackDriver,
    TrackAddress,
    TrackSchedule,
  },
  props: {
    cart: {
      type: Number
    }
  },
  data() {
    return {
      info: {},
    }
  },
  async created() {
    const newFPS = new FingerprintService();
    let visitorId = await newFPS.getUserToken();
    let id = this.$route.params.id;
    const res = await axios.get(
      `${process.env.VUE_APP_HOST}/buyer/orders/tracking?deviceid=${visitorId}&id=${id}`,
      {
        headers: {
          "AUTH-KEY": localStorage.Token,
        },
      }
    );
    this.info = res.data;
  }
};
</script>
