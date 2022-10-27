import { React, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./mytask.css";
import {
  Avatar,
  DialogContentContainer,
  Heading,
  Icon,
  Dropdown,
  Button,
  Tooltip,
  Combobox,
  IconButton,
  MenuItem,
  Menu,
  Toast,
  EditableHeading,
  Modal,
} from "monday-ui-react-core";
import {
  MoreActions,
  Favorite,
  DoubleCheck,
  Offline,
  Wand,
  ThumbsUp,
  Time,
  Update,
  Upgrade,
} from "monday-ui-react-core/dist/allIcons";
import sunimg from "../images/wb_sunny.png";
import green from "../images/green.png";
import red from "../images/red.png";
import violate from "../images/violate.png";
import "semantic-ui-css/semantic.min.css";

const Home = () => {
  const [show, setShow] = useState(false);
  const [opentost, setOpenTost] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state, "seeeee");

  const actions = useMemo(
    () => [
      {
        type: Toast.actionTypes.LINK,
        text: "monday.com",
        href: "https://monday.com",
      },
    ],
    []
  );

  const options = useMemo(
    () => [
      {
        id: "1",
        value: 1,
        label: "Option 1",
        leftIcon: Favorite,
      },
      {
        id: "2",
        value: 2,
        label: "Option 2",
        leftIcon: Favorite,
      },
      {
        id: "3",
        value: 3,
        label: "Option 3",
        leftIcon: Favorite,
      },
      {
        id: "4",
        value: 4,
        label: "Option 4",
        leftIcon: Favorite,
      },
      {
        id: "5",
        value: 5,
        label: "Option 5",
        leftIcon: Favorite,
      },
    ],
    []
  );

  const renderer = (props) => {
    const { id, label, leftIcon: Icon } = props;
    return (
      <div key={id}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {label}
          <Icon />
        </div>
      </div>
    );
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
        <DialogContentContainer
          style={{
            width: "548px",
            height: "auto",
            boxShadow: "0px 15px 50px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                height: "329px",
              }}
            >
              {/* <Modal show={true} style={{height:"50px", width:"300px"}} /> */}
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {state && state.toast && (
                    // <div style={{width:"480px"}}>
                    <Toast
                      width={"500px"}
                      open={opentost}
                      onClose={() => setOpenTost(false)}
                      // closeable= {false}
                      // hideIcon={true}
                      actions={actions}
                      autoHideDuration={1500}
                      className="monday-storybook-toast_wrapper"
                      type={Toast.types.POSITIVE}
                      // style={{width:"480px"}}
                    >
                      Tasked saved!
                    </Toast>
                    // </div>
                  )}
                  <EditableHeading
                    type={EditableHeading.types.h1}
                    placeholder="Write your task name..."
                    brandFont={true}
                    style={{
                      fontWeight: "500",
                      fontSize: "32px",
                      lineHeight: "38px",
                      fontFamily: "Roboto",
                      color: "#676879",
                      marginLeft: "15px",
                      marginTop: "30px",
                    }}
                  />
                  <img
                    width={"41px"}
                    height={"41px"}
                    src={sunimg}
                    alt="sunimg"
                    style={{ marginTop: "13px", marginRight: "14px" }}
                  />
                </div>

                <div style={{ display: "flex" }}>
                  {/* <Icon
                    onClick={() => setShow((pre) => !pre)}
                    iconType={Icon.type.SVG}
                    icon={MoreActions}
                    iconLabel="my bolt svg icon"
                    iconSize={20}
                  /> */}

                  {/* <div
                    onClick={() => setShow(true)}
                    style={{ display: "flex", cursor: "pointer" }}
                  >
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        fontFamily: "Roboto",
                        margin: "0 0 0 10px",
                      }}
                    >
                      4 more Inputs{" "}
                    </p>
                  </div> */}

                  {/* {show && (
                    <>
                      <div
                        style={{
                          cursor: "pointer",
                          width: "221px",
                          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
                          borderRadius: "4px",
                        }}
                      >
                        <Menu>
                          <MenuItem
                            onClick={() => {
                              // setShow(false);
                              navigate("/mytask");
                            }}
                            title="My Tasks"
                            style={optionStyle}
                            iconType={Icon.type.SVG}
                            icon={Favorite}
                            iconLabel="my bolt svg icon"
                            iconSize={20}
                          />
                          <MenuItem
                            // onClick={() => setShow(false)}
                            title="Option 2"
                            style={optionStyle}
                            iconType={Icon.type.SVG}
                            icon={Favorite}
                            iconLabel="my bolt svg icon"
                            iconSize={20}
                          />
                          <MenuItem
                            // onClick={() => setShow(false)}
                            title="Option 3"
                            style={{...optionStyle, color:"yellow"}}
                            iconType={Icon.type.SVG}
                            iconLabel="my bolt svg icon"
                            iconSize={20}
                            icon={Favorite}
                          />
                          <MenuItem
                            // onClick={() => setShow(false)}
                            title="Option 4"
                            style={optionStyle}
                            iconType={Icon.type.SVG}
                            icon={Favorite}
                            iconLabel="my bolt svg icon"
                            iconSize={20}
                          />
                        </Menu>
                      </div>
                    </>
                  )} */}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <div style={{ display: "flex", marginLeft: "22px" }}>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      fontFamily: "Roboto",
                      marginTop:"15px"
                    }}
                  >
                    <p>in</p>
                  </div>
                  <Tooltip
                    content="Select your default task board by searching and marking it with a star"
                    shouldShowOnMount
                    animationType="expand"
                    tip={false}
                    data-cy="ddddd"
                    className="monday-style-tooltip-arrow.monday-style-arrow-dar"
                    style={{
                      backgroundColor: "#FEDB39",
                      color: "black",
                      width: "254px",
                    }}
                  >
                    <div
                      style={{
                        width: "221px",
                        // height: "40px",
                        marginTop: "7px",
                        marginLeft: "8px",
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        fontFamily: "Roboto",
                      }}
                    >
                      <Dropdown
                        onOptionSelect={() => navigate("/mytask")}
                        // defaultValue={[options[0]]}
                        options={options}
                        optionRenderer={renderer}
                        placeholder="My Tasks"
                        className="dropdown-stories-styles_with-chips"
                        noOptionsMessage={() =>
                          "No board found. You can create a new board in monday.com"
                        }
                        menuPlacement="top"
                      />
                    </div>
                  </Tooltip>
                </div>
                <div style={{ marginRight: "55px", marginTop: "6px" }}>
                  <Button disabled>Create</Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContentContainer>
      </div>
    </div>
  );
};

export default Home;
