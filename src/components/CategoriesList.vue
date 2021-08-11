<template>
  <div>
    <v-progress-linear
      v-if="$store.getters['categories/getIsLoading']"
      indeterminate
      rounded
      color="orange"
      background-color="purple lighten-1"
    />
    <v-expansion-panels
      focusable
    >
      <v-expansion-panel
        v-for="(link, i) in $store.getters['categories/getList']"
        :key="i"
      >
        <div v-if="!link.parentLink">
          <v-expansion-panel-header>{{ link.name }}</v-expansion-panel-header>
          <div
            v-for="(linkChild, j) in $store.getters['categories/getList']"
            :key="j"
          >
            <v-expansion-panel-content
              v-if="linkChild.parentLink === link.link"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">
                    <router-link
                      class="text--primary"
                      :to="{href:'/products', query: {link: linkChild.link}}"
                    >
                      {{ linkChild.name }}
                    </router-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-expansion-panel-content>
          </div>
        </div>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "CategoriesList",
  mounted() {
    if(!this.$store.getters['categories/getList'].length)
      this.$store.dispatch('categories/fetchCategories');
  }
}
</script>

<style scoped>
.v-list-item__title a{
  text-decoration: none;
}

</style>