import CheckBoxSingle from "./CheckBoxSingle";
import { CheckBoxContainer } from "./CheckBox.style";

const CheckBox = ({disabled}) => {
  return (
    <CheckBoxContainer>
      <CheckBoxSingle disabled={disabled}></CheckBoxSingle>
    </CheckBoxContainer>
  );
};

export default CheckBox;
