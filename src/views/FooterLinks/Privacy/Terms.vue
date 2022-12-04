<template>
  <div class="terms">
    <div class="top-head-sec"></div>
    <section class="ibs_selling_detail ibs_started">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="heading_primary">
              <span>Terms and Condition</span>
            </h2>
            <p class="heading_date">Updated 17 July 2020</p>
          </div>
        </div>
        <div class="row privacy_policy">
          <div class="col-md-12">
            <div class="ibs_agreement_block">
              <h3>1. Agreement</h3>
              <p>
                By registering an account or sending or receiving a parcel with
                Sendle, you agree to be bound by these Terms and Conditions.
                Sendle may amend these terms and conditions from time to time,
                so we encourage you to review this page as continued use of the
                Site will indicate your acceptance of them. These Terms and
                Conditions should be read together with our Website User
                Agreement and Privacy Policy.
              </p>
            </div>
            <div class="ibs_agreement_block">
              <h3>2. Requirements of Use</h3>
              <p>
                You must be at least eighteen (18) years of age to use our
                Services; and by doing so you warrant and represent to us that
                you are at least eighteen (18) years old.
              </p>
              <p>
                To access our services, you may wish to open an account with us.
                You are responsible for maintaining confidentiality of your
                account, username and password information. Sendle is not
                responsible for any unauthorised transactions made through your
                account.
              </p>
              <p>
                If you are accessing and using an account on behalf of someone
                else, you represent that you have the authority to bind that
                person as principal to these Terms and Conditions.
              </p>
              <p>
                By opening a Sendle account you represent and warrant that the
                information provided is true and correct. You agree to indemnify
                Sendle for any loss, damage or claim that is made against or
                suffered by Sendle arising from a breach of this term.
              </p>
              <p>
                You warrant that you hold the copyright to any images uploaded
                to the Site or that you have the authority of the copyright
                owner to upload any images to the Site.
              </p>
              <p>Sendle retains the right to close an account anytime.</p>
            </div>
            <div class="ibs_agreement_block">
              <h3>3. Our Services</h3>
              <p>
                Sendle facilitates the booking and delivery of parcels. Sendle
                provides its services in accordance with the Australian Consumer
                Law. Sendle is not a common carrier, and we do not accept any
                liability as a common carrier. Sendle may refuse to provide
                services at its discretion.
              </p>
              <p>
                Sendle uses a range of third-party providers, including DHL. DHL
                requires that Sendle informs our customers that they are bound
                by DHL’s shipping terms and that commodities listed with respect
                to unacceptable under these terms are not to be tendered for
                shipment. You can view those terms here. We have replicated the
                key terms in this document, and confirm that your agreement is
                with Sendle.
              </p>
            </div>
            <div class="ibs_agreement_block">
              <h3>4. Parcel Requirements</h3>
              <p>
                Sendle will only arrange delivery of parcels that respect the
                size and weight limits of the Sendle products. We reserve the
                right to refuse to take goods for delivery that exceed our size
                and weight limits.
              </p>
              <p>
                Sendle will not accept possession of or deliver the following:
              </p>
              <p>- Hazardous, dangerous, prohibited or illegal goods,</p>
              <p>- Arms / weapons,</p>
              <p>- Living goods and perishables</p>
              <p>
                - Irreplaceable items or items with a value exceeding $1500.00,
              </p>
              <p>- Irreplaceable legal documents or money.</p>
              <p>- Dangerous Goods</p>
              <p>- Munitions of war</p>
              <p>
                Sendle has the right to open and inspect parcels at any time,
                without notice to the sender or recipient, to determine the
                nature, condition, ownership or destination of the contents.
              </p>
              <p>
                Sendle also has the right to do anything deemed appropriate in
                its sole discretion, if we think a parcel contains goods that
                are listed in 4.2 above, or contains goods that have not been
                properly described, declared or that may become dangerous. This
                includes the right to destroy or dispose of the goods or contact
                any relevant authorities to do so. In this case, Sendle has the
                right to charge the sender of the goods for any disposal costs.
              </p>
              <p>
                Sendle is not liable for the non-delivery of goods under this
                Clause.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.top-head-sec {
  background: url("~@/assets/img/privacy/privacy-bg.svg") top center no-repeat;
  min-height: 300px;
}
section {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;

  color: #797979;
}
.ibs_selling_detail {
  &.ibs_started {
    margin-top: -140px;
    .container {
      background: #fff;
      border-radius: 10px;
      padding: 2% 5%;
      box-shadow: 0px 12px 60px rgb(0 0 0 / 8%);
    }
    h2.heading_primary {
      font-weight: bold;
      font-size: 40px;
      line-height: 48px;
      color: #2e2e2e;
      position: relative;
      text-align: center;
      display: block;
      margin: 20px auto;
      letter-spacing: 0.02em;
      span {
        font-weight: bold;
        font-size: 40px;
        line-height: 48px;
        color: #2e2e2e;
        position: relative;
        text-align: center;
        margin: 20px auto;
        letter-spacing: 0.02em;
        z-index: 111;
      }
      &:after {
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
    }
  }
  .heading_date {
    text-align: center;
  }
  h3 {
    position: relative;
    padding-left: 20px;
    font-weight: bold;
    font-size: 26px;
    color: #2e2e2e;
    margin-bottom: 20px;
    &:before {
      position: absolute;
      content: "";
      left: 0;
      top: 10px;
      width: 11px;
      height: 11px;
      background: #ff9b30;
      border-radius: 100%;
    }
    a {
      color: #ff9b30;
    }
  }
}
.ibs_agreement_block {
  margin-top: 10px;
  margin-bottom: 50px;
  display: inline-block;
  width: 100%;
  span {
    font-weight: bold;
    color: #2e2e2e;
  }
  a {
    color: #ff9b30;
  }
}
</style>
