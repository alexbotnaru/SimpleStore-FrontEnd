<template>
  <div
    v-infinite-scroll="loadMore"
    class="pt-10"
    :infinite-scroll-disabled="$store.getters['products/getIsLoading']"
    infinite-scroll-distance="10"
  >
    <h1 style="text-align: center">
      Our products
    </h1>

    <v-row>
      <v-col cols="3">
        <CategoriesList />
      </v-col>
      <v-col cols="9">
        <v-row>
          <v-col
            v-for="item in $store.getters['products/getList']"
            :key="item.link"
            cols="4"
            md="4"
          >
            <ProductItem :item="item" />
          </v-col>
        </v-row>

        <v-row
          v-if="$store.getters['products/getIsLoading']"
        >
          <v-col
            class="mb-6"
            :boilerplate="true"
            :elevation="2"
            cols="12"
            md="4"
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
            md="4"
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
            md="4"
          >
            <v-skeleton-loader

              type="card, article, actions"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
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