<template>
  <el-card class="box-card">
    <logo size="30px" />
    <profile-menu></profile-menu>
  </el-card>
</template>

<script>
  import Logo from '~components/Logo.vue'
  import ProfileMenu from '~components/ProfileMenu.vue'

  export default {
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
