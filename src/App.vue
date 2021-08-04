<template>
  <v-app id="inspire">
<!--    <v-system-bar app>-->
<!--      <v-spacer></v-spacer>-->

<!--      <v-icon>mdi-square</v-icon>-->

<!--      <v-icon>mdi-circle</v-icon>-->

<!--      <v-icon>mdi-triangle</v-icon>-->
<!--    </v-system-bar>-->

    <SideBar/>
    <Products/>
    <Pagination/>
  </v-app>
</template>

<script>

import SideBar from "./components/SideBar";
import Products from "./components/Products";
import Pagination from "./components/Pagination";

export default {
  components: {Pagination, Products, SideBar},

}
</script>