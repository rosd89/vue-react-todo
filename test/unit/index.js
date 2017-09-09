"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
// disable print Vue production tip
vue_1.default.config.productionTip = false;
var testsContext = require.context('./', true, /\.spec\.ts(x?)$/);
testsContext.keys().forEach(testsContext);
