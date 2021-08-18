<template>
  <v-container
    class="mt-5"
  >
    Product Id: {{ id }}
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in $store.getters['item/getItem'].img"
        :key="i"
        :src="image"
      />
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: "Item",
  props: {
    id : {
      type: String,
      required: true
    }
  },
  mounted() {
    console.log(this.id)
    this.$store.dispatch('item/loadItem', this.id);
  }
  // data () {
    // return {
    //   items: [
    //     {
    //       src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
    //     },
    //     {
    //       src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    //     },
    //     {
    //       src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    //     },
    //     {
    //       src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    //     },
    //   ],
    // }
  // }
}
</script>

<style scoped>

</style>