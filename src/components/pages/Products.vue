<template>
  <div
    v-infinite-scroll="loadMore"
    class="pt-10"
    :infinite-scroll-disabled="getIsLoading"
    infinite-scroll-distance="10"
  >
    <h1 style="text-align: center">
      Our products
    </h1>

    <v-row>
      <v-col
        cols="4"
        md="3"
        xs="4"
        class="hidden-xs-only"
      >
        <CategoriesList />
      </v-col>
      <v-col
        cols="12"
        class="hidden-sm-and-up"
      >
        <CategoriesList />
      </v-col>
      <v-col
        class="hidden-xs-only"
        cols="8"
        xs="8"
      >
        <v-row>
          <v-col
            v-for="item in getList"
            :key="item.link"
            xl="3"
            lg="4"
            md="4"
            sm="6"
            xs="12"
          >
            <ProductItem :item="item" />
          </v-col>
        </v-row>

        <v-row
          v-if="getIsLoading"
        >
          <v-col
            class="mb-6"
            :boilerplate="true"
            :elevation="2"
            cols="12"
            xl="3"
            lg="4"
            md="4"
            sm="6"
            xs="9"
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
      <v-col
        class="hidden-sm-and-up"
        cols="12"
        xs="12"
      >
        <v-row>
          <v-col
            v-for="item in getList"
            :key="item.link"
            xl="3"
            lg="4"
            md="4"
            sm="6"
            xs="12"
          >
            <ProductItem :item="item" />
          </v-col>
        </v-row>

        <v-row
          v-if="getIsLoading"
        >
          <v-col
            class="mb-6"
            :boilerplate="true"
            :elevation="2"
            cols="12"
            xl="3"
            lg="4"
            md="4"
            sm="6"
            xs="12"
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
import {mapActions, mapGetters} from "vuex";

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
  computed: {
    ...mapGetters({
        getList: 'products/getList',
        getIsLoading: 'products/getIsLoading'
    })
  },
  watch:{
    link: {
      handler(){
          this.page = 1;
          this.loadProducts( {
            link: this.link,
            page: this.page
          });
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions({
      loadProducts: 'products/loadProducts'
    }),
    loadMore: function (){
      if(this.getList.length !== 0) {
        this.loadProducts({
          link: this.link,
          page: ++this.page
        });
      }
    }
  }
}
</script>

<style scoped>

</style>