<template>
  <v-app id="inspire">
<!--    <v-system-bar app>-->
<!--      <v-spacer></v-spacer>-->

<!--      <v-icon>mdi-square</v-icon>-->

<!--      <v-icon>mdi-circle</v-icon>-->

<!--      <v-icon>mdi-triangle</v-icon>-->
<!--    </v-system-bar>-->

    <SideBar/>
    <ProductsLayout/>
    <Pagination/>
  </v-app>
</template>

<script>

import SideBar from "./components/SideBar";
import Pagination from "./components/Pagination";
import ProductsLayout from "./components/ProductsLayout";

export default {
  components: {ProductsLayout, Pagination, SideBar},

}
</script>