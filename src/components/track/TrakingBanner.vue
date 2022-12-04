<template>
  <div class="banner-content text-center">
    <h1><b>Track your package</b></h1>
    <p>
      Enter your six-character alpha-numeric reference number to get an update
    </p>
    <span>Your Unhar reference number</span>
    <form>
      <input
        v-model="code"
        type="text"
        placeholder="ex. S3NDL3"
        name=""
        class="form-control" />
      <div class="unhar_headerbtn">
        <router-link :to="{ path: `/Track/${code}` }" class="btn_primary"
          >Track my package 1</router-link
        >
        <router-link
          :to="{ path: '/Track/', query: { code: code } }"
          class="btn_primary">
          Track my package by code 2
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: this.code,
    };
  },
};
</script>
