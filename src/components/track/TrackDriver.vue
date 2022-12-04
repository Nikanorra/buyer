<template>
  <div class="order-info order-info__driver">
    <div class="order-info__wrap">
      <div class="d-flex">
        <div class="order-info__ava">
          <img :src="info.riderPicture" alt="product" />
        </div>
        <div class="order-info__main">
          <div class="order-info__name">
            {{ info.riderFirstName }} {{ info.riderLastName }}
          </div>
          <div class="order-info__rate">
            <span class="mr-1">{{ info.riderRanking }}</span>
            <span>
              <svg
                width="81"
                height="15"
                viewBox="0 0 81 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.5 0L9.18385 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                  fill="#FFC400" />
                <path
                  d="M24 0L25.6839 5.18237H31.1329L26.7245 8.38525L28.4084 13.5676L24 10.3647L19.5916 13.5676L21.2755 8.38525L16.8671 5.18237H22.3161L24 0Z"
                  fill="#FFC400" />
                <path
                  d="M40.5 0L42.1839 5.18237H47.6329L43.2245 8.38525L44.9084 13.5676L40.5 10.3647L36.0916 13.5676L37.7755 8.38525L33.3671 5.18237H38.8161L40.5 0Z"
                  fill="#FFC400" />
                <path
                  d="M57 0L58.6839 5.18237H64.1329L59.7245 8.38525L61.4084 13.5676L57 10.3647L52.5916 13.5676L54.2755 8.38525L49.8671 5.18237H55.3161L57 0Z"
                  fill="#FFC400" />
                <path
                  d="M73.5 0L75.1839 5.18237H80.6329L76.2245 8.38525L77.9084 13.5676L73.5 10.3647L69.0916 13.5676L70.7755 8.38525L66.3671 5.18237H71.8161L73.5 0Z"
                  fill="#FFC400" />
              </svg>
            </span>
          </div>
          <p>{{ info.riderPhone }}</p>
          <p>{{ info.riderEmail }}</p>
        </div>
      </div>
      <div class="order-info__line"></div>
      <div class="order-info__footer">
        <div>Delivery Fee</div>
        <p>$ {{ info.riderFee }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  props: ["info"],
};
</script>
