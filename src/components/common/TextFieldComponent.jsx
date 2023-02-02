import React from "react";
import { TextField, Chips } from "monday-ui-react-core";
import { CloseSmall } from "monday-ui-react-core/dist/allIcons";

const TextFieldComponent = ({ val }) => {
  console.log("render");
  const onChangeHandler = (val) => {
    <Chips label={val} readOnly isClickable />
  };
  return (
    <div>
      <div style={{ paddingTop: "20px" }}>
        <div
          style={{
            fontWeight: 700,
            fontFamily: "Roboto",
            fontSize: "16px",
            color: "#323338",
            height: "26px",
          }}
        >
          {val.label}
        </div>
        <TextField
          placeholder={val.placeHolder}
          size={TextField.sizes.LARGE}
          // value={<Chips label={val.label} readOnly isClickable />}
          validation={{
            status: "error",
            text: "Missing field",
          }}
          iconName={CloseSmall}
          onChange={(val) => onChangeHandler(val)}
        />
      </div>
    </div>
  );
};

export default TextFieldComponent;
