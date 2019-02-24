/* eslint-disable no-undef */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Todos from '@/components/Todos/Todos'
import TodoItem from '@/components/Todos/TodoItem/TodoItem'
import initialState from '@/store/state'
// import mutations from '@/store/mutations'

// read up on this...
// jest.mock('@/store/mutations')

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Todos Component', () => {
  let state, mutations
  const build = () => {
    const wrapper = shallowMount(Todos, {
      localVue,
      store: new Vuex.Store({ state, mutations })
    })
    return {
      wrapper,
      todoItem: () => wrapper.find(TodoItem)
    }
  }
  beforeEach(() => {
    jest.resetAllMocks()
    state = { ...initialState }
    mutations = { TOGGLE_COMPLETE: jest.fn() }
  })
  it('renders the same # of todo items in the store', () => {
    const { wrapper } = build()
    const numOfTodoItems = wrapper.vm.$store.state.ids.length
    expect(wrapper.findAll(TodoItem).length).toBe(numOfTodoItems)
  })
  // only interested in knowing the mutation is called, not the actual implementation (what it does)
  it('commits TOGGLE_COMPLETE mutation with a payload when clicked', () => {
    build().wrapper.findAll(TodoItem).trigger('click')
    expect(mutations.TOGGLE_COMPLETE).toHaveBeenCalled()
    // expect(mutations.TOGGLE_COMPLETE.mock.calls.length).toBe(3)
    expect(mutations.TOGGLE_COMPLETE.mock.calls[0][1].id).toBe(0)
  })
})
