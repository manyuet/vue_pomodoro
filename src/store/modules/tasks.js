const state = {
  selectedTags: [],
  selectedTask: {},
  selectedTaskByDay: [],
  displayRightTaskDetail: false
}

const actions = {}

const mutations = {
  chooseTag(state, tags) {
    state.selectedTags = tags
    state.displayRightTaskDetail = false
  },
  selectTask(state, task) {
    state.selectedTask = task
    state.displayRightTaskDetail = true
  },
  closeRight(state) {
    state.displayRightTaskDetail = false
  },
  selectTaskByDay(state, tasks) {
    state.selectedTaskByDay = []
    state.selectedTaskByDay = tasks
  }
}

export default {
  state,
  actions,
  mutations
}
