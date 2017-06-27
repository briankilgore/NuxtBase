<template>
  <v-navigation-drawer persistent enable-resize-watcher light v-model="drawer">
    <profile-menu />
    <navigation-menu />
  </v-navigation-drawer>
</template>

<script>
  import ProfileMenu from '~components/ProfileMenu.vue'
  import NavigationMenu from '~components/NavigationMenu.vue'

  export default {
    data () {
      return {
        mini: false,
        items: []
      }
    },
    computed: {
      drawer () {
        // console.log(this.$store.state)
        return this.$store.state.sideBar
      }
    },
    // watch: {
    //   drawer () {
    //     console.log(this.$store.state)
    //     this.$store.dispatch('toggleSidebar')
    //   }
    // },
    components: {
      ProfileMenu,
      NavigationMenu
    }
  }
</script>

<style scoped>
  .el-menu-vertical {
    height: 100vh;
  }
</style>
