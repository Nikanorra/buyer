<template>
  <div class="v-pagination">
    <section class="pagination">
      <div class="container">
        <p class="pagination__first" @click="changePage(currentPage - 1)">
          <svg
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.34814 -1.11627e-07C5.66434 -8.3984e-08 5.98075 0.113211 6.22798 0.340938C6.73899 0.812469 6.75937 1.59691 6.27366 2.093L3.41672 5.00867L6.27075 7.90414C6.75825 8.39849 6.74034 9.18293 6.23066 9.6562C5.72077 10.1295 4.91259 10.1119 4.42509 9.6173L0.729069 5.8683C0.257913 5.39024 0.257017 4.63731 0.726157 4.15774L4.42195 0.385265C4.67343 0.129508 5.01 -1.41188e-07 5.34814 -1.11627e-07Z"
              fill="#2E2E2E" />
          </svg>
        </p>
        <p
          v-for="p in totalPages"
          :key="p"
          @click="changePage(p)"
          :class="{ active: currentPage === p }">
          {{ p }}
        </p>
        <p class="pagination__last" @click="changePage(currentPage + 1)">
          <svg
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.65186 10C1.33566 10 1.01925 9.88679 0.772024 9.65906C0.261008 9.18753 0.24063 8.40309 0.726342 7.907L3.58328 4.99133L0.729253 2.09586C0.24175 1.60151 0.259665 0.817071 0.769337 0.3438C1.27923 -0.129471 2.08741 -0.11187 2.57491 0.382696L6.27093 4.1317C6.74209 4.60976 6.74298 5.36269 6.27384 5.84226L2.57805 9.61473C2.32657 9.87049 1.99 10 1.65186 10Z"
              fill="#2E2E2E" />
          </svg>
        </p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  margin-bottom: 80px;
}

.pagination .container {
  display: flex;
  justify-content: flex-end;
}

.pagination .container p {
  width: 34px;
  height: 34px;
  background: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  text-align: center;
  border-radius: 4px;
  padding: 8px 12px;
  margin: 0 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #ff9b30;
  }
}

.pagination .container p.active {
  background: #ff9b30;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  text-align: center;
}

.pagination .container .pagination__first {
  margin-right: 25px;
}

.pagination .container .pagination__last {
  margin-left: 25px;
}
</style>

<script>
export default {
  props: ["total", "quantity"],
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.quantity);
    },
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
      this.$emit("changeCurrentPage", pageNumber);
    },
  },
};
</script>
