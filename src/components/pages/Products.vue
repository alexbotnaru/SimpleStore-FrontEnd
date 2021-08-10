<template>
  <v-container
    fluid
  >
    <div
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="$store.getters['products/getIsLoading']"
      infinite-scroll-distance="10"
    >
      <h1 style="text-align: center">
        Our products
      </h1>


      <v-row>
        <CategoriesList />

        <v-col
          v-for="item in $store.getters['products/getList']"
          :key="item.link"
          cols="3"
          md="3"
        >
          <ProductItem :item="item" />
        </v-col>
      </v-row>

      <v-row
        v-if="$store.getters['products/getIsLoading']"
      >
        <CategoriesList />
        <v-col
          class="mb-6"
          :boilerplate="true"
          :elevation="2"
          cols="12"
          md="3"
        >
          <v-skeleton-loader

            type="card, article, actions"
          />
        </v-col>
        <v-col
          class="mb-6"
          :boilerplate="true"
          :elevation="2"
          cols="12"
          md="3"
        >
          <v-skeleton-loader

            type="card, article, actions"
          />
        </v-col>
        <v-col
          class="mb-6"
          :boilerplate="true"
          :elevation="2"
          cols="12"
          md="3"
        >
          <v-skeleton-loader

            type="card, article, actions"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>

import ProductItem from "./ProductItem";
import CategoriesList from "../CategoriesList";

export default {
  name: "Products",
  components: {CategoriesList, ProductItem},
  props: {
    link: {
      required: false,
      default: () => '',
      type: String
    }
  },
  data: () => ({
    page: 1
  }),
  watch:{
    link: {
      handler(){
        this.page = 1;
        this.$store.dispatch('products/loadProducts', {
          link: this.link,
          page: this.page
        });
      },
      immediate: true
    }
  },
  methods: {
    loadMore: function (){
      this.$store.dispatch('products/loadProducts', {
        link: this.link,
        page: ++this.page
      });
    }
  }
}
</script>

<style scoped>

</style>