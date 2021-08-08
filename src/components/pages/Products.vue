<template>
  <v-container
    fluid
  >
    <h1 style="text-align: center">
      Our products
    </h1>
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

          type="card-avatar, article, actions"
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

          type="card-avatar, article, actions"
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

          type="card-avatar, article, actions"
        />
      </v-col>
    </v-row>

    <v-row
      v-else
    >
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

    <Pagination />
  </v-container>
</template>

<script>

import ProductItem from "./ProductItem";
import Pagination from "../Pagination";
import CategoriesList from "../CategoriesList";

export default {
  name: "Products",
  components: {CategoriesList, Pagination, ProductItem},
  props: {
    link: {
      required: false,
      default: () => '',
      type: String
    }
  },
  mounted() {
    this.$store.dispatch('products/loadProducts', this.link);

  }
}
</script>

<style scoped>

</style>