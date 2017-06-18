<template>
  <div class="container">
    <el-row>
      <el-col :span="8" :offset="8">
        <el-card :body-style="{ padding: '0px' }">
          <img src="http://technologyadvice.com/wp-content/uploads/2015/01/wrike-spotlight-01.png" class="image">
          <div style="padding: 14px;">
            <div class="bottom clearfix" style="text-align: center;">
              <el-button type="text" class="button" v-on:click="login">Login</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  layout: 'nonauth',
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
      // console.log(this.$router)
      window.location.href = '/auth'
    }
  },
  components: {
    Logo
  }
}
</script>

<style>
.container {
  padding: 100px;
}
.error {
  color: red;
}
.image {
  width: 100%;
}
</style>
