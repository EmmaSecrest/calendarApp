import dropdown, { Props } from "./Components/dropdown";

const sampleInterface: Props = {
  id: "one",
  optionsList: [1, 2, 3],
  disabled: false,
  defaultValue: "hi",
};

(() => {
  dropdown(sampleInterface);
})();
