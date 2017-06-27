<template>
  <v-toolbar class="cyan" fixed light>
    <v-toolbar-side-icon class="hidden-lg-and-upa" light v-on:click.native.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-toolbar>
</template>

<script>
  import Logo from '~components/Logo.vue'
  import ProfileMenu from '~components/ProfileMenu.vue'

  export default {
    computed: {
      title () {
        return this.$store.state.pageTitle
      }
    },
    methods: {
      toggleDrawer () {
        console.log(this.$store.state)
        this.$store.dispatch('toggleSidebar')
      }
    },
    components: {
      Logo,
      ProfileMenu
    }
  }
</script>

<style scoped>
  .el-row {
    background-color: #fff;
  }
</style>
