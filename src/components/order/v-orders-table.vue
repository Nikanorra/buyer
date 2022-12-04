<template>
  <div class="v-orders-table">
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Order Date</th>
            <th>ID Number</th>
            <th>Order Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index">
            <td data-label="">
              <div class="main-info">
                <img :src="order.pictureUrl" />
                <div class="">
                  <h3>{{ order.name }}</h3>
                  <div class="price">${{ order.price }}</div>
                  <div class="info">
                    <p>Quantity: x{{ order.quantity }}</p>
                    <p>Shop: {{ order.shop }}</p>
                  </div>
                </div>
              </div>
            </td>
            <td data-label="order Date">{{ order.createOn }}</td>
            <td data-label="id">#{{ order.id }}</td>
            <td data-label="status" class="status">
              {{ order.positionStatus }}
            </td>
            <td class="orders-table__btns">
              <router-link
                :to="`/Orders/Details/${order.productId}`"
                tag="button"
                class="btn-orange"
                >Track shipment</router-link
              >
              <router-link
                :to="`/Product/${order.segmentShop}/${order.segmentProduct}`"
                tag="button"
                class="btn-light"
                >Go to item</router-link
              >
            </td>
          </tr>
        </tbody>
        <slot></slot>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-wrap {
  background-color: #fff;
  color: #000;
  margin-bottom: 80px;
}

table {
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  box-shadow: 0px 2px 60px 0px rgba(0, 0, 0, 0.06);
  border-collapse: separate;
  border-spacing: 5px;
  border: 40px solid transparent;
  border-radius: 8px;

  tr {
    display: grid;
    grid-template-columns: 4fr 2fr 2fr 2fr 2fr;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 60px;
    padding-bottom: 50px;
  }
  thead tr {
    border-bottom: 1px solid transparent;
    padding: 0;
  }

  thead {
    tr th {
      background: transparent;
      color: #979797;
    }
  }
  th {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    text-align: left;
  }

  .order {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #2e2e2e;
  }
  .main-info {
    display: flex;
    img {
      width: 80px;
      height: 80px;
      border-radius: 100%;
      object-fit: cover;
      margin-right: 30px;
    }
    h3 {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      margin-bottom: 10px;
    }
    .parameters {
      display: flex;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px;
      color: #979797;
      margin-bottom: 19px;
    }
    .price {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      margin-bottom: 10px;
    }
    .info {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px;
      color: #979797;
    }
  }

  .status {
    font-weight: 700;
  }
}

table th,
table td {
  padding: 0;
  background: transparent;
}

//btn
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

@media screen and (max-width: 1000px) {
  table {
    border: 0;
    padding: 20px;
    .main-info {
      img {
        max-width: 80px;
        min-width: 80px;
        min-height: 80px;
        max-height: 80px;
      }
      > div {
        width: 100%;
      }
      .price {
        font-size: 15px;
      }
    }
  }
  table thead {
    display: none;
  }
  table tr {
    margin-bottom: 10px;
    display: block;
    border-bottom: 2px solid #000;
  }
  table td {
    display: block;
    text-align: right;
    padding: 15px 0;
    font-size: 13px;
    border-bottom: 1px dotted #ccc;
    border-right: 1px solid transparent;
  }
  table td:last-child {
    border-bottom: 0;
  }
  table td:before {
    content: attr(data-label);
    float: left;
    text-transform: uppercase;
    font-weight: bold;
  }
  .orders-table__btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    .btn-orange {
      margin-bottom: 0;
      margin-right: 15px;
    }
  }
}
</style>

<script lang="js">
export default {
  name: "VOrdersTable",
  props: ["orders"],
};
</script>
