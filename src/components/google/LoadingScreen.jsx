import React from "react";
import { DialogContentContainer } from "monday-ui-react-core";
import LoadingImage from "../../images/Loading.png";
import "./loadingScreen.css";

const LoadingScreen = () => {
  return (
    <div>
      <DialogContentContainer
        style={{
          width: "400px",
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
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <img
            className="rotate"
            src={LoadingImage}
            alt="Loading"
            height={55}
            width={55}
          />
          <div
            style={{
              fontWeight: 400,
              fontFamily: "Roboto",
              fontSize: "18px",
              color: "#676879",
              marginTop: "20px",
            }}
          >
            Loading...
          </div>
        </div>
      </DialogContentContainer>
    </div>
  );
};

export default LoadingScreen;
