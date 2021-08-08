<template>
  <v-app id="inspire">
    <SideBar />
    <Content />
  </v-app>
</template>

<script>

import SideBar from "./components/SideBar";
import Content from "./components/Content";

export default {
  components: { Content, SideBar},

}
</script>