import React from "react";
import { Link } from "monday-ui-react-core";
import GroupGmail from "../../images/Group_Gmail.png";

const GmailTab = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "41px",
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
          To save emails and contacts from Gmail to monday.com
        </div>
        <div
          style={{
            fontWeight: 400,
            fontFamily: "Roboto",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#323338",
          }}
        >
          <ol type="number" style={{margin:0}}>
            <li>Setup your board connection in the settings tab</li>
            <li>On Gmail, open an email then click on Offsite button</li>
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
            marginTop: "20px",
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
    </div>
  );
};

export default GmailTab;
