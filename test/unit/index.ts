import Vue from 'vue'

require('es6-promise/auto')

// disable print Vue production tip
Vue.config.productionTip = false

const testsContext = require.context('./', true, /\.spec\.ts(x?)$/)
testsContext.keys().forEach(testsContext)