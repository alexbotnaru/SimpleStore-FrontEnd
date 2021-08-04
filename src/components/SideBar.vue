<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
    >

      <v-list-item>
        <v-list-item-avatar
        min-height="70"
        min-width="70">
          <v-badge
              bordered
              color="green"
              bottom
              offset-x="12"
              offset-y="12"
              icon="mdi-check-decagram"
          >
            <v-avatar size="50">
              <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
            </v-avatar>
          </v-badge>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Alex</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
            v-for="item in items"
            :key="item.title"
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
      <!--  -->
    </v-navigation-drawer>
  </div>

</template>

<script>
export default {
  name: "SideBar",
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'About', icon: 'mdi-forum' },
        { title: 'My Account', icon: 'mdi-account-edit' },
        { title: 'Log Out', icon: 'mdi-logout' },
      ],
    }
  },
}
</script>

<style scoped>

</style>