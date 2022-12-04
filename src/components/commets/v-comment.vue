<template>
  <div class="v-comment">
    <div v-for="(review, id) in comment.reviews" :key="id" class="comment">
      <img class="ava" :src="review.avatar" alt="pics of product" />
      <div class="comment__content">
        <div class="name">{{ review.firstName }}</div>
        <div class="details">
          <div>{{ review.createdOn }}</div>
          <div v-for="(parameter, index) in product.parameters" :key="index">
            <p>{{ parameter.parameterName }}: {{ parameter.value }}</p>
          </div>
        </div>
        <div class="text">{{ review.review }}</div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comment {
  display: flex;
}
.ava {
  width: 100%;
  max-width: 90px;
  max-height: 90px;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 25px;
  border: 1px solid #f5f5f5;
}
.comment__content {
  color: #2e2e2e;
  width: 100%;
  .name {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    margin-bottom: 10px;
  }
  .details {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    color: #7a7a7a;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 50%;
    overflow: hidden;
    margin-bottom: 20px;
  }
  .text {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    margin-bottom: 20px;
  }
  .pics {
    margin-bottom: 30px;
    img {
      margin-right: 16px;
      width: 100%;
      max-width: 40px;
      max-height: 40px;
      border-radius: 4px;
      object-fit: cover;
      &.active {
        max-width: 312px;
        max-height: 423px;
        border-radius: 0px;
      }
    }
  }
}
</style>

<script lang="js">
export default {
  name: "v-comment",
  props: ["comment", "product", ],
  data() {
    return {
      zoom: false,
    };
  },
};
</script>
