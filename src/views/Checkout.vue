<template>
  <div class="checkout">
    <v-loader v-if="loader"></v-loader>
    <v-header :cart="cart.itemQuantity"></v-header>
    <div class="container">
      <div class="col-lg-8">
        <h2>Checkout</h2>

        <div class="checkout__progressbar">
          <div class="circle-big currentStep">
            <div class="circe"></div>
          </div>

          <div class="line" :class="{ middleStep: step >= 2 }"></div>

          <div class="circle-big" :class="{ middleStep: step >= 2 }">
            <div class="circe"></div>
          </div>

          <div class="line" :class="{ currentStep: step === 3 }"></div>

          <div class="circle-big" :class="{ currentStep: step === 3 }">
            <div class="circe"></div>
          </div>
        </div>

        <div class="checkout__text">
          <div class="">Shipping</div>

          <div class="">Payment</div>

          <div class="circle-big">Confirmation</div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <form action="">
            <section v-if="step === 1">
              <div class="checkout__info" v-if="localStorage">
                <h4>Personal Information</h4>
                <p class="title">
                  {{ profile.firstName }} {{ profile.lastName }}
                </p>
                <p>{{ profile.emailAddress }}</p>
                <p>{{ profile.phoneNumber }}</p>
              </div>
              <div class="checkout__info guest" v-else>
                <h4>Personal Information for Guests</h4>
                <p class="title">
                  <span v-if="v$.guestFirstName.$error" class="invalid">{{
                    v$.guestFirstName.$errors[0].$message
                  }}</span>
                  <span>First name</span>
                  <input
                    type="text"
                    placeholder="First Name"
                    v-model="guestFirstName" />
                </p>
                <p class="title">
                  <span v-if="v$.guestLastName.$error" class="invalid">{{
                    v$.guestLastName.$errors[0].$message
                  }}</span>
                  <span>Last name</span>
                  <input
                    type="text"
                    placeholder="Last Name"
                    v-model="guestLastName" />
                </p>
                <p class="title">
                  <span v-if="v$.guestEmail.$error" class="invalid">{{
                    v$.guestEmail.$errors[0].$message
                  }}</span>
                  <span>Email</span>
                  <input type="text" placeholder="Email" v-model="guestEmail" />
                </p>
                <p class="title">
                  <span v-if="v$.guestPhone.$error" class="invalid">{{
                    v$.guestPhone.$errors[0].$message
                  }}</span>
                  <span>Phone number</span>
                  <span class="checkout__guestPhone">+1</span>
                  <input
                    type="text"
                    placeholder="Mobile"
                    v-model="guestPhone" />
                </p>
              </div>

              <div class="checkout__info">
                <h4>Address</h4>
                <span v-if="v$.selectStreet.$error" class="invalid">{{
                  v$.selectStreet.$errors[0].$message
                }}</span>
                <v-autocomplete-with-addresses
                  v-if="locations !== undefined && localStorage"
                  :locations="locations"
                  :selectStreet="selectStreet"
                  @selectMethod="
                    locationSelect
                  "></v-autocomplete-with-addresses>
                <v-autocomplete-without-addresses
                  v-else
                  :addresses="addresses"
                  :selectStreet="selectStreet"
                  @selectMethod="addressesSelect">
                  {{ selectStreet }}
                </v-autocomplete-without-addresses>
              </div>

              <div class="checkout__info">
                <h4>Select delivery method</h4>
                <div class="checkout__type">
                  <label class="checkout__check">
                    <input
                      type="radio"
                      name="type-delivery"
                      checked="checked"
                      value="Rider"
                      v-model="deliveryType" />
                    <p>
                      <span>
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M27.9792 23.086C27.1729 23.086 26.4068 23.3949 25.829 23.9534C25.2511 24.5185 24.9285 25.2545 24.9285 26.043C24.9285 26.8315 25.2443 27.5675 25.829 28.1326C26.4136 28.6912 27.1729 29 27.9792 29C29.6323 29 30.9762 27.6726 30.9762 26.043C30.9762 24.4134 29.6323 23.086 27.9792 23.086ZM27.9792 27.6858C27.0519 27.6858 26.2724 26.9367 26.2724 26.043C26.2724 25.1493 27.0519 24.4002 27.9792 24.4002C28.8931 24.4002 29.6323 25.1362 29.6323 26.043C29.6323 26.9498 28.8931 27.6858 27.9792 27.6858ZM28.7587 13.236C28.6378 13.1243 28.4765 13.0651 28.3085 13.0651H24.8613C24.4918 13.0651 24.1894 13.3608 24.1894 13.7222V19.1105C24.1894 19.4719 24.4918 19.7676 24.8613 19.7676H30.3311C30.7007 19.7676 31.0031 19.4719 31.0031 19.1105V15.503C31.0031 15.319 30.9224 15.1416 30.7813 15.0167L28.7587 13.236ZM29.6591 18.4534H25.5333V14.3728H28.0464L29.6591 15.7921V18.4534ZM11.5699 23.086C10.7636 23.086 9.99756 23.3949 9.41967 23.9534C8.84178 24.5185 8.51924 25.2545 8.51924 26.043C8.51924 26.8315 8.83506 27.5675 9.41967 28.1326C10.0043 28.6912 10.7636 29 11.5699 29C13.223 29 14.5669 27.6726 14.5669 26.043C14.5669 24.4134 13.223 23.086 11.5699 23.086ZM11.5699 27.6858C10.6426 27.6858 9.86316 26.9367 9.86316 26.043C9.86316 25.1493 10.6426 24.4002 11.5699 24.4002C12.4838 24.4002 13.223 25.1362 13.223 26.043C13.223 26.9498 12.4838 27.6858 11.5699 27.6858ZM7.08797 23.8943H5.73732V22.1464C5.73732 21.7849 5.43494 21.4892 5.06536 21.4892C4.69579 21.4892 4.3934 21.7849 4.3934 22.1464V24.5514C4.3934 24.9128 4.69579 25.2085 5.06536 25.2085H7.08797C7.45754 25.2085 7.75993 24.9128 7.75993 24.5514C7.75993 24.19 7.45754 23.8943 7.08797 23.8943ZM10.4948 20.313C10.4948 19.9516 10.1924 19.6559 9.82285 19.6559H1.67196C1.30238 19.6559 1 19.9516 1 20.313C1 20.6744 1.30238 20.9701 1.67196 20.9701H9.82285C10.1924 20.9701 10.4948 20.681 10.4948 20.313ZM3.03604 17.9409L11.1869 17.9869C11.5565 17.9869 11.8589 17.6977 11.8656 17.3363C11.8723 16.9683 11.5699 16.6726 11.2004 16.6726L3.04948 16.6266C3.04276 16.6266 3.04276 16.6266 3.04276 16.6266C2.67318 16.6266 2.3708 16.9158 2.3708 17.2772C2.36408 17.6452 2.66646 17.9409 3.03604 17.9409ZM4.40684 14.9576H12.5577C12.9273 14.9576 13.2297 14.6619 13.2297 14.3005C13.2297 13.9391 12.9273 13.6434 12.5577 13.6434H4.40684C4.03726 13.6434 3.73488 13.9391 3.73488 14.3005C3.73488 14.6619 4.03726 14.9576 4.40684 14.9576ZM33.7514 14.0705L28.9401 10.1738C28.8192 10.0753 28.6713 10.0227 28.5101 10.0227H22.8522V7.65711C22.8522 7.2957 22.5498 7 22.1802 7H5.06536C4.69579 7 4.3934 7.2957 4.3934 7.65711V12.4671C4.3934 12.8286 4.69579 13.1243 5.06536 13.1243C5.43494 13.1243 5.73732 12.8286 5.73732 12.4671V8.31422H21.515V23.8943H16.0049C15.6353 23.8943 15.3329 24.19 15.3329 24.5514C15.3329 24.9128 15.6353 25.2085 16.0049 25.2085H24.2095C24.5791 25.2085 24.8815 24.9128 24.8815 24.5514C24.8815 24.19 24.5791 23.8943 24.2095 23.8943H22.8589V11.3369H28.2749L32.6561 14.8853L32.609 23.8811H31.9102C31.5406 23.8811 31.2382 24.1768 31.2382 24.5382C31.2382 24.8996 31.5406 25.1953 31.9102 25.1953H33.2743C33.6439 25.1953 33.9462 24.9062 33.9462 24.5448L34 14.583C33.9933 14.3859 33.9059 14.1953 33.7514 14.0705Z"
                            fill="#2E2E2E" />
                        </svg>
                      </span>
                      <span>Delivery by driver</span>
                    </p>
                  </label>

                  <label class="checkout__check">
                    <input
                      type="radio"
                      name="type-delivery"
                      value="Mail"
                      v-model="deliveryType" />
                    <p>
                      <span>
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M25.2216 21.0738C25.1378 20.8382 24.8858 20.7178 24.6587 20.8047L20.1009 22.5491C19.8738 22.6361 19.7577 22.8975 19.8415 23.133C19.9068 23.3167 20.0744 23.4304 20.2527 23.4304C20.303 23.4304 20.3543 23.4213 20.4044 23.4021L24.9621 21.6577C25.1892 21.5708 25.3054 21.3094 25.2216 21.0738Z"
                            fill="#2E2E2E" />
                          <path
                            d="M19.4086 23.2979C19.3248 23.0623 19.0728 22.9419 18.8457 23.0288L18.6527 23.1026C18.4256 23.1895 18.3094 23.451 18.3932 23.6865C18.4585 23.8701 18.6261 23.9839 18.8044 23.9839C18.8548 23.9839 18.906 23.9748 18.9561 23.9556L19.1491 23.8818C19.3762 23.7949 19.4923 23.5335 19.4086 23.2979Z"
                            fill="#2E2E2E" />
                          <path
                            d="M25.22 19.2214C25.1362 18.9859 24.8842 18.8655 24.6571 18.9523L21.0553 20.3309C20.8282 20.4178 20.712 20.6792 20.7958 20.9147C20.8612 21.0984 21.0287 21.2121 21.207 21.2121C21.2574 21.2121 21.3087 21.203 21.3587 21.1839L24.9606 19.8053C25.1877 19.7184 25.3038 19.457 25.22 19.2214Z"
                            fill="#2E2E2E" />
                          <path
                            d="M25.22 17.3883C25.1362 17.1527 24.8842 17.0323 24.6571 17.1191L21.0553 18.4977C20.8282 18.5846 20.712 18.846 20.7958 19.0816C20.8612 19.2652 21.0287 19.3789 21.207 19.3789C21.2574 19.3789 21.3087 19.3698 21.3587 19.3507L24.9606 17.9721C25.1877 17.8852 25.3038 17.6238 25.22 17.3883Z"
                            fill="#2E2E2E" />
                          <path
                            d="M26.7135 9.07048L16.1517 5.02808C16.0538 4.99064 15.9462 4.99064 15.8483 5.02808L5.28656 9.07048C5.25197 9.08376 5.21863 9.10168 5.18769 9.12401C5.07008 9.20905 5 9.34833 5 9.49698V22.503C5 22.6934 5.11434 22.8636 5.28652 22.9295L15.8483 26.9719C15.8975 26.9908 15.9489 27 16 27C16.0516 27 16.1029 26.9903 16.1516 26.9717L26.7135 22.9295C26.8857 22.8636 27 22.6934 27 22.503V9.49698C27 9.30657 26.8857 9.1364 26.7135 9.07048ZM15.5618 25.8932L5.87648 22.1862V10.1493L7.84857 10.9041V16.4121C7.84857 16.6025 7.96291 16.7727 8.13509 16.8386L12.8681 18.6502C12.9174 18.669 12.9687 18.6783 13.0198 18.6783C13.1082 18.6783 13.1959 18.6505 13.2705 18.5966C13.388 18.5116 13.4581 18.3723 13.4581 18.2237V13.0511L15.5617 13.8562L15.5618 25.8932ZM12.5817 12.7156V17.5713L8.72509 16.0952V11.2395L12.5817 12.7156ZM9.55284 10.5836L13.0199 9.25661L16.487 10.5836L13.0199 11.9106L9.55284 10.5836ZM16 13.0548L14.2812 12.397L17.9047 11.0101C18.0769 10.9441 18.1912 10.774 18.1912 10.5836C18.1912 10.3932 18.0769 10.223 17.9047 10.1571L13.1716 8.34553C13.0737 8.30809 12.9661 8.30809 12.8682 8.34553L8.28208 10.1009L6.70427 9.49698L16 5.93915L25.2957 9.49702L16 13.0548ZM26.1235 22.1862L16.4383 25.8931V13.8562L26.1235 10.1493V22.1862Z"
                            fill="#2E2E2E" /></svg></span
                      ><span>Mail delivery</span>
                    </p>
                  </label>

                  <label class="checkout__check"
                    ><input
                      type="radio"
                      name="type-delivery"
                      value="FromStore"
                      v-model="deliveryType" />
                    <p>
                      <span
                        ><svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.125 23.3047C9.36219 23.3047 9.55469 23.4972 9.55469 23.7344C9.55469 23.9716 9.36219 24.1641 9.125 24.1641C8.88781 24.1641 8.69531 23.9716 8.69531 23.7344C8.69531 23.4972 8.88781 23.3047 9.125 23.3047Z"
                            fill="#2E2E2E" />
                          <path
                            d="M7.83594 7.03809V6.28906C7.83594 5.57827 8.41421 5 9.125 5H22.875C23.5858 5 24.1641 5.57827 24.1641 6.28906V7.03809C26.9668 12.2143 26.9999 12.0606 27 12.3042C27 12.304 27 12.3044 27 12.3042V13.1641C27 13.9088 26.5694 14.6015 25.8828 14.9954V26.5703C25.8828 26.8076 25.6904 27 25.4531 27H6.54688C6.3096 27 6.11719 26.8076 6.11719 26.5703V14.9954C5.43755 14.6018 5 13.901 5 13.1641V12.3047C5 12.3049 5 12.3045 5 12.3047C5.00013 12.0584 5.06054 12.1638 7.83594 7.03809ZM6.15637 11.875H8.81528L10.2476 7.57812H8.51966L6.15637 11.875ZM12.1328 12.7344H9.55469V13.1641C9.55469 13.8749 10.133 14.4531 10.8438 14.4531C11.5545 14.4531 12.1328 13.8749 12.1328 13.1641V12.7344ZM12.1985 11.875L12.9146 7.57812H11.1535L9.72119 11.875H12.1985ZM23.3047 6.28906C23.3047 6.05213 23.1119 5.85938 22.875 5.85938H9.125C8.88807 5.85938 8.69531 6.05213 8.69531 6.28906V6.71875C9.10446 6.71875 22.8924 6.71875 23.3047 6.71875V6.28906ZM12.9922 12.7344V13.1641C12.9922 13.8749 13.5705 14.4531 14.2812 14.4531C14.992 14.4531 15.5703 13.8749 15.5703 13.1641V12.7344H12.9922ZM15.5703 11.875V7.57812H13.7859L13.0697 11.875H15.5703ZM18.9303 11.875L18.2141 7.57812H16.4297V11.875H18.9303ZM16.4297 12.7344V13.1641C16.4297 13.8749 17.008 14.4531 17.7188 14.4531C18.4295 14.4531 19.0078 13.8749 19.0078 13.1641V12.7344H16.4297ZM22.2789 11.875L20.8466 7.57812H19.0854L19.8015 11.875H22.2789ZM19.8672 12.7344V13.1641C19.8672 13.8749 20.4455 14.4531 21.1562 14.4531C21.867 14.4531 22.4453 13.8749 22.4453 13.1641V12.7344H19.8672ZM23.4803 7.57812H21.7524L23.1847 11.875H25.8436L23.4803 7.57812ZM26.1406 13.1641V12.7344H23.3047V13.1641C23.3047 13.8387 23.9805 14.4531 24.7227 14.4531C24.9097 14.4531 25.1036 14.4125 25.2841 14.3353C25.7964 14.1174 26.1406 13.6467 26.1406 13.1641ZM18.1484 26.1406H22.4453V22.4453H18.1484V26.1406ZM18.1484 21.5859H22.4453V17.8906H18.1484V21.5859ZM6.97656 26.1406H17.2891V17.4609C17.2891 17.2237 17.4815 17.0312 17.7188 17.0312H22.875C23.1123 17.0312 23.3047 17.2237 23.3047 17.4609V26.1406H25.0234V15.2915C24.9238 15.305 24.8235 15.3125 24.7227 15.3125C24.1571 15.3125 23.5855 15.0885 23.1544 14.6978C23.059 14.6114 22.9732 14.519 22.8961 14.4222C22.5054 14.9611 21.8713 15.3125 21.1562 15.3125C20.4542 15.3125 19.8298 14.974 19.4375 14.4516C19.0452 14.974 18.4208 15.3125 17.7188 15.3125C17.0167 15.3125 16.3923 14.974 16 14.4516C15.6077 14.974 14.9833 15.3125 14.2812 15.3125C13.5792 15.3125 12.9548 14.974 12.5625 14.4516C12.1702 14.974 11.5458 15.3125 10.8438 15.3125C10.1287 15.3125 9.49462 14.9611 9.10386 14.4222C9.02682 14.519 8.94096 14.6114 8.84562 14.6978C8.41451 15.0885 7.84286 15.3125 7.27734 15.3125C7.17671 15.3125 7.07638 15.3053 6.97656 15.2917V26.1406ZM5.85938 13.1641C5.85938 13.6603 6.2164 14.1364 6.74771 14.3489C6.92148 14.4181 7.09963 14.4531 7.27734 14.4531C8.01946 14.4531 8.69531 13.8387 8.69531 13.1641V12.7344H5.85938V13.1641Z"
                            fill="#2E2E2E" />
                          <path
                            d="M8.26562 21.5859H8.69531V17.4609C8.69531 17.2237 8.88773 17.0312 9.125 17.0312H14.2812C14.5185 17.0312 14.7109 17.2237 14.7109 17.4609V21.5859H15.1406C15.3779 21.5859 15.5703 21.7784 15.5703 22.0156C15.5703 22.2529 15.3779 22.4453 15.1406 22.4453H8.26562C8.02835 22.4453 7.83594 22.2529 7.83594 22.0156C7.83594 21.7784 8.02835 21.5859 8.26562 21.5859ZM9.55469 21.5859H13.8516V17.8906H9.55469V21.5859Z"
                            fill="#2E2E2E" />
                          <path
                            d="M10.8438 23.3047H14.2812C14.5185 23.3047 14.7109 23.4971 14.7109 23.7344C14.7109 23.9716 14.5185 24.1641 14.2812 24.1641H10.8438C10.6065 24.1641 10.4141 23.9716 10.4141 23.7344C10.4141 23.4971 10.6065 23.3047 10.8438 23.3047Z"
                            fill="#2E2E2E" />
                        </svg>
                      </span>
                      <span>Pick up from store</span>
                    </p>
                  </label>
                </div>
              </div>
            </section>

            <section v-if="step === 2">
              <div class="col-lg-12">
                <h4 class="checkout__section" v-if="localStorage">
                  Payment method
                </h4>
              </div>
              <div class="payment__wrap col-md-12" v-if="payment">
                <div class="payment">
                  <div class="payment__header">
                    <div class="type">{{ payment.type }}</div>
                    <div class="number">**** {{ payment.last4 }}</div>
                  </div>
                  <div class="payment__footer">
                    <div class="text">
                      <p>Card Holder</p>
                      <span>{{ payment.firstName }}</span>
                      <span>{{ payment.lastName }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- for guest -->
              <div class="checkout__info" v-if="!localStorage">
                <h4>Personal Information</h4>
                <p class="title">{{ guestFirstName }} {{ guestLastName }}</p>
                <p>{{ guestEmail }}</p>
                <p>+1 {{ guestPhone }}</p>
              </div>

              <div class="checkout__info" v-if="!localStorage">
                <h4>Address</h4>
                <p class="title">{{ selectStreet }}</p>
              </div>

              <div class="checkout__info" v-if="!localStorage">
                <div class="">
                  <v-payment-method-guest
                    :orderGuest="orderGuest"
                    :guestFirstName="guestFirstName"
                    :guestLastName="guestLastName"
                    :guestEmail="guestEmail"
                    :guestPhone="guestPhone"
                    @goToPrev="goToPrev"></v-payment-method-guest>
                </div>
              </div>

              <v-payment-method
                v-else-if="localStorage && !payment"
                @paymentMethodCreated="paymentMethodCreated"
                @goBack="goToPrev"
                @Loader="Loader"></v-payment-method
                >
            </section>

            <section v-if="step === 3">
              <div class="checkout__info" v-if="localStorage">
                <h4>Personal Information</h4>
                <span v-if="serverNotification" class="invalid">{{
                  serverNotification
                }}</span>
                <p class="title">
                  {{ profile.firstName }} {{ profile.lastName }}
                </p>
                <p>{{ profile.emailAddress }}</p>
                <p>{{ profile.phoneNumber }}</p>
              </div>

              <div class="checkout__info" v-if="localStorage">
                <h4>Address</h4>
                <p class="title">{{ selectStreet }}</p>
              </div>
            </section>

            <div class="col-md-12">
              <div class="row">
                <div class="col-md-5" v-if="step > 1 && payment">
                  <button class="btn-light" @click.prevent="step--">
                    Back
                  </button>
                </div>

                <div class="col-md-5">
                  <button
                    class="btn-light"
                    :disabled="selectStreet === null"
                    @click.prevent="step++"
                    v-if="step === 1 && localStorage">
                    Next
                  </button>

                  <button
                    class="btn-orange"
                    @click.prevent="payOrder"
                    v-if="step === 1 && !localStorage">
                    Next
                  </button>

                  <button
                    class="btn-orange"
                    @click.prevent="step++"
                    v-if="step === 2 && payment">
                    Next
                  </button>

                  <button
                    class="btn-orange"
                    @click.prevent="addOrder"
                    v-if="step === 3">
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-4">
          <v-order-checkout
            :products="products"
            :cart="cart"></v-order-checkout>
        </div>
      </div>
    </div>

    <v-modal-cart
      v-if="successOrder"
      @closeModalFromChild="goToOrders"
      @deleteItemFromChild="goToHome"
      @closeModal="closeModal"
      :btnModalRight="btnModalRight"
      :btnModalLeft="btnModalLeft">
      <div class="modal__content">
        <img src="../assets/img/modals/modal-success.svg" />
        <div class="title">Congratulations! Your order has been placed</div>
        <div class="text">
          Your items are on the way and should arrive shortly
        </div>
      </div>
    </v-modal-cart>
  </div>
</template>

<style lang="scss" scoped>
::v-deep .v-payment-method {
  margin-bottom: 50px;
}
::v-deep .v-autocomplete {
  margin-top: 0;
}
h2 {
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 43px;
  color: #2e2e2e;
  margin-bottom: 60px;
}
.checkout__progressbar {
  display: flex;
  align-items: center;
  margin: 0 25px 16px 25px;
  .circle-big {
    min-width: 28px;
    min-height: 28px;
    border-radius: 100%;
    border: 3px solid #e3e3e3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    &.currentStep,
    &.middleStep,
    &:hover {
      border: 3px solid #ff9b30;
      .circe {
        background: #ff9b30;
      }
    }
  }

  .circe {
    min-width: 16px;
    min-height: 16px;
    border-radius: 100%;
    background: #e3e3e3;
    transition: 0.8s;
  }
  .line {
    width: 373px;
    height: 2px;
    background: #e3e3e3;
    &.currentStep,
    &.middleStep {
      background: #ff9b30;
    }
  }
}

.checkout__section {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 30px;
}
.checkout__text {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  margin-bottom: 60px;
  > div {
    width: 120px;
    &:nth-child(2) {
      text-align: center;
    }
  }
}

.checkout__info {
  padding: 30px 40px;
  border-radius: 8px;
  box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.09);
  margin-bottom: 24px;
  h4 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 30px;
  }
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    color: #979797;
    margin: 10px 0;
  }
  .title {
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    color: #2e2e2e;
    margin: 30px 0;
    display: flex;
    align-items: flex-start;
  }
  .checkout__guestPhone {
    font-weight: normal;
    font-size: 12px;
    width: 20px !important;
    line-height: 12px;
  }
}
.checkout__info.guest {
  span {
    width: 150px;
    display: inline-block;
  }
  input {
    border: none;
    border-bottom: 1px solid #eeeeee;
    width: 50%;
    padding-bottom: 5px;
    &::placeholder {
      color: #c6c6c6;
    }
    &:focus {
      border-bottom: 1px solid orange;
    }
  }
}
.checkout__type {
  display: flex;
  flex-wrap: wrap;
}
//btn - check type of delivery
.checkout__check {
  margin-right: 22px;
  input {
    display: none;
  }
  input:checked + p {
    background: #ff9b30;
    box-shadow: none;
    color: #fff;
    svg path {
      fill: #fff;
    }
  }
  p {
    height: 68px;
    width: 155px;
    border-radius: 15px;
    box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: #2e2e2e;
    transition: 0.5s;
    cursor: pointer;
    svg path {
      fill: #2e2e2e;
      transition: 0.5s;
    }
  }
}

//step 2
.btn-add {
  display: flex;
  align-items: center;
  margin-top: 63px;
  margin-bottom: 50px;
  svg {
    width: 32px;
    height: 32px;
    padding: 10px;
    margin-right: 20px;
    border-radius: 4px;
    background: #ff9b30;
  }
  span {
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    color: #ff9b30;
  }
}
//payment
.payment__wrap {
  display: grid;
  grid-template-columns: 0.4fr;
  grid-gap: 1.5rem;
}
.payment {
  border-radius: 15px;
  box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.05);
  padding: 20px;
}
.payment__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  color: #2e2e2e;
  margin-bottom: 35px;
  .type {
    max-width: 65px;
    overflow: hidden;
    font-size: 10px;
  }
  .number {
    display: flex;
    align-items: center;
  }
}
.payment__footer {
  display: flex;
  //justify-content: flex-end;
  align-items: flex-end;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  color: #979797;
  span {
    font-size: 16px;
    line-height: 19px;
    color: #2e2e2e;
  }
  button {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    color: #ff9b30;
    margin-left: 60px;
  }
}

//animation
.fadeX-enter-active,
.fadeX-leave-active {
  transition: all 0.5s ease-out;
}
.fadeX-enter,
.fadeX-leave-to {
  opacity: 0;
  transform: translateX(100vh);
}

//btn
//btn
.btn-orange,
.btn-light {
  width: 100%;
  height: 45px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  border-radius: 22px;
  margin-right: 24px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  //cursor: pointer;
  margin-top: 45px;
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

@media screen and (max-width: 730px) {
  .payment__wrap {
    grid-template-columns: none;
    width: 290px;
  }
}
@media screen and (max-width: 641px) {
  .checkout__type {
    flex-direction: column;
    align-items: center;
  }
}
@media screen and (max-width: 490px) {
  .checkout__text {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 40px;
    > div {
      width: 100px;
    }
  }
}

//modal
::v-deep .v-modal-cart {
  .footer {
    button {
      border: 1px solid #06b68c;
      &:first-child {
        color: #06b68c;
      }
      &:last-child {
        background: #06b68c;
        color: #fff;
      }
    }
  }
}
</style>

<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength, numeric } from "@vuelidate/validators";
import { FingerprintService } from "@/FingerprintService";
import vLoader from "@/components/v-loader.vue";
import VHeader from "@/layots/v-header.vue";
import VOrderCheckout from "../components/cart/v-order-checkout";
import VModalCart from "../components/modal/v-modal-cart";
import VAutocompleteWithAddresses from "../components/autocomplete/v-autocomplete-with-addresses";
import VAutocompleteWithoutAddresses from "../components/autocomplete/v-autocomplete-without-addresses";
import VPaymentMethod from "@/components/payment/v-payment-method.vue";
import VPaymentMethodGuest from "@/components/payment/v-payment-method-guest.vue";

export default {
  services: ["FingerprintService"],
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    vLoader,
    VHeader,
    VAutocompleteWithoutAddresses,
    VAutocompleteWithAddresses,
    VOrderCheckout,
    VModalCart,
    VPaymentMethod,
    VPaymentMethodGuest,
  },
  data() {
    return {
      products: [],
      cart: {},
      profile: {},
      address: [],
      locations: [],
      addresses: [],
      selectStreet: null,
      step: 1,
      totalSteps: 3,
      payment: "",
      successOrder: false,
      btnModalRight: "Go to My orders",
      btnModalLeft: "Continue shopping",
      visitorId: "",
      localStorage: localStorage.Token,
      guestFirstName: "",
      guestLastName: "",
      guestPhone: "",
      guestEmail: "",
      orderGuest: null,
      deliveryType: "Rider",
      serverNotification: "",
      loader: false,
    };
  },
  validations() {
    return {
      guestFirstName: { required, minLength: minLength(2) },
      guestLastName: { required, minLength: minLength(2) },
      guestPhone: { required, numeric, minLength: minLength(10), maxLength: maxLength(10) },
      guestEmail: { required, email },
      selectStreet: { required },
    };
  },
  async created() {
    this.loader = true;
    const newFPS = new FingerprintService();
    this.visitorId = await newFPS.getUserToken();

    const production = await axios.get(
      `${process.env.VUE_APP_HOST}/buyer/orders/shopping-cart?deviceid=${this.visitorId}`,
      {
        headers: {
          "AUTH-KEY": localStorage.Token,
        },
      }
    );
    this.products = production.data.products;
    this.cart = production.data;
    if (localStorage.Token) {
      try {
        const profile = await axios.get(
          process.env.VUE_APP_HOST + "/buyer/accounts/profile",
          {
            headers: {
              "AUTH-KEY": localStorage.Token,
            },
          }
        );
        this.profile = profile.data;
      } catch (e) {
        alert("error.e");
      }
    }

    if (localStorage.Token) {
      try {
        const res = await axios.get(
          process.env.VUE_APP_HOST + "/buyer/accounts/payment-method",
          {
            headers: {
              "AUTH-KEY": localStorage.Token,
            },
          }
        );
        const data = await res;
        this.payment = data.data;
      } catch (e) {
        alert("error.e");
      }

      const addresses = await axios(
        process.env.VUE_APP_HOST + "/buyer/accounts/address",
        {
          method: "GET",
          headers: {
            "AUTH-KEY": localStorage.Token,
          },
        }
      );
      this.locations = addresses.data.buyerAddresses;
    }
    this.loader = false;
  },
  methods: {
    async addOrder() {
      this.loader = true;
      try {
        const res = await axios(
          process.env.VUE_APP_HOST + "/buyer/orders/pay-order",
          {
            method: "POST",
            headers: {
              "AUTH-KEY": localStorage.Token,
            },
            data: {
              deviceId: this.visitorId,
              address: this.selectStreet,
              delivery: this.deliveryType,
            },
          }
        );
        // const data = res;
        if (res.status === 200 || res.status === 201) {
          this.successOrder = true;
          document.body.classList.toggle("active");
          document.documentElement.style.overflow = "hidden";
        } else {
          this.serverNotification = "Something wrong";
        }
      } catch (e) {
        const error = await e.response.data.error;
        this.serverNotification = error;
      }
      this.loader = false;
    },
    async payOrder() {
      this.loader = true;
      const result = await this.v$.$validate();
      if (!result) {
        return;
      } else {
        try {
          const res = await axios(
            process.env.VUE_APP_HOST + "/buyer/orders/pay-order",
            {
              method: "POST",
              data: {
                deviceId: this.visitorId,
                address: this.selectStreet,
                firstName: this.guestFirstName,
                lastName: this.guestLastName,
                email: this.guestEmail,
                phone: "+1"+this.guestPhone,
                delivery: this.deliveryType,
              },
            }
          );
          const data = res;
          this.orderGuest = data;
          if (res.status === 200 || res.status === 201) {
            this.step++;
          } else {
            this.serverNotification = "Something wrong";
          }
        } catch (e) {
          const error = await e.response.data.error;
          this.serverNotification = error;
        }
      }
      this.loader = false;
    },
    Loader(loaderInChildren) {
      this.loader = loaderInChildren;
    },
    goToOrders() {
      document.body.classList.remove("active");
      document.documentElement.style.overflow = "auto";
      this.$router.push("/Orders");
    },
    goToHome() {
      document.body.classList.remove("active");
      document.documentElement.style.overflow = "auto";
      this.$router.push("/");
    },
    closeModal() {
      document.body.classList.remove("active");
      document.documentElement.style.overflow = "auto";
      this.$router.push("/");
    },
    closeModalByGuest() {
      this.successOrderByGuest = false;
      document.body.classList.remove("active");
      document.documentElement.style.overflow = "auto";
      this.$router.push("/");
    },
    addCardFromOrder() {
      this.$router.push("/Settings");
    },
    locationSelect(location) {
      this.selectStreet = location.address;
    },
    addressesSelect(address) {
      this.selectStreet = address.address;
    },
    async paymentMethodCreated(fullName, cardNumber, email) {
      this.step++;
    },
    goToPrev() {
      this.step--;
    },
  },
};
</script>
