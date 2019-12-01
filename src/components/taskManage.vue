<template>
  <div id="frame">
    <div v-for="(task,index) in shouldShowTasks" :key="index">
      {{ task.name }}
    </div>
  </div>

</template>

<script>
export default {
  name: 'TaskManage',
  data() {
    return {
      shouldShowTasks: [],
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
      this.shouldShowTasks = this.allTasks.filter(task => shouldShowTags.includes(task.tag))

      // this.shouldShowTasks = []
      // for (let i = 0; i < shouldShowTags.length; i++) {
      //   for (const task of this.allTasks) {
      //     if (task.tag === shouldShowTags[i]) {
      //       this.shouldShowTasks.push(task)
      //     }
      //   }
      // }
    }
  }
}
</script>

<style scoped>
</style>
