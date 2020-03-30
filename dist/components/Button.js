"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var colors = {
    black: '#000000',
    white: '#ffffff'
};
exports.Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* Adapt the colors based on primary prop */\n  background: ", ";\n  color: ", ";\n\n  font-size: 1.625em;\n  margin: 1em;\n  padding: 0.5em 1em;\n  border: 2px solid #E1A87A;\n  border-radius: 0px;\n"], ["\n  /* Adapt the colors based on primary prop */\n  background: ", ";\n  color: ", ";\n\n  font-size: 1.625em;\n  margin: 1em;\n  padding: 0.5em 1em;\n  border: 2px solid #E1A87A;\n  border-radius: 0px;\n"])), function (props) { return props.primary ? "" + colors.black : props.transparent ? "none" : "" + colors.white; }, function (props) { return props.primary || (props.transparent && !props.blackFont) ? "white" : "" + colors.black; });
var templateObject_1;
