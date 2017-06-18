<template>
  <div>
    <el-row>
      <el-col :span="24" class="topbar">
        <top-bar/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3" class="sidenavbar">
        <div>
          <side-navbar/>
        </div>
      </el-col>
      <el-col :span="21" class="content">
        <el-card class="box-card" style="height: 100vh;">
          <nuxt/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TopBar from '~components/TopBar.vue'
import SideNavbar from '~components/SideNavbar.vue'

export default {
  middleware: 'auth',
  components: {
    TopBar,
    SideNavbar
  }
}
</script>

<style scoped>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}
</style>
