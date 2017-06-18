<template>
  <el-row class="tac">
    <el-col>
      <el-menu theme="dark" :router="true" :default-active="activePath" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
        <el-menu-item index="/"><i class="el-icon-menu"></i>Home</el-menu-item>
        <el-menu-item index="/webhooks"><i class="el-icon-share"></i>Manage Webhooks</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    },
    computed: {
      activePath () {
        let route = this.$route
        return route.path
      }
    }
  }
</script>

<style scoped>
  .el-menu-vertical {
    height: 100vh;
  }
</style>
