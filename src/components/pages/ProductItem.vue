<template>
  <v-card
    :key="link.title"
    :loading="loading"
    class="mx-auto my-5"
    max-width="374"
    link
    :to="link.route"
  >
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    />

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      />

      <div class="my-4 text-subtitle-1">
        $ 500
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4" />

    <v-card-actions>
      <v-btn

        color="deep-purple lighten-2"
        text
      >
        Add to cart
        <v-icon
          color="orange darken-2"
        >
          mdi-cart-check
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductItem",
  data: () => ({
    loading: false,
    selection: 1,
    link: {
      title: 'ProductDetails', route: '/details'
    }

  }),

  methods: {},
}
</script>

<style scoped>

</style>