<template>
  <div id="frame">
    <el-row>
      <el-col :span="22">
        <el-input v-model="taskName" placeholder="添加任务" /></el-col>
      <el-col :span="2">
        <el-button @click="submitTasks">submit</el-button></el-col>
    </el-row>
    <el-row class="tag-title">{{ tagOfTask }}</el-row>
    <div v-for="(task,index) in shouldShowTasks" :key="index" @click="taskDetail(task)">
      <el-row class="task-row">
        <el-col :span="1" class="icon-play">
          <i class="el-icon-video-play" @click="startCountTime(task)" />
        </el-col>
        <el-col :span="20">
          {{ task.name }}
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
export default {
  name: 'TaskManage',
  data() {
    return {
      tagOfTask: '',
      shouldShowTasks: [],
      todayTasks: [],
      tomorrowTasks: [],
      taskName: '',
      newTask: {
        name: '',
        tag: ''
      },
      allTasks: [
        {
          name: '看书的任务',
          tag: '看书',
          pomodoroNum: 2,
          endDate: '2019-12-4'
        },
        {
          name: '看java的任务',
          tag: 'java',
          pomodoroNum: 4,
          endDate: '2019-12-4'
        },
        {
          name: '看文学类的任务',
          tag: '文学类',
          pomodoroNum: 0,
          endDate: '2019-12-3'
        },
        {
          name: '看B站',
          tag: '娱乐的任务',
          pomodoroNum: 0,
          endDate: '2019-12-2'
        }
      ]
    }
  },
  computed: {
    shouldShowTags() { // 因为是数组computed没办法直接感应vuex里数组的变化，所以使用watch调用
      return this.$store.state.tasks.selectedTags
    },
    shouldShowTasksByDay() {
      return this.$store.state.tasks.selectedTaskByDay
    }
  },
  watch: {
    shouldShowTags(tags) {
      this.showTasks(tags)
    },
    shouldShowTasksByDay() {
      this.showTasksByDay()
    }
  },
  methods: {
    showTasks(shouldShowTags) {
      this.tagOfTask = shouldShowTags[0]
      this.shouldShowTasks = this.allTasks.filter(task => shouldShowTags.includes(task.tag))
    },
    showTasksByDay() {
      this.tagOfTask = ''
      this.shouldShowTasks = this.shouldShowTasksByDay
    },
    submitTasks() {
      if (!this.tagOfTask) {
        this.$message.error('请先选择左侧标签')
      } else {
        this.newTask.name = this.taskName
        this.newTask.tag = this.tagOfTask
        this.allTasks.push(this.newTask)
        this.shouldShowTasks.push(this.newTask)
        this.taskName = ''
      }
    },
    startCountTime(task) {
      this.$router.push({
        name: 'StartCount',
        params: task
      })
    },
    taskDetail(task) {
      this.$store.commit('selectTask', task)
    }
  }
}
</script>

<style scoped>
  .tag-title{
    line-height: 50px;
    font-size: small;
  }
  .task-row{
    background-color: white;
    line-height: 40px;
    border-radius: 10px;
    margin-top: 5px;
  }
  .icon-play{
    margin-left: 10px;
  }
</style>
