import React, { useMemo, useRef, useState } from "react";
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
import MoveArrowLeft from "../icons/MoveArrowLeft";
import CloseSmall from "../icons/CloseSmall";
import PersonRound from "../icons/PersonRound";
import Wand from "../icons/Wand";
import Person from "../icons/Person";

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
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [personSelectedOptions, setPersonSelectedOptions] = useState([]);
  const [tasksSelectedOptions, setTasksSelectedOptions] = useState([]);
  const [personOptions, setPersonOptions] = useState([
    {
      id: "1",
      value: "hadasfarhi",
      label: "Hadas Farhi",
      src: <Wand />,
      leftIcon: <Wand />,
      // type: Avatar.types.IMG,
      // size: Avatar.sizes.SMALL,
    },
    {
      id: "2",
      value: "rotemdekel",
      label: "Rotem Dekel",
      src: <PersonRound />,
      leftIcon: <PersonRound />,
      // type: Avatar.types.IMG,
      // size: Avatar.sizes.SMALL,
    },
    {
      id: "3",
      value: "nettamuller",
      label: "Netta Muller",
      src: <Person />,
      leftIcon: <Person />,
      // type: Avatar.types.IMG,
      // size: Avatar.sizes.SMALL,
    },
  ]);
  const [options, setOptions] = useState([
    {
      id: "1",
      value: "lead",
      label: "Lead",
      leftIcon: red,
    },
    {
      id: "2",
      value: "inprogress",
      label: "In progress",
      leftIcon: violate,
    },
    {
      id: "3",
      value: "done",
      label: "Done",
      leftIcon: green,
    },
  ]);

  const [taskOptions, setTaskOptions] = useState([
    {
      label: "Option 1",
      value: "option1",
    },
    {
      label: "Option 2",
      value: "option2",
    },
    {
      label: "Option 3",
      value: "option3",
    },
  ]);

  const handleOptionSelect = (event, index) => {
    const selectedOptionValue = event.target.value;
    if (index === 1) {
      const selectedOption = options.find(
        (option) => option.value === selectedOptionValue
      );
      if (selectedOption) {
        setSelectedOptions([...selectedOptions, selectedOption]);
      }
    } else if (index === 2) {
      const selectedOption = personOptions.find(
        (option) => option.value === selectedOptionValue
      );
      if (selectedOption) {
        setPersonSelectedOptions([...personSelectedOptions, selectedOption]);
      }
    } else {
      const selectedOption = taskOptions.find(
        (option) => option.value === selectedOptionValue
      );
      if (selectedOption) {
        setTasksSelectedOptions([...tasksSelectedOptions, selectedOption]);
      }
    }
  };

  const handleOptionRemove = (optionValue, index) => {
    if (index === 1) {
      const newSelectedOptions = selectedOptions.filter(
        (option) => option.value !== optionValue
      );
      setSelectedOptions(newSelectedOptions);
    } else if (index === 2) {
      const newSelectedOptions = personSelectedOptions.filter(
        (option) => option.value !== optionValue
      );
      setPersonSelectedOptions(newSelectedOptions);
    } else {
      const newSelectedOptions = tasksSelectedOptions.filter(
        (option) => option.value !== optionValue
      );
      setTasksSelectedOptions(newSelectedOptions);
    }
  };

  const handleSearch = (event, index) => {
    if (index === 1) {
      const searchTerm = event.target.value;
      if (searchTerm.trim()) {
        const filteredOptions = options.filter((option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setOptions(filteredOptions);
      } else {
        setOptions([
          {
            id: "1",
            value: "lead",
            label: "Lead",
            leftIcon: red,
          },
          {
            id: "2",
            value: "inprogress",
            label: "In progress",
            leftIcon: violate,
          },
          {
            id: "3",
            value: "done",
            label: "Done",
            leftIcon: green,
          },
        ]);
      }
    } else if (index === 2) {
      const searchTerm = event.target.value;
      if (searchTerm.trim()) {
        const filteredOptions = personOptions.filter((option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setPersonOptions(filteredOptions);
      } else {
        setPersonOptions([
          {
            id: "1",
            value: "lead",
            label: "Lead",
            leftIcon: red,
          },
          {
            id: "2",
            value: "inprogress",
            label: "In progress",
            leftIcon: violate,
          },
          {
            id: "3",
            value: "done",
            label: "Done",
            leftIcon: green,
          },
        ]);
      }
    } else {
      const searchTerm = event.target.value;
      if (searchTerm.trim()) {
        const filteredOptions = taskOptions.filter((option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setTaskOptions(filteredOptions);
      } else {
        setTaskOptions([
          {
            id: "1",
            value: "lead",
            label: "Lead",
            leftIcon: red,
          },
          {
            id: "2",
            value: "inprogress",
            label: "In progress",
            leftIcon: violate,
          },
          {
            id: "3",
            value: "done",
            label: "Done",
            leftIcon: green,
          },
        ]);
      }
    }
  };

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
            <div
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
                    <button>
                      <MoveArrowLeft />
                    </button>
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
                    <button>
                      <CloseSmall />
                    </button>
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

                                <div className="box_wrapper" id="myDropdown">
                                  <label style={labelStyle}>Status</label>
                                  <div
                                    className="input_component box_style"
                                    style={{ height: "100%" }}
                                  >
                                    {selectedOptions.map((option) => (
                                      <div className="value_css">
                                        <>
                                          <span> {option.label} </span>
                                          <button
                                            className="value_css_btn"
                                            type="button"
                                            onClick={() =>
                                              handleOptionRemove(
                                                option.value,
                                                1
                                              )
                                            }
                                          >
                                            x
                                          </button>
                                        </>
                                      </div>
                                    ))}

                                    <input
                                      type="text"
                                      placeholder="Set Status"
                                      onChange={(e) => handleSearch(e, 1)}
                                      style={{
                                        border: "none",
                                        borderBottom: "1px solid black",
                                      }}
                                    />
                                  </div>
                                  <br />
                                  <select
                                    multiple
                                    value={selectedOptions.map(
                                      (option) => option.value
                                    )}
                                    onChange={(e) => handleOptionSelect(e, 1)}
                                  >
                                    {options &&
                                      options.map((option) => (
                                        <option
                                          key={option.value}
                                          value={option.value}
                                        >
                                          {option.label}
                                        </option>
                                      ))}
                                  </select>
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

                                <div className="box_wrapper" id="myDropdown">
                                  <label style={labelStyle}>Person</label>
                                  <div
                                    className="input_component box_style"
                                    style={{ height: "100%" }}
                                  >
                                    {personSelectedOptions.map((option) => (
                                      <div className="value_css">
                                        <>
                                          <span> {option.label} </span>
                                          <button
                                            className="value_css_btn"
                                            type="button"
                                            onClick={() =>
                                              handleOptionRemove(
                                                option.value,
                                                2
                                              )
                                            }
                                          >
                                            x
                                          </button>
                                        </>
                                      </div>
                                    ))}

                                    <input
                                      type="text"
                                      placeholder="Select a person"
                                      onChange={(e) => handleSearch(e, 2)}
                                      style={{
                                        border: "none",
                                        borderBottom: "1px solid black",
                                      }}
                                    />
                                  </div>
                                  <br />
                                  <select
                                    multiple
                                    value={personSelectedOptions.map(
                                      (option) => option.value
                                    )}
                                    onChange={(e) => handleOptionSelect(e, 2)}
                                  >
                                    {personOptions &&
                                      personOptions.map((option) => (
                                        <option
                                          key={option.value}
                                          value={option.value}
                                        >
                                          {option.label}
                                        </option>
                                      ))}
                                  </select>
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
                                <div
                                  className="input_component box_style"
                                  style={{ height: "100%" }}
                                >
                                  {tasksSelectedOptions.map((option) => (
                                    <div className="value_css">
                                      <>
                                        <span> {option.label} </span>
                                        <button
                                          className="value_css_btn"
                                          type="button"
                                          onClick={() =>
                                            handleOptionRemove(option.value, 3)
                                          }
                                        >
                                          x
                                        </button>
                                      </>
                                    </div>
                                  ))}

                                  <input
                                    type="text"
                                    placeholder="My Tasks"
                                    onChange={(e) => handleSearch(e, 3)}
                                    style={{
                                      border: "none",
                                      borderBottom: "1px solid black",
                                    }}
                                  />
                                </div>
                                <br />
                                <select
                                  multiple
                                  value={tasksSelectedOptions.map(
                                    (option) => option.value
                                  )}
                                  onChange={(e) => handleOptionSelect(e, 3)}
                                >
                                  {taskOptions &&
                                    taskOptions.map((option) => (
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

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "24px",
                              }}
                            >
                              <button
                                onClick={(event) => handleSubmit(event)}
                                style={{
                                  padding: "8px 16px",
                                  height: "40px",
                                  background: "#0073ea",
                                  color: "white",
                                  borderRadius: "4px",
                                }}
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
              </div>
            </div>
          )}
          {loading && <LoadingScreen />}
        </div>
      </div>
    </div>
  );
};

export default AddDealNew;
