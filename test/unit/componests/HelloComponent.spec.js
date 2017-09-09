"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var HelloComponent_vue_1 = require("@/components/HelloComponent.vue");
describe('HelloComponent.vue', function () {
    it('#propsData', function () {
        var propsData = {
            name: 'World',
            initialEnthusiasm: 3
        };
        var vm = new HelloComponent_vue_1.default({
            el: document.createElement('div'),
            propsData: propsData
        });
        chai_1.expect(vm.name).to.equals(propsData.name);
        chai_1.expect(vm.enthusiasm).to.equals(propsData.initialEnthusiasm);
        chai_1.expect(vm.exclamationMarks).to.have.lengthOf(propsData.initialEnthusiasm);
    });
});
