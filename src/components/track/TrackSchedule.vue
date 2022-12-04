<template>
  <div class="order-info__wrap">
    <div class="order-info__header">
      <div>28 Jul, 2020, 9:00am - 28 Jul, 2020, 1:00pm</div>
      <p class="order-info__shop">
        <span>Shop name</span>
        <span>adress</span>
        >
      </p>
    </div>
    <div class="order-info__line"></div>
    <div class="order-info__main">
      <div class="row d-flex">
        <div class="col-lg-8">
          <div class="order-info__statuses">
            <div class="order-info__graph">
              <div class="circle"></div>
              <div class="line"></div>
            </div>
            <div class="order-info__text">
              <div class="">Order Placed</div>
              <p>10:10am, Sep 10, 2019</p>
              <p>We have received your order.</p>
            </div>
          </div>
          <div class="order-info__statuses">
            <div class="order-info__graph">
              <div class="circle"></div>
              <div class="line"></div>
            </div>
            <div class="order-info__text">
              <div class="">Order confirmed</div>
              <p>12:50am, Sep 11, 2019</p>
              <p>Your order has been confirmed.</p>
            </div>
          </div>
          <div class="order-info__statuses">
            <div class="order-info__graph">
              <div class="circle"></div>
              <div class="line"></div>
            </div>
            <div class="order-info__text">
              <div class="">Order Placed</div>
              <p>10:10am, Sep 10, 2019</p>
              <p>We have received your order.</p>
            </div>
          </div>
          <div class="order-info__statuses">
            <div class="order-info__graph">
              <div class="circle"></div>
              <div class="line"></div>
            </div>
            <div class="order-info__text">
              <div class="">On the way</div>
              <p>9:45am, Sep 12, 2019</p>
              <p>A driver has picked up your order.</p>
            </div>
          </div>
          <div class="order-info__statuses">
            <div class="order-info__graph">
              <div class="circle"></div>
            </div>
            <div class="order-info__text">
              <div class="">Delivered</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="order-info__status text-right">
            {{ info.status }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
// progress bar
.order-info__statuses {
  display: flex;
}

// progress bar
.order-info__statuses {
  display: flex;
}
.order-info__graph {
  position: relative;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .circle {
    margin-bottom: 6px;
    border-radius: 100%;
    border: 2px solid #dfdfdf;
    width: 19px;
    height: 19px;
  }
  .line {
    border-radius: 5px;
    width: 2px;
    height: 74px;
    background: #dfdfdf;
    margin: 0 auto;
    margin-bottom: 6px;
  }
  .line:after {
    content: "";
    position: absolute;
    top: 25px;
    left: 47%;
    width: 2px;
    height: 0;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
}

.order-info__graph:hover {
  .line:after {
    height: 74px;
    margin-bottom: 6px;
    background: #06b68c;
  }
  .circle {
    border-radius: 100%;
    border: 2px solid #06b68c;
    width: 19px;
    height: 19px;
    background: #06b68c;
  }
}
</style>

<script lang="js">
export default {
  props: ["info"],
};
</script>
