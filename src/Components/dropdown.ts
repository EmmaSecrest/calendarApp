interface Props {
  id: string;
  optionsList: string[];
  disabled?: boolean;
  defaultValue?: string;
}

const defaultProps: Props = {
  id: "",
  optionsList: [],
  disabled: false,
  defaultValue: "",
};

export default function (props = defaultProps) {
  const getOption = (value: string): HTMLOptionElement => {
    const option = document.createElement("option");
    option.setAttribute("value", value);
    option.setAttribute("label", value);
    if (value === props.defaultValue) {
      option.setAttribute("selected", value);
    }
    return option;
  };

  const getDropdown = (): HTMLSelectElement => {
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
