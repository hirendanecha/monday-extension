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
  AlertBanner,
  AlertBannerText,
  AlertBannerLink,
  Loader,
  TabsContext,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
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
  MyWeek,
  Email,
  Settings,
} from "monday-ui-react-core/dist/allIcons";
import "./home.css";
import sunimg from "../images/wb_sunny.png";
import green from "../images/green.png";
import red from "../images/red.png";
import violate from "../images/violate.png";
import taskImage from "../images/Task.png";
import gmailImage from "../images/Gmail.png";
import settingImage from "../images/Settings.png";
import favIcon from "../images/favIcon.png";
import ssImage from "../images/Screenshot.png";
import "semantic-ui-css/semantic.min.css";
import TaskTab from "./Tabs/TaskTab";
import GmailTab from "./Tabs/GmailTab";
import ScreenshotTab from "./Tabs/ScreenshotTab";
import SettingsTab from "./Tabs/SettingsTab";

const Home = () => {
  const [show, setShow] = useState(false);
  const { state } = useLocation();
  const [opentost, setOpenTost] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();
  console.log(state, "seeeee");

  useEffect(() => {
    var t, k;
    if (!!state?.toast) {
      setShowLoader(true);
      t = setTimeout(() => {
        setShowLoader(false);
        setOpenTost(true);
      }, 3000);
    }
    if (!!state?.toast) {
      k = setTimeout(() => {
        setOpenTost(false);
        navigate("/home", {
          state: {
            toast: false,
          },
        });
      }, 6000);
    }
    return () => {
      if (t) {
        clearTimeout(t);
        clearTimeout(k);
      }
    };
  }, [state?.toast]);

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
          <DialogContentContainer
            style={{
              width: "548px",
              height: "auto",
              boxShadow: "0px 15px 50px rgba(0, 0, 0, 0.3)",
              position: "relative",
              padding: "0px",
              backgroundColor: "#F9FAFB",
            }}
          >
            <div id={showLoader ? "overlay" : ""}></div>
            {showLoader && (
              <div
                style={{ position: "absolute", right: "50%", bottom: "50%" }}
              >
                <Loader size={40} />
              </div>
            )}

            <TabsContext
              active
              className="monday-storybook-tabs_bg-color"
              iconSide="top"
              iconType="FA"
              fontSize={29}
            >
              <TabList
                size="lg"
                style={{
                  backgroundColor: "rgba(255, 203, 0, 0.1)",
                }}
              >
                <Tab
                // icon={MyWeek}
                // iconSide="top"
                >
                  <Icon
                    icon={MyWeek}
                    style={{
                      height: "29px",
                      width: "29px",
                      color: "#676879",
                    }}
                  />
                  <div style={{ fontSize: "12px", fontWeight: 400 }}>Task</div>
                </Tab>
                <Tab>
                  <Icon
                    icon={Email}
                    iconSize={29}
                    style={{
                      color: "#676879",
                    }}
                  />
                  <div style={{ fontSize: "12px", fontWeight: 400 }}>Gmail</div>
                </Tab>
                <Tab>
                  <img src={ssImage} alt="Screenshot" height={29} />
                  <div style={{ fontSize: "12px", fontWeight: 400 }}>
                    Screenshot
                  </div>
                </Tab>
                <Tab>
                  <Icon
                    icon={Settings}
                    style={{
                      height: "29px",
                      width: "29px",
                      color: "#676879",
                    }}
                  />
                  <div style={{ fontSize: "12px", fontWeight: 400 }}>
                    Settings
                  </div>
                </Tab>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "70px",
                  }}
                >
                  <img src={favIcon} alt="favIcon" height={29} width={29} />
                </div>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <TaskTab />
                </TabPanel>
                <TabPanel>
                  <GmailTab />
                </TabPanel>
                <TabPanel>
                  <ScreenshotTab />
                </TabPanel>
                <TabPanel>
                  <SettingsTab />
                </TabPanel>
              </TabPanels>
            </TabsContext>

            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                height: "329px",
                position: "relative",
              }}
            >
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {opentost && (
                    <AlertBanner
                      backgroundColor={AlertBanner.backgroundColors.POSITIVE}
                      onClose={() => setOpenTost(false)}
                    >
                      <AlertBannerText text="Tasked saved !See it in" />
                      <AlertBannerLink
                        text="https://monday.com"
                        href="https://monday.com"
                      />
                    </AlertBanner>
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
                      marginTop: "15px",
                    }}
                  >
                    <p>in</p>
                  </div>
                  <Tooltip
                    content="Select your default task board by searching and marking it with a star"
                    shouldShowOnMount
                    animationType="expand"
                    data-cy="ddddd"
                    className="monday-style-tooltip-arrow.monday-style-arrow-dar"
                    theme="success"
                  >
                    <div
                      style={{
                        width: "221px",
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
                        openMenuOnFocus={true}
                        options={options}
                        optionRenderer={renderer}
                        onInputChange={selectedOption}
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
            </div> */}
          </DialogContentContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;
