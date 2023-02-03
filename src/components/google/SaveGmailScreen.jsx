import React from "react";
import { DialogContentContainer, Icon, Link } from "monday-ui-react-core";
import {
  CloseSmall,
  MoveArrowLeft,
} from "monday-ui-react-core/dist/allIcons";
import favIcon from "../../images/favIcon.png";
import GroupGmail from "../../images/Group_Gmail.png";

const SaveGmailScreen = () => {
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
              width: "350px",
              height: "100vh",
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

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <div>
                <img src={GroupGmail} alt="GroupGmail" />
              </div>
              <div
                style={{
                  fontWeight: 700,
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#323338",
                  marginTop: "17px",
                  textAlign: "center",
                }}
              >
                To save emails and contacts from <br /> Gmail to monday.com
              </div>
              <div
                style={{
                  fontWeight: 400,
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#323338",
                  textAlign: "center",
                }}
              >
                <ol type="number">
                  <li>
                    Setup your board connection in the <br /> settings tab
                  </li>
                  <li>
                    On Gmail, open an email then click <br /> on Offsite button
                  </li>
                </ol>
              </div>
              <div
                style={{
                  fontWeight: 400,
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  lineHeight: "24px",
                  textAlign: "center",
                  textDecoration: "underline",
                  marginTop: "8px",
                }}
              >
                <Link
                  text={
                    <div style={{ color: "#0073EA" }}>
                      Learn More | Configure Boards
                    </div>
                  }
                  href="https://www.monday.com"
                  inheritFontSize
                />
              </div>
            </div>
          </DialogContentContainer>
        </div>
      </div>
    </div>
  );
};

export default SaveGmailScreen;
