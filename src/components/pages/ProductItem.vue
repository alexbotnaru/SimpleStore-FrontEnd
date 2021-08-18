<template>
  <v-card
    :key="link.title"
    :loading="loading"
    class="mx-auto my-5"
    max-width="374"
    height="550"
  >
    <router-link
      :to="{
        name: 'item',
        params: {
          id: itemId
        }
      }"
    >
      <v-img
        height="250"
        :src="item.img[0].replace('https://i.simpalsmedia.com/999.md/BoardImages/900x900/noimage.gif', 'https://www.ecpgr.cgiar.org/fileadmin/templates/ecpgr.org/Assets/images/No_Image_Available.jpg')"
      />
    </router-link>

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
  computed: {
    itemId: function (){
      return this.item.link.substring(4);
    }

  },

  methods: {},
}
</script>

<style scoped>
.addToCart{
  position: absolute;
  bottom: 10px;
}
</style>