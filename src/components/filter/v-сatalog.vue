<template>
  <div class="v-filter">
    <ul class="list__category">
      <p class="category__name">All categories</p>
      <li
        v-for="catalog in catalogs"
        :key="catalog.id"
        @click="visible = catalog.id">
        <p class="category__link" @click="visible = catalog.id">
          {{ catalog.name }}
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M-7.08818e-08 1.02149C-5.98248e-08 0.768531 0.090569 0.515397 0.27275 0.317619C0.649976 -0.0911935 1.27753 -0.107496 1.6744 0.281073L4.00694 2.56663L6.32331 0.283402C6.71879 -0.1066 7.34634 -0.0922681 7.72496 0.31547C8.10358 0.723387 8.0895 1.36993 7.69384 1.75993L4.69464 4.71675C4.3122 5.09367 3.70985 5.09439 3.32619 4.71907L0.308212 1.76244C0.103606 1.56126 -8.27062e-08 1.292 -7.08818e-08 1.02149Z"
              fill="#979797" />
          </svg>
        </p>

        <transition name="fadeY">
          <div v-if="visible === catalog.id">
            <p tag="li" @click="goToCatalog(catalog)">All {{ catalog.name }}</p>
            <ul
              class="category__ul"
              v-for="category in catalog.categories"
              :key="category.id">
              <li>
                <p @click="goToCategory(catalog, category)">
                  {{ category.name }}
                </p>
                <ul class="list__subcategory">
                  <li
                    v-for="(subCategory, id) in category.subCategories"
                    :key="id">
                    <p @click="goToSubcategory(catalog, category, subCategory)">
                      {{ subCategory.name }}
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.list__category {
  margin-bottom: 40px;
  > li {
    cursor: pointer;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    margin-bottom: 20px;
    color: #979797;
    ul {
      padding-top: 5px;
      .list__subcategory p {
        font-size: 13px;
        cursor: pointer;
        margin-bottom: 8px;
        margin-left: 8px;
      }
    }
  }
}
.category__ul {
  > li {
    padding: 5px 0;
  }
  a {
    color: #696969;
    margin: 5px 0;
  }
}
.category__name {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  margin-bottom: 30px;
}
.category__link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.category__link.active {
  color: #ff9b30;
}

//animation
.fadeY-enter-active,
.fadeY-leave-active {
  transition: all 0.5s ease-out;
}
.fadeY-enter,
.fadeY-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>

<script lang="js">
export default {
  name: "v-catalog",
  props: ["catalogs", ],
  data() {
    return {
      visible: null,
      show: false,
    }
  },
  methods: {
    goToCatalog(catalog) {
      this.$router.push(`/Category/${catalog.id}`);
      this.$emit("goToCatalog", )
    },
    goToCategory(catalog, category) {
      this.$router.push(`/Category/${catalog.id}/${category.id}`)
      this.$emit("goToCategory", )
    },
    goToSubcategory(catalog, category, subcategory) {
      debugger;
      this.$router.push(`/Category/${catalog.id}/${category.id}/${subcategory.id}`);
      this.$emit("goToSubcategory", )
    },
  },
};
</script>
