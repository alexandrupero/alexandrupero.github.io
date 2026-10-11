import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { Icon } from '@iconify/vue'
import App from '@/App.vue'
import '@/icons'

describe('App', () => {
  it('renders the terminal view by default on desktop', () => {
    const wrapper = mount(App, { global: { components: { Icon } } })

    expect(wrapper.text()).toContain('alexroman.dev')
  })
})
