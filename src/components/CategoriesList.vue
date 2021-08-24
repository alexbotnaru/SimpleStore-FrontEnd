<template>
  <div>
    <v-progress-linear
      v-if="getIsLoading"
      indeterminate
      rounded
      color="orange"
      background-color="purple lighten-1"
    />
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(category, i) in categories"
        :key="i"
      >
        <v-expansion-panel-header>{{ category.name }}</v-expansion-panel-header>
        <div
          v-for="(linkChild) in category.children"
          :key="linkChild.link"
        >
          <v-expansion-panel-content>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-wrap">
                  <router-link
                    class="text--primary"
                    :to="{
                      name:'products',
                      query: {link: linkChild.link}
                    }"
                  >
                    {{ linkChild.name }}
                  </router-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-expansion-panel-content>
        </div>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CategoriesList",
  computed: {
    ...mapGetters({
      getList: 'categories/getList',
      getIsLoading: 'categories/getIsLoading'
    }),
    categories(){
      let categories = {};
      for (let category of this.getList){
        if (!category.parentLink){
          categories[category.link] = {
            children: [],
            ...category
          }
        } else {
          categories[category.parentLink].children.push(category)
        }
      }
      return categories

    }
  },
  async mounted() {
    if(!this.getList.length) {
      await this.fetchCategories();
    }
  },
  methods: {
    ...mapActions({
      fetchCategories: 'categories/fetchCategories'
    })
  }
}
</script>

<style scoped>
.v-list-item__title a{
  text-decoration: none;
}

</style>