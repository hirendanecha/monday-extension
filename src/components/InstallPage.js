import React from "react";
import { useNavigate } from "react-router-dom";
import "monday-ui-react-core/dist/main.css";
import { Heading, Button, DialogContentContainer } from "monday-ui-react-core";
import sunimg from "../images/wb_sunny.png";
import btmimg from "../images/image 2.png";

const InstallPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ width: "548px", height: "329px", textAlign: "center" }}>
          <div>
            <img height={"80px"} width={"80px"} src={sunimg} alt="sun-image" />
          </div>
          <Heading
            type={Heading.types.h4}
            value="Offsite helps improve your productivity on any webpage"
            style={{
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily: "Roboto",
              marginTop: "25px",
              margin: "0",
            }}
          />
          <p
            style={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily: "Roboto",
              margin: "0",
            }}
          >
            1. Connect the Offsite app to your monday account
          </p>
          <div>
            <h4
              style={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                fontFamily: "Roboto",
                margin: "0",
              }}
            >
              2. Return here to continue
            </h4>
            <Button
            onClick={() => {navigate("/home")}}
              kind={Button.kinds.SECONDARY}
              style={{ marginTop: "20px", border: "1px solid" }}
            >
              <img src={btmimg} alt="btnimg" />
              <span style={{ marginLeft: "8px" }}>
                Continue with <b>monday</b>{" "}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallPage;
