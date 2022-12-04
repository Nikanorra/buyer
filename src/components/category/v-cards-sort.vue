<template>
  <div class="v-cards-sort">
    <div class="products__sort">
      <div class="products__selection">
        <div class="">Sort by</div>
        <div class="custom-select-wrapper">
          <div class="custom-select">
            <div class="custom-select__trigger">
              <span>Best match</span>
              <div class="arrow"></div>
            </div>
            <div class="custom-options">
              <span class="custom-option selected" data-value="tesla"
                >Best match</span
              >
              <span class="custom-option" data-value="volvo">New</span>
              <span class="custom-option" data-value="mercedes">Sale</span>
            </div>
          </div>
        </div>
      </div>

      <div class="products__result">Over <span>30,000</span> results</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products__sort {
  display: flex;
  align-items: center;
  justify-content: space-between;
  //width: 40%;
}
.products__selection {
  display: flex;
  align-items: center;
  justify-content: space-between;
  //width: 45%;
  div {
    margin-right: 20px;
  }
}
// select
.custom-select-wrapper {
  position: relative;
  user-select: none;
  // width: 100%;
}
.custom-select {
  position: relative;
  display: flex;
  flex-direction: column;
}
.custom-select__trigger {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 8px;
  min-width: 160px;
  padding: 14px;
  border: 1px solid #dfdfdf;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  color: #2e2e2e;
}
.custom-options {
  position: absolute;
  display: block;
  top: 100%;
  left: 0;
  right: 0;
  // margin-top: 10px;
  border-radius: 8px;
  border: 1px solid #dfdfdf;
  border-top: 0;
  background: #fff;
  transition: all 0.5s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 2;
}
.custom-select.open .custom-options {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}
.custom-option {
  position: relative;
  display: block;
  padding: 14px;
  // line-height: 45px;
  cursor: pointer;
  transition: all 0.5s;
}
.custom-option:hover {
  cursor: pointer;
  background-color: #b2b2b2;
}
.custom-option.selected {
  color: #2e2e2e;
  background-color: #dfdfdf;
}

.arrow {
  position: relative;
  height: 15px;
  width: 15px;
}
.arrow::before,
.arrow::after {
  content: "";
  position: absolute;
  bottom: 0px;
  width: 0.15rem;
  height: 100%;
  transition: all 0.5s;
}
.arrow::before {
  left: -5px;
  transform: rotate(45deg);
  background-color: #dfdfdf;
}
.arrow::after {
  left: 5px;
  transform: rotate(-45deg);
  background-color: #dfdfdf;
}
.open .arrow::before {
  left: -5px;
  transform: rotate(-45deg);
}
.open .arrow::after {
  left: 5px;
  transform: rotate(45deg);
}

.products__result {
  font-size: 16px;
  font-style: normal;
  line-height: 19px;
  span {
    font-weight: 600;
    color: #2e2e2e;
  }
}

@media screen and (max-width: 990px) {
  .products__selection {
    display: none;
  }
  .products__result {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    color: #979797;
  }
}
</style>
