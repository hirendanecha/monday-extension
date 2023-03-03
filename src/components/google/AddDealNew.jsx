import React, { useMemo, useRef, useState } from "react";
import { DialogContentContainer, Icon, Button } from "monday-ui-react-core";
import {
  CloseSmall,
  MoveArrowLeft,
  PersonRound,
  Person,
  Wand,
} from "monday-ui-react-core/dist/allIcons";
import { Avatar } from "monday-ui-react-core";
import favIcon from "../../images/favIcon.png";
import "./AddDealNew.css";
import LoadingScreen from "./LoadingScreen";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import sunimg from "../../images/wb_sunny.png";
import green from "../../images/green.png";
import red from "../../images/red.png";
import violate from "../../images/violate.png";
import Close from "../icons/Close";
import CopyLinkIcon from "../icons/CopyLinkIcon";
import EmailIcon from "../icons/EmailIcon";
import DropdownChevronUp from "../icons/DropdownChevronUp";
import MoreActions from "../icons/MoreActions";

const AddDealNew = () => {
  const [loading, SetLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [phone, setPhone] = useState();
  const [number, setNumber] = useState();
  const [fieldValue, setFieldValue] = useState("My first task here Yay!");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const labelStyle = {
    fontSize: "16px",
    height: "26px",
    fontWeight: "700",
    lineHeight: "24px",
    fontFamily: "Roboto",
    color: " rgb(50, 51, 56)",
    display: "inherit",
  };

  const handleSubmit = (event) => {
    setShow(false);
    setToast(true);
    setDescription("");
    navigate("/home", {
      state: {
        toast: true,
      },
    });
  };

  const options = useMemo(
    () => [
      {
        id: "1",
        value: 1,
        label: "Lead",
        leftIcon: red,
      },
      {
        id: "2",
        value: 2,
        label: "In progress",
        leftIcon: violate,
      },
      {
        id: "3",
        value: 3,
        label: "Done",
        leftIcon: green,
      },
    ],
    []
  );

  const options1 = useMemo(
    () => [
      {
        id: "1",
        value: "Dor Yehuda",
        label: "Hadas Farhi",
        src: Wand,
        leftIcon: Wand,
        type: Avatar.types.IMG,
        size: Avatar.sizes.SMALL,
      },
      {
        id: "2",
        value: "No",
        label: "Rotem Dekel",
        src: PersonRound,
        leftIcon: PersonRound,
        type: Avatar.types.IMG,
        size: Avatar.sizes.SMALL,
      },
      {
        id: "3",
        value: "Yes",
        label: "Netta Muller",
        src: Person,
        leftIcon: Person,
        type: Avatar.types.IMG,
        size: Avatar.sizes.SMALL,
      },
    ],
    []
  );

  const optionsNew = [
    {
      label: "Option 1",
      value: 1,
    },
    {
      label: "Option 2",
      value: 2,
    },
    {
      label: "Option 3",
      value: 3,
    },
  ];

  const copyToClipboard = () => {
    inputRef.current.select();
    document.execCommand("copy");
    alert("Text copied to clipboard!");
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
        <div>
          {!loading && (
            <DialogContentContainer
              style={{
                width: "400px",
                height: "auto",
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

              <div style={{ padding: "30px" }}>
                <div>
                  <div
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  >
                    <div>
                      <div>
                        <div style={{ height: "auto" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              className="editable-heading--wrapper"
                              style={{
                                fontWeight: "500",
                                fontSize: "32px",
                                lineHeight: "38px",
                                fontFamily: "Roboto",
                                color: "#323338",
                              }}
                            >
                              <div
                                className="monday-style-clickable monday-style-clickable--disable-text-selection"
                                data-testid="clickable"
                                role="input"
                                tabindex="0"
                              >
                                <input
                                  className="heading-component element-type-h1 size-large single-line-ellipsis suggest-edit-on-hover brand-font"
                                  type="text"
                                  style={{ width: "100%" }}
                                  name="txt"
                                  value={fieldValue}
                                  onChange={(e) =>
                                    setFieldValue(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <img
                              width={"41px"}
                              height={"41px"}
                              src={sunimg}
                              alt="sunimg"
                            />
                          </div>

                          <div>
                            <div className="box_wrapper">
                              <label style={labelStyle}>Files</label>
                              <input
                                type="file"
                                name="img1"
                                id="img1"
                                onchange="document.getElementById('file_name').value = this.value.split('\\').pop().split('/').pop()"
                                style={{ marginTop: "4px" }}
                              />
                            </div>

                            <div className="box_wrapper">
                              <label style={labelStyle}>Date</label>
                              <input
                                className="input_component"
                                type="date"
                                id="date"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                              />
                            </div>

                            <div className="box_wrapper">
                              <label style={labelStyle}>Description</label>
                              <input
                                className="input_component"
                                type="text"
                                id="description"
                                name="description"
                                style={{
                                  border: !description
                                    ? "1px solid red"
                                    : "1px solid #c3c6d4",
                                }}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                              />
                              {!description && (
                                <div className="help-block">Error text</div>
                              )}
                            </div>

                            <div className="box_wrapper">
                              <label style={labelStyle}>Link</label>
                              <div style={{ display: "flex" }}>
                                <input
                                  ref={inputRef}
                                  className="input_component"
                                  type="text"
                                  id="link"
                                  name="link"
                                  value={link}
                                  onChange={(e) => setLink(e.target.value)}
                                />
                                <button
                                  className="copy-link-button"
                                  onClick={copyToClipboard}
                                >
                                  <CopyLinkIcon />
                                </button>
                              </div>
                            </div>

                            {show && (
                              <form
                                style={{
                                  height: "auto",
                                }}
                              >
                                <div className="box_wrapper">
                                  <label style={labelStyle}>Email</label>
                                  <div style={{ display: "flex" }}>
                                    <input
                                      className="input_component"
                                      type="text"
                                      id="email"
                                      name="email"
                                      style={{
                                        border: !email
                                          ? "1px solid red"
                                          : "1px solid green",
                                      }}
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button className="copy-link-button">
                                      <EmailIcon />
                                    </button>
                                  </div>
                                </div>

                                <div className="box_wrapper">
                                  <label style={labelStyle}>Status</label>

                                  <div className={"dropdown_wrapper_stories"}>
                                    <div className="dropdown_placeholder">
                                      <select className="input_component box_style">
                                        <option
                                          value=""
                                          disabled
                                          selected
                                          hidden
                                        >
                                          Set status
                                        </option>
                                        {options.map((option) => (
                                          <option
                                            key={option.value}
                                            value={option.value}
                                          >
                                            {option.label}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                </div>

                                <div className="box_wrapper">
                                  <label style={labelStyle}>Rating</label>

                                  <div
                                    className="input_component"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <div>
                                      {[...Array(5)].map((star, index) => {
                                        index += 1;
                                        return (
                                          <button
                                            type="button"
                                            key={index}
                                            className={
                                              index <= (hover || rating)
                                                ? "on"
                                                : "off"
                                            }
                                            onClick={() => setRating(index)}
                                            // onMouseEnter={() => setHover(index)}
                                            // onMouseLeave={() => setHover(rating)}
                                          >
                                            <span
                                              className="star"
                                              style={{ fontSize: "16px" }}
                                            >
                                              <span
                                                className="icon_component icon_component--clickable fa fa fa-star"
                                                role="button"
                                              />
                                            </span>
                                          </button>
                                        );
                                      })}
                                    </div>
                                    {rating > 0 && (
                                      <button
                                        onClick={() => {
                                          setRating(0);
                                        }}
                                      >
                                        <Close />
                                      </button>
                                    )}
                                  </div>
                                </div>

                                <div className="box_wrapper">
                                  <label style={labelStyle}>Person</label>

                                  <div className={"dropdown_wrapper_stories"}>
                                    <div className="dropdown_placeholder">
                                      <select className="input_component box_style">
                                        <option
                                          value=""
                                          disabled
                                          selected
                                          hidden
                                        >
                                          Select a person
                                        </option>
                                        {options1.map((option) => (
                                          <option
                                            key={option.value}
                                            value={option.value}
                                          >
                                            {option.label}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                </div>

                                <div className="box_wrapper">
                                  <label style={labelStyle}>Phone</label>
                                  <PhoneInput
                                    inputProps={{
                                      required: true,
                                    }}
                                    country={"us"}
                                    value={phone}
                                    onChange={(e) => {
                                      setPhone(e);
                                    }}
                                  />
                                </div>

                                <div className="box_wrapper">
                                  <label style={labelStyle}>Number</label>
                                  <input
                                    className="input_component"
                                    type="number"
                                    id="number"
                                    name="number"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                  />
                                </div>
                              </form>
                            )}

                            <div style={{ display: "flex" }}>
                              {!show && (
                                <button onClick={() => setShow((pre) => !pre)}>
                                  <MoreActions />
                                </button>
                              )}
                              {show && (
                                <button onClick={() => setShow((pre) => !pre)}>
                                  <DropdownChevronUp />
                                </button>
                              )}

                              <div
                                onClick={() => setShow((pre) => !pre)}
                                style={{
                                  display: "flex",
                                  cursor: "pointer",
                                }}
                              >
                                <p
                                  style={{
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    lineHeight: "24px",
                                    fontFamily: "Roboto",
                                    margin: "25px 0 0 10px",
                                  }}
                                >
                                  {!show && "6 more Inputs"}
                                  {show && "Hide 6 Inputs"}
                                </p>
                              </div>
                            </div>

                            <div
                              style={{
                                height: "auto",
                                padding: "20px",
                                backgroundColor: "#FFFFFF",
                                border: "1px solid rgba(197, 199, 208, 0.3)",
                                borderRadius: "4px",
                                marginTop: "15px",
                              }}
                            >
                              <div
                                className="box_wrapper"
                                style={{ margin: "0 auto" }}
                              >
                                <label style={labelStyle}>in</label>

                                <div className={"dropdown_wrapper_stories"}>
                                  <div className="dropdown_placeholder">
                                    <select className="input_component box_style">
                                      <option value="" disabled selected hidden>
                                        My Tasks
                                      </option>
                                      {optionsNew.map((option) => (
                                        <option
                                          key={option.value}
                                          value={option.value}
                                        >
                                          {option.label}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "24px",
                              }}
                            >
                              <Button
                                onClick={(event) => handleSubmit(event)}
                                style={{
                                  padding: "8px 16px",
                                  height: "40px",
                                  background: "#0073ea",
                                  color: "white",
                                }}
                              >
                                Create
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContentContainer>
          )}
          {loading && <LoadingScreen />}
        </div>
      </div>
    </div>
  );
};

export default AddDealNew;
