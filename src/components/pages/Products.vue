<template>
  <div>
    <v-row>
      <template v-for="n in 6">
        <v-col
          :key="n"
          class="mt-2"
          cols="12"
        >
          <strong>Category {{ n }}</strong>
        </v-col>

        <v-col
          v-for="j in 4"
          :key="`${n}${j}`"
          cols="6"
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

export default {
  name: "Products",
  components: {Pagination, ProductItem}
}
</script>

<style scoped>

</style>