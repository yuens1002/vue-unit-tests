export default {
  TOGGLE_COMPLETE (state, { id }) {
    state.todos[id].complete = !state.todos[id].complete
  },
  CREATE_TODO (state, { text }) {
    const id = state.ids[state.ids.length - 1] + 1
    state.todos[id] = {
      text,
      completed: false
    }
    state.ids.push(id)
  }
}
