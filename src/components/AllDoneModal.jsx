import React from "react";
import { Modal, ModalContent, ModalFooter, Button } from "monday-ui-react-core";
import { useState } from "react";

const AllDoneModal = ({ show, SetShow, openModal, closeModal }) => {
  return (
    <div>
      {/* <div style={{ position: "absolute", right: "50%", bottom: "50%" }}> */}
      <div
        style={{
          height: "354px",
          width: "374px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 15px 50px rgba(0, 0, 0, 0.3)",
          borderRadius: "16px",
        }}
      >
        All Done!
      </div>
    </div>
    // </div>
  );
};

export default AllDoneModal;
