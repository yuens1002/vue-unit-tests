import { shallowMount } from '@vue/test-utils'
import NewTodoForm from '@/components/NewTodoForm/NewTodoForm'

describe('NewToDoForm Component', () => {
  it('calls createTodo when enter is pressed', () => {
    const createTodo = jest.fn()
    const wrapper = shallowMount(NewTodoForm)
    wrapper.setMethods({ createTodo })
    const input = wrapper.find('input')
    input.trigger('keydown.enter')
    expect(createTodo.mock.calls.length).toBe(1)
  })
})
