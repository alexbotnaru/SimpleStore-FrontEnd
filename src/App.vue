<template>
  <v-app id="inspire">

    <SideBar/>
    <Content/>
    <Pagination/>
  </v-app>
</template>

<script>

import SideBar from "./components/SideBar";
import Pagination from "./components/Pagination";
import Content from "./components/Content";

export default {
  components: {Content, Pagination, SideBar},

}
</script>