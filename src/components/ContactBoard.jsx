import React, { useMemo } from "react";
import DropDown from "./common/DropDown";
import { Button } from "monday-ui-react-core";
import saveIcon from "../images/Save.png";
import TextFieldComponent from "./common/TextFieldComponent";

const ContactBoard = ({ openModal }) => {
  const textFieldOptions = [
    {
      id: "1",
      value: 1,
      label: "Name",
      placeHolder: "Choose Name here",
    },
    {
      id: "2",
      value: 2,
      label: "Email Address",
      placeHolder: "Choose Email Address here",
    },
  ];

  const menuOptions = useMemo(
    () => [
      {
        id: "1",
        value: 1,
        label: "Type (optional)",
        placeHolder: "Choose Type here",
        options: [
          {
            value: 1,
            label: "Type 1",
          },
          {
            value: 2,
            label: "Type 2",
          },
          {
            value: 1,
            label: "Type 3",
          },
        ],
      },
      {
        id: "2",
        value: 2,
        label: "Company (optional)",
        placeHolder: "Choose company column",
        options: [
          {
            value: 1,
            label: "Column 1",
          },
          {
            value: 2,
            label: "Column 2",
          },
          {
            value: 1,
            label: "Column 3",
          },
        ],
      },
      {
        id: "3",
        value: 3,
        label: "Job Title (optional)",
        placeHolder: "Choose job column",
        options: [
          {
            value: 1,
            label: "Job 1",
          },
          {
            value: 2,
            label: "Job 2",
          },
          {
            value: 1,
            label: "Job 3",
          },
        ],
      },
      {
        id: "4",
        value: 4,
        label: "Industry (optional)",
        placeHolder: "Choose industry column",
        options: [
          {
            value: 1,
            label: "Industry 1",
          },
          {
            value: 2,
            label: "Industry 2",
          },
          {
            value: 1,
            label: "Industry 3",
          },
        ],
      },
    ],
    []
  );

  return (
    <>
      <div>
        <div
          style={{
            width: "100%",
            height: "520px",
            backgroundColor: "#FFFFFF",
            borderRadius: "4px",
            boxShadow: "0px 4px 8px rgba(197, 199, 208, 0.25)",
            marginTop: "23px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "27px",
            overflow: "auto",
          }}
        >
          {textFieldOptions.map((data) => {
            return <TextFieldComponent val={data} />;
          })}
          {menuOptions.map((menuItem) => {
            return <DropDown val={menuItem} />;
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "23px",
          }}
        >
          <div>
            <Button kind={Button.kinds.SECONDARY} style={{ width: "68px" }}>
              Back
            </Button>
          </div>
          <div style={{ marginLeft: "8px" }}>
            <Button
              onClick={() => {
                openModal();
              }}
              style={{ backgroundColor: "#FFCB00", color: "#4F4F5E" }}
            >
              <img
                src={saveIcon}
                alt="Save Icon"
                style={{ marginRight: "6px" }}
              />
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactBoard;
