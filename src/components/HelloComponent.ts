import Vue from 'vue'
import {Component, Prop} from "vue-property-decorator";

@Component
export default class HelloComponent extends Vue {

  // props
  @Prop() name: string
  @Prop() initialEnthusiasm: number

  // data
  enthusiasm: number = this.initialEnthusiasm

  // computed
  get exclamationMarks(): string {
    return Array(this.enthusiasm + 1).join('!')
  }

  increment(): void {
    this.enthusiasm++
  }

  descrement(): void {
    if (this.enthusiasm > 1) {
      this.enthusiasm--
    }
  }
}