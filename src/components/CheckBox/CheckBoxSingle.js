import { useState } from "react";
import { Box } from "./CheckBox.style";

const CheckBoxSingle = ({disabled,  ...restProps}) => {
  const [checked, setChecked] = useState(false);
  return (
    <Box disabled={disabled} {...restProps}
      bg={checked ? "#1765DC" : "#fff"}
      onClick={() => setChecked(!checked)}
    ></Box>
  );
};

export default CheckBoxSingle;
