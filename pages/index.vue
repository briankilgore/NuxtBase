<template>
  <div class="container">
    <h2 style="text-align: center">Welcome to the Wrike API Console</h2>
  </div>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  layout: 'auth',
  data () {
    return {
      num1: 1,
      color: 'rgba(19, 206, 102, 0.8)',
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        username: this.formUsername,
        password: this.formPassword
      })
      .then(() => {
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      })
      .catch((e) => {
        this.formError = e.message
      })
    },
    logout () {
      this.$store.dispatch('logout')
    }
  },
  mounted () {
    this.$store.dispatch('setPageTitle', 'Home')
  },
  components: {
    Logo
  }
}
</script>

<style>
.error {
  color: red;
}
</style>
