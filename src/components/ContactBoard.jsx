import React, { useMemo } from "react";
import DropDown from "./common/DropDown";
import { Button } from "monday-ui-react-core";
import saveIcon from "../images/Save.png";
import { useState } from "react";
import * as Yup from 'yup';
import AllDoneModal from "./AllDoneModal";
import TextFieldComponent from "./common/TextFieldComponent";

const ContactBoard = () => {
  const [show, SetShow] = useState(false);
  const [showOverlay, SetShowOverlay] = useState(false);
  const [errorText, SetErrorText] = useState(false);

  const formSchema = Yup.object().shape({
    name: Yup.string().required('Please Select Subscription Type'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    type: Yup.string().required('Please Select Type'),
    company: Yup.string().required('Please Select Company'),
    jobTitle: Yup.number().required('Please Enter JobTitle'),
    industry: Yup.string().required('Please Select Auto Industry'),
  });


  const initialValues = {
    name: "",
    email: "",
    type: "",
    company: "",
    jobTitle: "",
    industry: "",
  };

  const closeModal = () => {
    SetShow(false);
    // SetShowOverlay(false);
  };
  const openModal = () => {
    SetShow(true);
    // SetShowOverlay(true);
  };

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
      //   {
      //     id: "1",
      //     value: 1,
      //     label: "Name",
      //     placeHolder: "Choose Name here",
      //     options: [
      //       {
      //         value: 1,
      //         label: "Daniel",
      //       },
      //       {
      //         value: 2,
      //         label: "Sahil",
      //       },
      //       {
      //         value: 1,
      //         label: "Nir",
      //       },
      //     ],
      //   },
      //   {
      //     id: "2",
      //     value: 2,
      //     label: "Email Address",
      //     placeHolder: "Choose Email Address here",
      //     options: [
      //       {
      //         value: 1,
      //         label: "test1@gmail.com",
      //       },
      //       {
      //         value: 2,
      //         label: "test2@gmail.com",
      //       },
      //       {
      //         value: 1,
      //         label: "test3@gmail.com",
      //       },
      //     ],
      //   },
      {
        id: "3",
        value: 3,
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
        id: "4",
        value: 4,
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
        id: "5",
        value: 5,
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
        id: "6",
        value: 6,
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
    <div style={{ position: "relative" }}>
      {/* <div id={showOverlay ? "overlay" : ""}></div> */}

      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#FFFFFF",
          borderRadius: "4px",
          boxShadow: "0px 4px 8px rgba(197, 199, 208, 0.25)",
          marginTop: "23px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "27px",
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
      {/* {show && (
        <div style={{ position: "absolute", right: "50%", bottom: "50%" }}>
          <AllDoneModal
            show={show}
            SetShow={SetShow}
            openModal={openModal}
            closeModal={closeModal}
          />
        </div>
      )} */}
    </div>
  );
};

export default ContactBoard;
