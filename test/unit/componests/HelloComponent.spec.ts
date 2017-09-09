import {expect} from 'chai'
import HelloComponent from '@/components/HelloComponent'

describe('HelloComponent.vue', () => {
  it('#propsData', async () => {
    const propsData = {
      name: 'World',
      initialEnthusiasm: 3
    }

    const vm = new HelloComponent({
      el: document.createElement('div'),
      propsData
    })

    expect(vm.name).to.equals(propsData.name)
    expect(vm.enthusiasm).to.equals(propsData.initialEnthusiasm)
    expect(vm.exclamationMarks).to.have.lengthOf(propsData.initialEnthusiasm)

    const $greeting = vm.$el.querySelector('.greeting') as HTMLElement
    expect($greeting.textContent, `Hello ${propsData.name}!!!`)
    vm.increment()
    expect(vm.exclamationMarks).to.have.lengthOf(propsData.initialEnthusiasm + 1)

    await vm.$nextTick() // update
    expect($greeting.textContent, `Hello ${propsData.name}!!!!`)
  })
})