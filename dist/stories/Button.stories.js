"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var addon_actions_1 = require("@storybook/addon-actions");
var Button_1 = require("../components/Button");
exports.default = {
    title: 'Button',
    component: Button_1.Button,
};
// stoires
exports.Default = function () { return react_1.default.createElement(Button_1.Button, { onClick: addon_actions_1.action('clicked') }, "Default Button"); };
exports.Primary = function () { return react_1.default.createElement(Button_1.Button, { primary: true, onClick: addon_actions_1.action('clicked') }, "Primary Button"); };
