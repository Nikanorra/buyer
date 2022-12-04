<template>
  <div class="v-contact-form">
    <form
      action="mailto:olga.nikanorova@gmail.com"
      novalidate="true"
      class="unhar_form"
      method="post"
      ENCTYPE="text/plain">
      <input
        placeholder="Name"
        type="text"
        class="form-control"
        NAME="name"
        value="" />
      <input
        placeholder="Email"
        type="email"
        class="form-control"
        NAME="email"
        value="" />
      <textarea
        placeholder="Message"
        class="form-control"
        NAME="Message"
        value="">
      </textarea>
      <button type="submit" class="btn-orange">Send</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
form.unhar_form input {
  border-top: none;
  box-shadow: none;
  border-radius: 0;
  border-left: none;
  border-right: none;
  padding: 0 10px 10px;
  margin-bottom: 73px;
  color: #fea350;
  transition: 0.3s;
  border-bottom: 1px solid #d8d8d8;
  &:hover,
  &:focus {
    border-bottom: 1px solid #fea350;
  }
}
form.unhar_form textarea {
  color: #fea350;
  transition: 0.3s;
  height: 100px;
  padding: 10px 10px;
  margin-bottom: 50px;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  &:hover,
  &:focus {
    border: 1px solid #fea350;
    color: #fea350;
  }
}
.form-control {
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 17px;
  background-image: none;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
}

//radio btn
label {
  position: relative;
  cursor: pointer;
  color: #797979;
}
form.unhar_form input.radio_ibs {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  margin-bottom: 43px;
}
form.unhar_form .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  transition: 0.4s;
  background-color: transparent;
  border: 2px solid #fea350;
  box-shadow: inset 0px 0px 0px 3px #fff;
}
form.unhar_form label.radio-inline:hover span.checkmark,
form.unhar_form input.radio_ibs:checked ~ .checkmark {
  background: #fea350;
}
//text
form.unhar_form label.radio-inline {
  padding-left: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
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
  margin-bottom: 42px;
}
.btn-orange {
  background: #ff9b30;
  color: #fff;
  grid-column-start: 2;
  grid-column-end: 3;
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
