/* eslint-disable no-undef */
import mutations from '@/store/mutations'

describe('store mutations', () => {
  let state
  beforeEach(() => {
    state = {
      todos: {
        '1': { complete: false }
      },
      ids: [1]
    }
  })
  it('toggles complete prop by calling TOGGLE_COMPLETE', () => {
    mutations.TOGGLE_COMPLETE(state, { id: 1 })
    expect(state.todos[1].complete).toBe(true)
  })
  it('creates a todo by calling CREATE_TODO', () => {
    const prevNumOfIds = state.ids.length
    const prevToDos = Object.keys(state.todos).length
    mutations.CREATE_TODO(state, { text: 'New todo' })
    expect(Object.keys(state.todos).length).toBe(prevToDos + 1)
    expect(state.todos.hasOwnProperty(2)).toBe(true)
    expect(state.todos[2]).toHaveProperty('text')
    expect(state.todos[2].text).toEqual('New todo')
    expect(state.ids.length).toBe(prevNumOfIds + 1)
    expect(state.ids[prevNumOfIds - 1] + 1).toEqual(state.ids[prevNumOfIds])
    expect(Object.keys(state.todos).length).toEqual(state.ids.length)
  })
})
