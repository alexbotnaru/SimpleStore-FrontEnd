<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title>
        Simple Store <v-icon
          large
          color="orange darken-2"
        >
          mdi-store-outline
        </v-icon>
      </v-toolbar-title>
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
      </v-list>
      <v-spacer />
      <v-row class="display-bottom">
        <v-col class="ma-5">
          <v-switch
            :value="$vuetify.theme.dark"
            :label="`Dark Mode : ${isDarkModeEnabled.toString()}`"
            @change="$vuetify.theme.dark=!$vuetify.theme.dark"
          />
        </v-col>
      </v-row>
      <!--  -->
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "SideBar",
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
      isDarkModeEnabled: true,
    }
  },
}
</script>

<style scoped>
 .display-bottom{
   position: absolute;
   bottom: 0;
 }
</style>