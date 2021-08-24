<template>
  <v-container
    class="mt-5"
  >
    <h2>{{ product.title }}</h2>


    <v-row class="mt-3">
      <v-col
        :cols="9"
      >
        <div v-if="product.img.length === 0">
          <v-img src="https://www.ecpgr.cgiar.org/fileadmin/templates/ecpgr.org/Assets/images/No_Image_Available.jpg" />
        </div>
        <div v-else>
          <v-carousel
            hide-delimiters
          >
            <v-carousel-item
              v-for="(item,i) in product.img"
              :key="i"
              :src="item"
            />
          </v-carousel>
        </div>
      </v-col>
      <v-col
        :cols="3"
      >
        <v-sheet>
          Просмотры: {{ product.views }} (сегодня: {{ product.viewsToday }}) <br>

          <h3>Цена:</h3> {{ product.price }} $
          <h3>Регион:</h3> {{ location }}
          <h3>Price History</h3>
        </v-sheet>
      </v-col>
    </v-row>
    <v-sheet style="white-space: pre-wrap">
      <h3>Описание:</h3>
      {{ product.description }}
    </v-sheet>
    <v-spacer />

    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Характеристики:</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col
              v-for="(item) in product.mainFeatures"
              :key="item.name"
              class="features"
              lg="6"
              md="6"
              sm="12"
            >
              <div class="feature">
                <div>{{ item.name }}</div>
                <div class="dotted" />
                <div>{{ item.value }}</div>
              </div>
            </v-col>
            <v-col
              v-for="(item) in product.secondaryFeatures"
              :key="item.name"
              class="features"
              lg="6"
              md="6"
              sm="12"
            >
              <div class="feature">
                <div>{{ item.name }}</div>
                <div class="dotted" />
                <div>{{ item.value }}</div>
              </div>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!--    <v-expansion-panels class="hidden-md-and-up">-->
    <!--      <v-expansion-panel>-->
    <!--        <v-expansion-panel-header>Характеристики:</v-expansion-panel-header>-->
    <!--        <v-expansion-panel-content>-->
    <!--          <v-row>-->
    <!--            <v-col-->
    <!--              v-for="(item, i) in product.mainFeatures"-->
    <!--              :key="i+1000"-->
    <!--              :cols="6"-->
    <!--            >-->
    <!--              {{ item.name }}...........................................{{ item.value }}-->
    <!--            </v-col>-->
    <!--            <v-col-->
    <!--              v-for="(item, i) in product.secondaryFeatures"-->
    <!--              :key="i+100"-->
    <!--              :cols="6"-->
    <!--            >-->
    <!--              {{ item.name }}...........................................{{ item.value }}-->
    <!--            </v-col>-->
    <!--          </v-row>-->
    <!--        </v-expansion-panel-content>-->
    <!--      </v-expansion-panel>-->
    <!--    </v-expansion-panels>-->
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Item",
  props: {
    id : {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      product: 'item/getItem',
      priceHistory: 'productHistory/getItem',
    }),
    location: function (){
      return this.product.location
      ?.map(({name}) => name)
      .join(', ')
    },
    price: function (){
      if (this.product.noPrice) return 'Договорная'
      else return this.product.price + '$'
    },
  },
  mounted() {
    this.$store.dispatch('item/loadItem', this.id);
  }
}
</script>

<style scoped>

@media only screen and (max-width: 500px) {
  .features {
    font-size: 13px;
  }
}

  div .dotted{
    width: 100%;
    border-bottom: 2px dotted;
    margin: 0px 10px;
    position: relative;
    top: -3px;
  }

  div .feature{
  display: flex
  }
  div .features>div{
    white-space: nowrap
  }


</style>