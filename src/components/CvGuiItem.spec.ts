import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import CvGuiItem from '@/components/CvGuiItem.vue'

describe('CvGuiItem', () => {
  it('renders the title and the joined items', () => {
    const wrapper = mount(CvGuiItem, {
      props: { title: 'Languages', items: ['C#', 'Go', 'Ruby'] },
    })

    expect(wrapper.text()).toContain('Languages')
    expect(wrapper.text()).toContain('C#, Go, Ruby')
  })
})
