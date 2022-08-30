"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultProps = {
    id: "",
    optionsList: [],
    disabled: false,
    defaultValue: "",
};
function default_1(props = defaultProps) {
    const getOption = (value) => {
        const option = document.createElement("option");
        option.setAttribute("value", value);
        option.setAttribute("label", value);
        if (value === props.defaultValue) {
            option.setAttribute("selected", value);
        }
        return option;
    };
    const getDropdown = () => {
        console.log("successfully calling drop down");
        const input = document.createElement("select");
        input.setAttribute("type", "text");
        input.setAttribute("id", props.id);
        input.setAttribute("disabled", props.disabled ? "disabled" : null);
        input.setAttribute("selected", props.id);
        props.optionsList.forEach((value) => {
            input.appendChild(getOption(value));
        });
        return input;
    };
    getDropdown();
}
exports.default = default_1;
//# sourceMappingURL=dropdown.js.map