<template>
  <v-main class="grey lighten-2">
    <v-container>
      <v-row>
        <template v-for="n in 6">
          <v-col
              :key="n"
              class="mt-2"
              cols="12"
          >
            <Content/>

            <strong>Category {{ n }}</strong>
          </v-col>

          <v-col
              v-for="j in 4"
              :key="`${n}${j}`"
              cols="6"
              md="3"
          >
            <v-sheet height="150"></v-sheet>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Content from "./Content";
export default {
  name: "ProductsLayout",
  components: {Content},
}
</script>

<style scoped>

</style>