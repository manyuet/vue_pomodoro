<template>
  <div id="frame">
    <el-row>
      <el-col :span="22">
        <el-input v-model="taskName" placeholder="添加任务" /></el-col>
      <el-col :span="2">
        <el-button @click="submitTasks">submit</el-button></el-col>
    </el-row>
    <el-row class="tag-title">{{ tagOfTask }}</el-row>
    <el-row v-for="(task,index) in shouldShowTasks" :key="index" class="task-row">
      {{ task.name }}
    </el-row>
  </div>

</template>

<script>
export default {
  name: 'TaskManage',
  data() {
    return {
      tagOfTask: '',
      shouldShowTasks: [],
      taskName: '',
      newTask: {
        name: '',
        tag: ''
      },
      allTasks: [
        {
          name: '看书的任务',
          tag: '看书'
        },
        {
          name: '看java的任务',
          tag: 'java'
        },
        {
          name: '看文学类的任务',
          tag: '文学类'
        },
        {
          name: '看B站',
          tag: '娱乐的任务'
        }
      ]
    }
  },
  computed: {
    shouldShowTags() { // 因为是数组computed没办法直接感应vuex里数组的变化，所以使用watch调用
      return this.$store.state.tasks.selectedTags
    }
  },
  watch: {
    shouldShowTags(tags) {
      this.showTasks(tags)
    }
  },
  methods: {
    showTasks(shouldShowTags) {
      this.tagOfTask = shouldShowTags[0]
      this.shouldShowTasks = this.allTasks.filter(task => shouldShowTags.includes(task.tag))
    },
    submitTasks() {
      this.newTask.name = this.taskName
      this.newTask.tag = this.tagOfTask
      this.allTasks.push(this.newTask)
      this.shouldShowTasks.push(this.newTask)
      this.taskName = ''
      console.log(this.allTasks)
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
</style>
