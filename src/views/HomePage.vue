<template>
  <div id="frame">
    <el-container>
      <el-aside width="260px">
        <left-side-nav-menu />
      </el-aside>
      <el-main>
        <task-manage />
        <div v-if="displayTaskDetail">
          <right-task-detail />
        </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import leftSideNavMenu from '../components/LeftSideNavMenu'
import TaskManage from '../components/TaskManage'
import RightTaskDetail from '../components/RightTaskDetail'

export default {
  name: 'HomePage',
  components: {
    RightTaskDetail,
    TaskManage,
    leftSideNavMenu
  },
  data() {
    return {}
  },
  computed: {
    displayTaskDetail() {
      return this.$store.state.tasks.displayRightTaskDetail
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
