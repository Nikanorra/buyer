<template>
  <div class="v-comment-form">
    <h4>ADD YOUR REVIEW</h4>
    <form @submit.prevent="addComment">
      <div class="fields">
        <textarea
          type="text"
          placeholder="Tell us about the product..."
          v-model="commentText"></textarea>
      </div>
      <button type="submit" class="btn-orange">Post</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.v-comment-form {
  color: #2e2e2e;
  h4 {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  .rate {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 17px;
    margin-bottom: 48px;
  }
  input,
  textarea {
    border: none;
    border-bottom: 1px solid #dbdbdb;
    height: 30px;
    &:hover {
      border-bottom: 1px solid #ff9b30;
      color: #2e2e2e;
    }
  }
  &::placeholder {
    color: #797979;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    transition: 0.3s;
  }
  .fields {
    input {
      width: 48%;
      margin-bottom: 59px;
      margin-right: 2%;
    }
    textarea {
      width: 98%;
      height: 140px;
      margin-bottom: 37px;
    }
  }

  .photo {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 17px;
    color: #ff9b30;
    display: flex;
    align-items: center;
    margin-bottom: 38px;
    cursor: pointer;
    padding: 10px;
    border-radius: 22px;
    &:hover {
      //color: rgba(80, 80, 80, 0.65);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    svg {
      margin-right: 15px;
    }
  }
}

//button
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
  margin-bottom: 30px;
  //cursor: pointer;
}
.btn-orange {
  background: #ff9b30;
  color: #fff;
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

<script>
import axios from "axios";

export default {
  props: ["textarea"],
  name: "v-comment-form",
  data() {
    return {
      commentText: "",
    };
  },
  methods: {
    async addComment() {
      try {
        const res = await axios(
          process.env.VUE_APP_HOST + "/buyer/store/review-product",
          {
            method: "POST",
            headers: {
              "AUTH-KEY": localStorage.Token,
            },
            data: {
              review: this.commentText,
              productId: this.$route.params.id,
            },
          }
        );
        const data = await res;
        if (res.status === 200 || res.status === 201) {
          this.$router.go(this.$router.currentRoute);
          // await this.$router.push("/Check-email");
        } else {
          this.errors = data;
          alert("errors");
        }
      } catch (error) {
        alert("ERROR");
      }
    },
  },
};
</script>
