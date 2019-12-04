const state = {
  selectedTags: [],
  selectedTask: {},
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
  }
}

export default {
  state,
  actions,
  mutations
}
