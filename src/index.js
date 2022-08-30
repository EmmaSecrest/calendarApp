"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dropdown_1 = __importDefault(require("./Components/dropdown"));
const sampleInterface = {
    id: "one",
    optionsList: [1, 2, 3],
    disabled: false,
    defaultValue: "hi",
};
(() => {
    (0, dropdown_1.default)(sampleInterface);
})();
//# sourceMappingURL=index.js.map