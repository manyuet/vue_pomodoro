<template>
  <div id="frame">
    <el-container>
      <el-container>
        <el-aside width="260px">
          <left-side-nav-menu />
        </el-aside>
        <el-main><task-manage /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import countDown from '../components/countDown';
import leftSideNavMenu from '../components/leftSideNavMenu'
import TaskManage from '../components/taskManage'

export default {
  name: 'HomePage',
  components: {
    TaskManage,
    leftSideNavMenu
  }
}
</script>

<style scoped>
</style>
