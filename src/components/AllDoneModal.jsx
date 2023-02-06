import React from "react";
import { Button } from "monday-ui-react-core";
import { CloseSmall } from "monday-ui-react-core/dist/allIcons";
import AllDoneIcon from "../images/DoneIcon.png";

const AllDoneModal = ({ show, SetShow, openModal, closeModal }) => {
  return (
    <div>
      <div
        style={{
          height: "354px",
          width: "374px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 15px 50px rgba(0, 0, 0, 0.3)",
          borderRadius: "16px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            kind={Button.kinds.TERTIARY}
            onClick={() => {
              closeModal();
            }}
          >
            <CloseSmall />
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* <Avatar
            size={Avatar.sizes.LARGE}
            type={Avatar.types.ICON}
            icon={Check}
            backgroundColor={"#FFCB00"}
          /> */}
          <img src={AllDoneIcon} alt="AllDoneIcon" />
          <div
            style={{
              fontWeight: 600,
              fontFamily: "Roboto",
              fontSize: "32px",
              color: "#323338",
              marginTop: "30px",
            }}
          >
            All Done!
          </div>
          <div
            style={{
              fontWeight: 400,
              fontFamily: "Roboto",
              fontSize: "16px",
              color: "#323338",
              marginTop: "25px",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet consectetur.
            <br /> Fermentum sit rutrum amet massa
            <br /> aenean.
          </div>
          <Button
            onClick={() => {
              closeModal();
            }}
            style={{
              backgroundColor: "#FFCB00",
              color: "#4F4F5E",
              marginTop: "35px",
            }}
          >
            Close Window
          </Button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AllDoneModal;
