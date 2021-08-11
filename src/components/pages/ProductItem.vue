<template>
  <v-card
    :key="link.title"
    :loading="loading"
    class="mx-auto my-5"
    max-width="374"
    height="550"
    link
    :to="link.route"
  >
    <v-img
      height="250"
      :src="item.img[0]"
    />

    <v-card-title>{{ item.title }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      />

      <div
        v-if="item.noPrice"
        class="my-4 text-subtitle-1"
      >
        Договорная
      </div>
      <div
        v-else
        class="my-4 text-subtitle-1"
      >
        {{ item.currency }} {{ item.price }}
      </div>

      <div> {{ item.description.substring(0, 150) }}</div>
    </v-card-text>

    <v-divider class="mx-4" />

    <v-card-actions>
      <v-btn
        class="addToCart"
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
  props: {
    item: {
      required: true,
      type:Object
    }
  },
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
.addToCart{
  position: absolute;
  bottom: 10px;
}
</style>