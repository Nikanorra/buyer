<template>
  <div class="map">
    <GmapMap v-bind="options" id="map">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
        :icon="{
          url: require('../../../assets/img/landing/tracking/marker-pickUp.svg'),
        }" />
    </GmapMap>
  </div>
</template>

<script>
import Vue from "vue";
import { gmapApi } from "vue2-google-maps";

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDf43lPdwlF98RCBsJOFNKOkoEjkwxb5Sc",
    libraries: "places",
    // region: 'en',
    // language: 'en',
    installComponents: true,
  },
});

export default {
  name: "GoogleMap",
  data() {
    return {
      markers: [
        {
          position: { lat: 46.674606462384475, lng: 32.640337886468146 }, //epicentr
        },
        {
          position: { lat: 46.672884033539084, lng: 32.643948818736575 }, //fabrika
        },
      ],
      options: {
        zoom: 15,
        center: {
          // linetrue
          lat: 46.672402074869396,
          lng: 32.64001686107262,
          icon: "../../../assets/img/landing/tracking/marker-driver.svg",
        },
        mapTypeId: "roadmap",

        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false,
      },
    };
  },
  computed: {
    google: gmapApi,
  },
};
</script>

<style scoped>
#map {
  height: 330px;
  width: 100%;
  margin: 0 auto;
}
</style>
