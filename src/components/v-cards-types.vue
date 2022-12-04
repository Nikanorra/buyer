<template>
  <div class="products__cards products__types">
    <div class="card">
      <div class="">
        <img src="../assets/img/catalog/types/Sneakers.svg" alt="Sneakers" />
      </div>

      <div class="card__text">
        <h5>Sneakers</h5>
      </div>
    </div>

    <div class="card">
      <div class="">
        <img src="../assets/img/catalog/types/Boots.svg" alt="Boots " />
      </div>

      <div class="card__text">
        <h5>Sneakers</h5>
      </div>
    </div>

    <div class="card">
      <div class="">
        <img src="../assets/img/catalog/types/Sandals.svg" alt="Sandals" />
      </div>

      <div class="card__text">
        <h5>Sneakers</h5>
      </div>
    </div>

    <div class="card">
      <div class="">
        <img src="../assets/img/catalog/types/Slippers.svg" alt="Slippers" />
      </div>

      <div class="card__text">
        <h5>Sneakers</h5>
      </div>
    </div>

    <div class="card">
      <div class="">
        <img src="../assets/img/catalog/types/Loafers.svg" alt="Loafers" />
      </div>

      <div class="card__text">
        <h5>Sneakers</h5>
      </div>
    </div>

    <div class="card">
      <div class="">
        <img src="../assets/img/catalog/types/Heels.svg" alt="Heels" />
      </div>

      <div class="card__text">
        <h5>Sneakers</h5>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products__cards.products__types {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(204px, 1fr));
  grid-gap: 1rem;
  align-self: center;
  margin-bottom: 80px;
  .card {
    position: relative;
    border: 1px solid transparent;
    max-width: 204px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    img {
      width: 100%;
    }
    p {
      margin: 0 auto;
    }
  }
  .card__text {
    margin-top: 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    h5 {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px;
      text-align: left;
      margin-bottom: 10px;
    }
  }
}
</style>
