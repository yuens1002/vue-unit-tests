import { shallowMount } from '@vue/test-utils'
import TodoItem from '@/components/Todos/TodoItem/TodoItem'

describe('TodoItem Component', () => {
  const build = () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        todo: {
          text: 'Do Work',
          completed: true
        }
      }
    })
    return {
      wrapper
    }
  }

  it('renders a todo Item', () => {
    expect(build().wrapper.html().includes('Do Work')).toBe(true)
  })
  it('assigns "completed" class to a completed todo', () => {
    expect(build().wrapper.classes('completed')).toBe(true)
  })
})
