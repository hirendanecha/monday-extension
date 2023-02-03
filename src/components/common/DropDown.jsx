import React from "react";
import { Dropdown } from "monday-ui-react-core";

const DropDown = ({ val }) => {
  console.log(val, "val");
  const Option = (props) => {
    const { label } = props;
    return (
      <>
        <div
          style={{
            height: "35px",
            display: "flex",
            alignItems: "center",
            fontSize: "16px",
          }}
        >
          {label}
        </div>
        <hr
          style={{
            marginBottom: "-8.8px",
            marginLeft: "-18px",
            marginRight: "-18px",
            border: "1px solid #C5C7D0",
          }}
        />
      </>
    );
  };

  const RenderOption = (props) => {
    const { id } = props;
    return (
      <div
        key={id}
        style={{ width: "100%" }}
        onMouseOver={() => {
        }}
      >
        <Option {...props} />
      </div>
    );
  };

  const renderer = (props) => {
    return (
      <>
        <RenderOption {...props} />
      </>
    );
  };
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "auto",
          marginTop: "-2px",
          paddingTop: "20px",
        }}
      >
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
        <Dropdown
          //   onOptionSelect={(val) => optionSelectHandler(val)}
          openMenuOnFocus={true}
          options={val.options}
          size={Dropdown.size.LARGE}
        //   optionRenderer={renderer}
          tooltipContent="Now you can map your Contacts Board, Companies/Accounts Board,Details Board for saving contacts directly from Gmail."
          insideOverflowWithTransformContainer
          searchable={false}
          placeholder={
            <div
              style={{
                fontWeight: 400,
                fontFamily: "Roboto",
                fontSize: "16px",
                color: "#676879",
                width: "100%",
              }}
            >
              {val.placeHolder}
            </div>
          }
          className="dropdown-stories-styles_with-chips"
          noOptionsMessage={() =>
            "No board found. You can create a new board in monday.com"
          }
        />
      </div>
    </div>
  );
};

export default DropDown;
