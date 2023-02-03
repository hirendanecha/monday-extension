import { React } from "react";
import {
  DialogContentContainer,
  Icon,
  TabsContext,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "monday-ui-react-core";
import { MyWeek, Email, Settings } from "monday-ui-react-core/dist/allIcons";
import "./home.css";
import favIcon from "../images/favIcon.png";
import ssImage from "../images/Screenshot.png";
import "semantic-ui-css/semantic.min.css";
import TaskTab from "./Tabs/TaskTab";
import GmailTab from "./Tabs/GmailTab";
import ScreenshotTab from "./Tabs/ScreenshotTab";
import SettingsTab from "./Tabs/SettingsTab";

const Home = () => {
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
                <Tab>
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
          </DialogContentContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;
