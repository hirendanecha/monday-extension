import { React, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./mytask.css";
import { Avatar } from "monday-ui-react-core";
import { PersonRound, Person, Wand } from "monday-ui-react-core/dist/allIcons";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import sunimg from "../../images/wb_sunny.png";
import green from "../../images/green.png";
import red from "../../images/red.png";
import violate from "../../images/violate.png";
import Close from "../icons/Close";
import DropdownChevronUp from "../icons/DropdownChevronUp";
import MoreActions from "../icons/MoreActions";

const MyTask = () => {
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
    fontWeight: "400",
    lineHeight: "24px",
    fontFamily: "Roboto",
    color: "#676879",
    width: "145px",
    marginTop: "8px",
  };
  console.log(description, "state...");

  const handleSubmit = (event) => {
    console.log(description, "submit...");
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
        <div
          style={{
            width: "548px",
            height: "auto",
            boxShadow: "0px 15px 50px rgba(0, 0, 0, 0.3)",
            borderRadius: "8px",
            backgroundColor: '#FFFFFF"',
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                height: "auto",
              }}
            >
              <div style={{ height: "auto" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    className="editable-heading--wrapper"
                    style={{
                      fontWeight: "500",
                      fontSize: "32px",
                      lineHeight: "38px",
                      fontFamily: "Roboto",
                      color: "#323338",
                      marginLeft: "15px",
                      marginTop: "30px",
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
                        name="txt"
                        value={fieldValue}
                        onChange={(e) => setFieldValue(e.target.value)}
                      />
                    </div>
                  </div>
                  <img
                    width={"41px"}
                    height={"41px"}
                    src={sunimg}
                    alt="sunimg"
                    style={{ marginTop: "13px", marginRight: "14px" }}
                  />
                </div>

                <div
                  style={{
                    height: "auto",
                    marginLeft: "22px",
                    marginRight: "38px",
                    marginTop: "15px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <label style={labelStyle}>Files</label>
                    <input
                      type="file"
                      name="img1"
                      id="img1"
                      onchange="document.getElementById('file_name').value = this.value.split('\\').pop().split('/').pop()"
                      style={{ marginTop: "10px" }}
                    />
                  </div>
                  <div style={{ display: "flex", marginTop: "24px" }}>
                    <label style={labelStyle}>Date</label>
                    <div className="input-component" aria-busy="false">
                      <div className="input-component__label--wrapper">
                        <div className="input-component__input-wrapper input-component__input-wrapper--size-medium">
                          <input
                            className="input-component__input"
                            type="date"
                            id="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", marginTop: "24px" }}>
                    <label style={labelStyle}>Description</label>
                    <div className="input-component" aria-busy="false">
                      <div className="input-component__label--wrapper">
                        <div
                          className="input-component__input-wrapper input-component__input-wrapper--size-medium"
                          style={{
                            border: !description ? "1px solid red" : "none",
                          }}
                        >
                          <input
                            className="input-component__input"
                            type="text"
                            id="description"
                            name="description"
                            style={{
                              border: !description
                                ? "none"
                                : "1px solid #c3c6d4",
                            }}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                          {!description && (
                            <div className="help-block">Error text</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", marginTop: "24px" }}>
                    <label style={labelStyle}>Link</label>
                    <div className="input-component" aria-busy="false">
                      <div className="input-component__label--wrapper">
                        <div className="input-component__input-wrapper input-component__input-wrapper--size-medium">
                          <input
                            ref={inputRef}
                            className="input-component__input"
                            type="text"
                            id="link"
                            name="link"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                          />
                          {/* <button onClick={copyToClipboard}>
                            Copy to Clipboard
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {show && (
                  <div style={{ height: "auto" }}>
                    <form
                      style={{
                        height: "auto",
                        marginLeft: "22px",
                        marginRight: "38px",
                      }}
                    >
                      <div style={{ display: "flex", marginTop: "24px" }}>
                        <label style={labelStyle}>Email</label>
                        <div className="input-component" aria-busy="false">
                          <div className="input-component__label--wrapper">
                            <div
                              className="input-component__input-wrapper input-component__input-wrapper--size-medium"
                              style={{
                                border: !email
                                  ? "1px solid red"
                                  : "1px solid green",
                              }}
                            >
                              <input
                                className="input-component__input"
                                type="text"
                                id="email"
                                name="email"
                                style={{
                                  border: "none",
                                }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex", marginTop: "24px" }}>
                        <label style={labelStyle}>Status</label>
                        <div
                          style={{
                            width: "100%",
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "24px",
                            fontFamily: "Roboto",
                          }}
                        >
                          <div className={"dropdown_wrapper"}>
                            <div className={"dropdown_wrapper_stories"}>
                              <div className="dropdown_placeholder">
                                <select
                                  className="select_box"
                                  style={{ height: "40px", fontSize: "14px" }}
                                >
                                  <option value="" disabled selected hidden>
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
                        </div>
                      </div>
                      <div style={{ display: "flex", marginTop: "24px" }}>
                        <label style={labelStyle}>Rating</label>
                        <div
                          className="star-rating"
                          style={{
                            border: "1px solid rgba(0,0,0,.25)",
                            width: "470px",
                            height: "38px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            borderRadius: "3px",
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
                                    index <= (hover || rating) ? "on" : "off"
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
                      <div style={{ display: "flex", marginTop: "24px" }}>
                        <label style={labelStyle}>Person</label>
                        <div
                          style={{
                            width: "100%",
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "24px",
                            fontFamily: "Roboto",
                          }}
                        >
                          <div className={"dropdown_wrapper"}>
                            <div className={"dropdown_wrapper_stories"}>
                              <div className="dropdown_placeholder">
                                <select
                                  className="select_box"
                                  style={{ height: "40px", fontSize: "14px" }}
                                >
                                  <option value="" disabled selected hidden>
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
                        </div>
                      </div>
                      <div style={{ display: "flex", marginTop: "24px" }}>
                        <label style={{ ...labelStyle, width: "115px" }}>
                          Phone
                        </label>
                        <div
                          style={{
                            width: "362px",
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "24px",
                            fontFamily: "Roboto",
                            height: "40px",
                          }}
                        >
                          <div
                            style={{
                              width: "362px",
                              fontSize: "16px",
                              fontWeight: "400",
                              lineHeight: "24px",
                              fontFamily: "Roboto",
                              height: "40px",
                            }}
                          >
                            <PhoneInput
                              inputProps={{
                                required: true,
                              }}
                              country={"us"}
                              value={phone}
                              onChange={(e) => {
                                setPhone(e.target.value);
                              }}
                              style={{
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "24px",
                                fontFamily: "Roboto",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex", marginTop: "24px" }}>
                        <label style={labelStyle}>Number</label>
                        <div
                          style={{
                            width: "372px",
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "24px",
                            fontFamily: "Roboto",
                            height: "40px",
                          }}
                        >
                          <input
                            type="number"
                            name="number"
                            id="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            style={{
                              width: "363px",
                              fontSize: "16px",
                              fontWeight: "400",
                              lineHeight: "24px",
                              fontFamily: "Roboto",
                              height: "39px",
                              border: "1px solid rgba(0,0,0,.25)",
                            }}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                )}
                <div style={{ display: "flex", marginLeft: "19px" }}>
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
                    style={{ display: "flex", cursor: "pointer" }}
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
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                  marginTop: "15px",
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
                    <div className={"dropdown_wrapper"}>
                      <div className={"dropdown_wrapper_stories"}>
                        <div className="dropdown_placeholder">
                          <select
                            className="select_box"
                            style={{ height: "40px", fontSize: "14px" }}
                          >
                            <option value="" disabled selected hidden>
                              My Tasks
                            </option>
                            {optionsNew.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ marginRight: "36px", marginTop: "6px" }}>
                  <button
                    style={{
                      padding: "8px 16px",
                      height: "40px",
                      background: "#0073ea",
                      color: "white",
                    }}
                    onClick={(event) => handleSubmit(event)}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTask;
