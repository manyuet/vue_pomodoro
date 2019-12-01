const state = {
  selectedTags: []
}

const actions = {}

const mutations = {
  chooseTag(state, tags) {
    state.selectedTags = tags
  }
}

export default {
  state,
  actions,
  mutations
}
