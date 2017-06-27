<template>
  <v-list class="pt-0">
    <v-divider></v-divider>
    <v-list-item v-for="item in items" :key="item">
      <v-list-tile v-bind:href="item.route" nuxt router>
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-item>
  </v-list>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', route: '/', icon: 'home' },
          { title: 'Manage Webhooks', route: '/webhooks', icon: 'all_inclusive' }
        ]
      }
    }
  }
</script>

<style scoped>
  img {
    height: 30px;
    margin-right: 10px;
    float: right;
  }
</style>
