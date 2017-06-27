<template>
  <v-app>
    <v-navigation-drawer persistent enable-resize-watcher light v-model="drawer">
      <profile-menu />
      <navigation-menu />
    </v-navigation-drawer>
    <v-toolbar class="cyan" fixed light>
      <v-toolbar-side-icon light v-on:click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import ProfileMenu from '~components/ProfileMenu.vue'
  import NavigationMenu from '~components/NavigationMenu.vue'

  export default {
    middleware: 'auth',
    data () {
      return {
        drawer: true,
        mini: true
      }
    },
    computed: {
      title () {
        return this.$store.state.pageTitle
      }
    },
    components: {
      ProfileMenu,
      NavigationMenu
    }
  }
</script>

<style scoped>

</style>
