import { shallowMount } from '@vue/test-utils'
import Parent from '@/components/Parent'
import Child from '@/components/Child'

describe('Parent component', () => {
  const build = () => {
    const wrapper = shallowMount(Parent)
    return {
      wrapper,
      child: () => wrapper.find(Child)
    }
  }

  it('mounts itself', () => {
    expect(build().wrapper.html()).toMatchSnapshot()
    // expect(build().wrapper.attributes('id')).toBe('parent')
  })

  it('mounts the Child component', () => {
    const { child } = build()
    expect(child().exists()).toBe(true)
  })

  it('has an id "parent"', () => {
    const { wrapper } = build()
    expect(wrapper.attributes().id).toBe('parent')
  })

  it('has a div with an id "child" wrapped by another div', () => {
    const { wrapper } = build()
    expect(wrapper.contains('div > div#child')).toBe(true)
  })

  it('passes a props to the Child component', () => {
    const { child, wrapper } = build()
    wrapper.setData({ msg: 'this is a prop from parent' })
    expect(child().vm.msg).toBe('this is a prop from parent')
  })

  it('receives 2 emits from Child components', () => {
    const { child } = build()
    child().vm.$emit('custom', 'hello')
    child().vm.$emit('custom', 'hello2')
    expect(child().emittedByOrder().map(e => e.args)).toEqual([['hello'], ['hello2']])
  })

  it('add method should add 1', () => {
    const { wrapper } = build()
    const oldCount = wrapper.vm.count
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.count).toBe(oldCount + 1)
  })
})
