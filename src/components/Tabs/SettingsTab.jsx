import React, { useMemo } from "react";
import {
  Box,
  Toggle,
  Tooltip,
  Dropdown,
  TextField,
  BreadcrumbsBar,
  BreadcrumbItem,
} from "monday-ui-react-core";
import "./settingsTab.css";
import { useState } from "react";
import ContactBoard from "../ContactBoard";
import CompaniesBoard from "../CompaniesBoard";
import DealsBoard from "../DealsBoard";
import AllDoneModal from "../AllDoneModal";

const SettingsTab = () => {
  const [openGmail, SetOpenGmail] = useState(false);
  const [openOption, SetOpenOption] = useState(false);
  const [openContactBoard, SetOpenContactBoard] = useState(false);
  const [openCompaniesBoard, SetOpenCompaniesBoard] = useState(false);
  const [openDealsBoard, SetOpenDealsBoard] = useState(false);
  const [breadCrumb, SetBreadCrumb] = useState("");
  const [showOverlay, SetShowOverlay] = useState(false);
  const [show, SetShow] = useState(false);

  const closeModal = () => {
    SetShow(false);
    SetShowOverlay(false);
  };
  const openModal = () => {
    SetShow(true);
    SetShowOverlay(true);
  };

  const toggleHandler = (val) => {
    console.log(val, "toggel val");
    SetOpenGmail((pre) => !pre);
    SetOpenOption(true);
  };

  const options = useMemo(
    () => [
      {
        id: "1",
        value: 1,
        label: "Contact Board",
      },
      {
        id: "2",
        value: 2,
        label: "Companies/Accounts Board",
      },
      {
        id: "3",
        value: 3,
        label: "Deals Board",
      },
    ],
    []
  );

  const Option = (props) => {
    const { id, label } = props;
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
    // console.log("render", id);
    return (
      <div
        key={id}
        style={{ width: "100%" }}
        onMouseOver={() => {
          // console.log("hover", id);
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

  const optionSelectHandler = (val) => {
    if (val.label === "Contact Board") {
      SetOpenContactBoard(true);
      SetOpenCompaniesBoard(false);
      SetOpenDealsBoard(false);
      SetOpenOption(false);
      SetBreadCrumb(val.label);
    } else if (val.label === "Companies/Accounts Board") {
      SetOpenCompaniesBoard(true);
      SetOpenDealsBoard(false);
      SetOpenContactBoard(false);
      SetOpenOption(false);
      SetBreadCrumb(val.label);
    } else {
      SetOpenDealsBoard(true);
      SetOpenCompaniesBoard(false);
      SetOpenContactBoard(false);
      SetOpenOption(false);
      SetBreadCrumb(val.label);
    }
  };

  return (
    <>
      <div
        style={{ padding: "38px", minHeight: "300px", position: "relative" }}
      >
        <div id={showOverlay ? "overlay" : ""}></div>
        {!openGmail && (
          <div style={{ marginTop: "18px", height: "48px" }}>
            <div
              style={{
                border: "1px solid #C5C7D0",
                borderRadius: "4px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 4px 8px rgba(197, 199, 208, 0.25)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "13px",
                }}
              >
                <div>
                  <Toggle
                    isDefaultSelected={false}
                    areLabelsHidden
                    onChange={(value) => toggleHandler(value)}
                  />
                </div>
                <div
                  style={{
                    fontWeight: 400,
                    fontFamily: "Roboto",
                    fontSize: "16px",
                    color: "#676879",
                  }}
                >
                  Offsite for Gmail
                </div>
              </div>
            </div>

            <div
              style={{
                border: "1px solid #C5C7D0",
                borderRadius: "4px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 4px 8px rgba(197, 199, 208, 0.25)",
                marginTop: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "13px",
                }}
              >
                <div>
                  <Toggle isDefaultSelected={false} areLabelsHidden />
                </div>
                <div
                  style={{
                    fontWeight: 400,
                    fontFamily: "Roboto",
                    fontSize: "16px",
                    color: "#676879",
                  }}
                >
                  Offsite for Linkedin
                </div>
              </div>
            </div>
          </div>
        )}

        {openGmail && (
          <div>
            {breadCrumb && (
              <div style={{ marginTop: "-10px" }}>
                <BreadcrumbsBar type={BreadcrumbsBar.types.INDICATION}>
                  <BreadcrumbItem
                    text={
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: 400,
                          color: "#676879",
                          fontFamily: "Roboto",
                        }}
                      >
                        Gmail CRM Settings
                      </span>
                    }
                  />
                  <BreadcrumbItem
                    text={
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: 400,
                          color: "#676879",
                          fontFamily: "Roboto",
                        }}
                      >
                        {breadCrumb}
                      </span>
                    }
                  />
                </BreadcrumbsBar>

                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#323338",
                    fontFamily: "Roboto",
                    marginTop: "16px",
                    marginBottom: "24px",
                  }}
                >
                  Now you can map your Contacts Board, Companies/
                  <br />
                  Accounts Board, Details Board for saving contacts directly{" "}
                  <br />
                  from Gmail.
                </div>
              </div>
            )}

            <div
              style={{
                width: "100%",
                height: "auto",
                marginTop: "-2px",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Dropdown
                onOptionSelect={(val) => optionSelectHandler(val)}
                openMenuOnFocus={true}
                options={options}
                size={Dropdown.size.LARGE}
                optionRenderer={renderer}
                tooltipContent="Now you can map your Contacts Board, Companies/Accounts Board,Details Board for saving contacts directly from Gmail."
                // onInputChange={selectedOption}
                insideOverflowWithTransformContainer
                searchable={false}
                placeholder={
                  <Tooltip
                    position="bottom"
                    justify="end"
                    content="Now you can map your Contacts Board, 
                      Companies/Accounts Board, 
                      Details Board for saving contacts directly from Gmail."
                    shouldShowOnMount
                    animationType="expand"
                    data-cy="ddddd"
                    className="monday-style-tooltip-arrow.monday-style-arrow-dar"
                    theme="success"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "48px",
                        width: "100%",
                      }}
                    >
                      <Toggle
                        areLabelsHidden
                        onChange={(value) => toggleHandler(value)}
                      />
                      <div
                        style={{
                          fontWeight: 400,
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          color: "#676879",
                          width: "100%",
                        }}
                      >
                        Offsite for Gmail
                      </div>
                    </div>
                  </Tooltip>
                }
                className="dropdown-stories-styles_with-chips"
                noOptionsMessage={() =>
                  "No board found. You can create a new board in monday.com"
                }
              />
            </div>
          </div>
        )}
        {openContactBoard && (
          <ContactBoard
            showOverlay={showOverlay}
            SetShowOverlay={SetShowOverlay}
            show={show}
            SetShow={SetShow}
            openModal={openModal}
            closeModal={closeModal}
          />
        )}
        {openCompaniesBoard && <CompaniesBoard />}
        {openDealsBoard && <DealsBoard />}
        {show && (
          <div
            style={{ position: "absolute", top: "25%", left: "17%", zIndex: 2 }}
          >
            <AllDoneModal
              show={show}
              SetShow={SetShow}
              openModal={openModal}
              closeModal={closeModal}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SettingsTab;
