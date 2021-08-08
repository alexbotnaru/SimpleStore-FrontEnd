<template>
  <div>
    <v-row>
      <CategoriesList />
      <template v-for="n in 6">
        <!--        <v-col-->
        <!--          :key="n"-->
        <!--          class="mt-2"-->
        <!--          cols="12"-->
        <!--        >-->
        <!--          <strong>Category {{ n }}</strong>-->
        <!--        </v-col>-->


        <v-col
          v-for="j in 3"
          :key="`${n}${j}`"
          cols="4"
          md="3"
        >
          <ProductItem />
        </v-col>
      </template>
    </v-row>
    <Pagination />
  </div>
</template>

<script>

import ProductItem from "./ProductItem";
import Pagination from "../Pagination";
import CategoriesList from "../CategoriesList";

export default {
  name: "Products",
  components: {CategoriesList, Pagination, ProductItem}
}
</script>

<style scoped>

</style>