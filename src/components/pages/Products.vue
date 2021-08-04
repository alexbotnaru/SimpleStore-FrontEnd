<template>

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
        <v-sheet height="150"></v-sheet>
      </v-col>
    </template>
  </v-row>

</template>

<script>

export default {
  name: "Products"
}
</script>

<style scoped>

</style>