<template>
  <v-container>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title>
        <v-btn
          to="/"
          text
          link
          class="text-h6 hidden-xs-only"
        >
          Simple Store
        </v-btn>
        <v-icon
          large
          color="orange darken-2"
        >
          mdi-store-outline
        </v-icon>
      </v-toolbar-title>
      <v-spacer />


      <Search
        v-model="search"
        :items="searchSuggestions"
        :loading="isSearchLoading"
        @submitInput="onSubmit"
        @onChange="onChange"
      />
      <v-icon>
        mdi-magnify
      </v-icon>

      <v-btn
        class="mr-3"
        icon
      >
        <v-icon>
          mdi-cart-outline
        </v-icon>
      </v-btn>


      <v-btn
        class="mr-3 hidden-sm-and-down"
        icon
      >
        <v-icon>
          mdi-logout
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list-item>
        <v-list-item-avatar
          min-height="70"
          min-width="70"
        >
          <v-badge
            bordered
            color="green"
            bottom
            offset-x="12"
            offset-y="12"
            icon="mdi-check-decagram"
          >
            <v-avatar size="50">
              <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" />
            </v-avatar>
          </v-badge>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Alex</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group
          class="hidden-sm-and-up"
          :value="false"
          prepend-icon="mdi-view-list"
        >
          <template v-slot:activator>
            <v-list-item-title>Categories</v-list-item-title>
          </template>
          <CategoriesList />
        </v-list-group>
      </v-list>
      <v-spacer />
      <v-row>
        <v-col>
          <v-switch
            v-model="isDarkModeEnabled"
            :value="$vuetify.theme.dark"
            :label="`Dark Mode `"
            @change="changeDarkMode()"
          />
        </v-col>
      </v-row>
      <!--  -->
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import Search from "./Search";
import CategoriesList from "./CategoriesList";
export default {
  name: "SideBar",
  components: {CategoriesList, Search},
  data() {
    return {
      drawer: false,
      items: [
        {title: 'Home', route: '/products', icon: 'mdi-view-dashboard'},
        {title: 'My Account', route: '/account', icon: 'mdi-account-edit'},
        {title: 'About', route: '/info', icon: 'mdi-forum'},
        {title: 'Contacts', route: '/contacts', icon: 'mdi-contacts'},
        {title: 'Log Out', route: '/', icon: 'mdi-logout'},
      ],
      inputData: '',
      search: ''
    }
  },
  computed: {
    ...mapGetters({
      isDarkModeEnabled: 'settings/getIsDarkModeEnabled',
      searchSuggestions: 'products/getSearchSuggestionsList',
      isSearchLoading: 'products/getIsSearchLoading'
    }),
    fullPath: function (){
      return this.$route.query.link;
    }
  },
  watch: {
    isDarkModeEnabled: {
      handler() {
        this.$vuetify.theme.dark = this.isDarkModeEnabled
      },
      immediate: true
    },
    fullPath: function (){
      if (!this.fullPath?.includes('search')){
        this.inputData = '';
      }
    },
    search(){
      this.$store.dispatch('products/searchSuggestions', this.search);

    }
  },
  methods: {
    ...mapMutations({
      setDarkMode: 'settings/setDarkModeEnabled'
    }),
    changeDarkMode(){
      this.setDarkMode(!this.isDarkModeEnabled);
    },
    onSubmit(value){
      this.$router.push({
        name: 'products',
        query: {
          link: `/ru/search?query=${value}`
        }
      })

    },
    onChange(e) {
      if (this.search) {
        this.$router.push({
          path: '/products',
          query: {
            link: e.url
          }
        })
      }
    }
  }
}
</script>

<style scoped>
 .display-bottom{
   position: absolute;
   bottom: 0;
 }

</style>