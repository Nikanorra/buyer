<template>
  <div class="contact">
    <div class="content">
      <section class="drop_line">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="drop_form">
                <h2 class="heading_primary">Drop us a line!</h2>

                <v-contact-form></v-contact-form>

                <div class="privacy_drop">
                  <p>
                    This site is protected by reCAPTCHA and the Google
                    <router-link to="/Privacy" target="_blank"
                      ><a>Privacy Policy</a></router-link
                    >
                    and
                    <router-link to="/Terms" target="_blank"
                      ><a>Terms of Service</a></router-link
                    >
                    apply.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-offset-1 col-md-5">
              <div class="empty_space emedium"></div>
              <img
                src="~@/assets/img/footer/contacts/drop_left.svg"
                class="img-responsive d-flex" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* DROP US A LINE PAGE */
h2.heading_primary {
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #2e2e2e;
  position: relative;
  text-align: center;
  display: block;
  margin: 20px auto;
  margin-bottom: 100px;
  letter-spacing: 0.02em;
}
section.drop_line h2,
section.drop_line h2:after {
  text-align: left;
  margin-left: 0;
}
h2.heading_primary:after {
  position: absolute;
  content: "";
  width: 40px;
  height: 40px;
  width: 27px;
  height: 27px;
  background: #ff9b30;
  border-radius: 100%;
  margin-left: -16px;
  margin-top: 6px;
}

//captcha
.privacy_drop {
  margin-bottom: 50px;
  p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    color: #797979;
  }
  a {
    color: #ff9b30;
  }
}
</style>

<script>
import VContactForm from "../../components/contact/v-contact-form";
export default {
  components: { VContactForm },
};
</script>
