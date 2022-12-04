<template>
  <div class="change-password">
    <div class="container">
      <div class="change-password__wrap">
        <h1>Change your password</h1>
        <p>
          Create a new password. It must be different from previously used
          passwords.
        </p>

        <form>
          <input type="password" placeholder="Verification Code" />
          <input type="password" placeholder="Re-enter New Password" />
          <router-link to="/Success" class="btn-orange"
            >Save changes</router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.change-password .container {
  display: grid;
  grid-template-areas: "emptyLeft content emptyRight";
  grid-template-columns: 3fr 6fr 3fr;
  grid-template-rows: 1fr;
}
.change-password__wrap {
  grid-area: content;
  margin-bottom: 140px;
  h1 {
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 26px;
  }
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: 73px;
    padding-bottom: 10px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &::placeholder {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      color: #979797;
    }
    &:hover {
      border-bottom: 1px solid #ff9b30;
    }
  }
  a {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    color: #ff9b30;
    margin-bottom: 36px;
  }
  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: #8c8c8c;
    margin-bottom: 114px;
  }
  .verification__option {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    color: #797979;
    margin-bottom: 73px;
    button {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      color: #ff9b30;
    }
  }
}

//btn
.btn-orange {
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
  margin-top: 45px;
  margin-bottom: 73px;
  background: #ff9b30;
  grid-column-start: 2;
  grid-column-end: 3;
  color: #fff !important;
  transition: 0.3s;
  a {
    color: #fff;
  }
  &:hover {
    background: #e97a03;
    color: #fff;
  }
}
</style>
