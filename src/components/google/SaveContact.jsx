import React, { useMemo, useState } from "react";
import { DialogContentContainer, Icon, Button } from "monday-ui-react-core";
import {
  CloseSmall,
  Add,
  MoveArrowLeft,
} from "monday-ui-react-core/dist/allIcons";
import favIcon from "../../images/favIcon.png";
import DropDown from "../common/DropDown";
import saveIcon from "../../images/Save.png";
import LoadingScreen from "./LoadingScreen";

const SaveContact = () => {
  const [loading, SetLoading] = useState(false);

  const menuOptions = useMemo(
    () => [
      {
        id: "1",
        value: 1,
        label: "First Name",
        placeHolder: "Choose first name here...",
        options: [
          {
            value: 1,
            label: "Daniel",
          },
          {
            value: 2,
            label: "Sahil",
          },
          {
            value: 3,
            label: "Nir",
          },
        ],
      },
      {
        id: "2",
        value: 2,
        label: "Last Name",
        placeHolder: "Choose last name here...",
        options: [
          {
            value: 1,
            label: "D",
          },
          {
            value: 2,
            label: "S",
          },
          {
            value: 3,
            label: "N",
          },
        ],
      },
      {
        id: "3",
        value: 3,
        label: "Email Address",
        placeHolder: "Choose email here...",
        options: [
          {
            value: 1,
            label: "test1@gmail.com",
          },
          {
            value: 2,
            label: "test2@gmail.com",
          },
          {
            value: 3,
            label: "test3@gmail.com",
          },
        ],
      },
      {
        id: "4",
        value: 4,
        label: "Phone Number",
        placeHolder: "Choose phone number here...",
        options: [
          {
            value: 1,
            label: "Number 1",
          },
          {
            value: 2,
            label: "Number 2",
          },
          {
            value: 3,
            label: "Number 3",
          },
        ],
      },
      {
        id: "5",
        value: 5,
        label: "Job Title",
        placeHolder: "Choose job title here...",
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
            value: 3,
            label: "Job 3",
          },
        ],
      },
      {
        id: "6",
        value: 6,
        label: "Industry",
        placeHolder: "Choose industry here...",
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
            value: 3,
            label: "Industry 3",
          },
        ],
      },
    ],
    []
  );

  const companyOptions = [
    {
      id: "1",
      value: 1,
      label: "Company",
      placeHolder: "Choose email here...",
      options: [
        {
          value: 1,
          label: "test1@gmail.com",
        },
        {
          value: 2,
          label: "test2@gmail.com",
        },
        {
          value: 1,
          label: "test3@gmail.com",
        },
      ],
    },
  ];

  const onSave = () => {
    SetLoading(true);
    const timer = setTimeout(() => {
      SetLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingTop: "31px",
          marginRight: "39px",
        }}
      >
        <div>
          {!loading && (
            <DialogContentContainer
              style={{
                width: "400px",
                height: "auto",
                boxShadow: "0px 4px 8px #DADADA",
                position: "relative",
                padding: "0px",
                backgroundColor: "#F8F9FA",
              }}
            >
              <header
                style={{
                  height: "67px",
                  width: "100%",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.101025)",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    height: "100%",
                    alignItems: "center",
                    gridTemplateColumns: "auto auto auto",
                  }}
                >
                  <div style={{ marginLeft: "22px", color: "#676879" }}>
                    <Icon
                      icon={MoveArrowLeft}
                      iconLabel="my MoveArrowLeft icon"
                      iconSize={27}
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <img src={favIcon} alt="favIcon" />
                  </div>
                  <div
                    style={{
                      textAlign: "right",
                      marginRight: "22px",
                      color: "#676879",
                    }}
                  >
                    <Icon
                      icon={CloseSmall}
                      iconLabel="my CloseSmall icon"
                      iconSize={27}
                    />
                  </div>
                </div>
              </header>

              <div style={{ padding: "30px" }}>
                <div
                  style={{
                    fontWeight: 700,
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    color: "#323338",
                    marginTop: "12px",
                  }}
                >
                  Save Contact
                </div>
                {menuOptions.map((menuItem) => {
                  return <DropDown val={menuItem} />;
                })}

                <div
                  style={{
                    height: "auto",
                    padding: "20px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(197, 199, 208, 0.3)",
                    borderRadius: "4px",
                    marginTop: "15px",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontFamily: "Roboto",
                      fontSize: "18px",
                      color: "#323338",
                    }}
                  >
                    Associate Company
                  </div>
                  {companyOptions.map((menuItem) => {
                    return <DropDown val={menuItem} />;
                  })}
                  <Button
                    kind={Button.kinds.TERTIARY}
                    leftIcon={Add}
                    style={{
                      fontWeight: 400,
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      color: "#323338",
                    }}
                  >
                    Add Company
                  </Button>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "24px",
                  }}
                >
                  <Button
                    onClick={() => onSave()}
                    style={{
                      backgroundColor: "#FFCB00",
                      color: "#4F4F5E",
                    }}
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
            </DialogContentContainer>
          )}

          {loading && <LoadingScreen />}
        </div>
      </div>
    </div>
  );
};

export default SaveContact;
