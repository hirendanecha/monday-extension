import React, { useMemo } from "react";
import { DialogContentContainer, Icon, Button } from "monday-ui-react-core";
import { CloseSmall, MoveArrowLeft } from "monday-ui-react-core/dist/allIcons";
import favIcon from "../../images/favIcon.png";
import DropDown from "../common/DropDown";
import saveIcon from "../../images/Save.png";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen";

const AddDeal = () => {
  const [loading, SetLoading] = useState(false);
  const menuOptions = useMemo(
    () => [
      {
        id: "1",
        value: 1,
        label: "Deal Name",
        placeHolder: "Choose deal name here...",
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
            value: 1,
            label: "Nir",
          },
        ],
      },
      {
        id: "2",
        value: 2,
        label: "Stage",
        placeHolder: "Choose stage here...",
        options: [
          {
            value: 1,
            label: "Stage 1",
          },
          {
            value: 2,
            label: "Stage 2",
          },
          {
            value: 1,
            label: "Stage 3",
          },
        ],
      },
      {
        id: "3",
        value: 3,
        label: "Owner",
        placeHolder: "Choose owner here...",
        options: [
          {
            value: 1,
            label: "Owner 1",
          },
          {
            value: 2,
            label: "Owner 2",
          },
          {
            value: 3,
            label: "Owner 3",
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
            value: 1,
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
            value: 1,
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
            value: 1,
            label: "Industry 3",
          },
        ],
      },
    ],
    []
  );

  const dealOptions = [
    {
      id: "1",
      value: 1,
      label: "Contact",
      placeHolder: "Choose contact here...",
      options: [
        {
          value: 1,
          label: "Contact 1",
        },
        {
          value: 2,
          label: "Contact 2",
        },
        {
          value: 3,
          label: "Contact 3",
        },
      ],
    },
    {
      id: "2",
      value: 2,
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
          value: 3,
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
          marginTop: "31px",
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
                  Add a Deal
                  {menuOptions.map((menuItem) => {
                    return <DropDown val={menuItem} />;
                  })}
                </div>

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
                    Associate Deal
                  </div>
                  {dealOptions.map((menuItem) => {
                    return <DropDown val={menuItem} />;
                  })}
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

export default AddDeal;
