import React, { useRef, useState } from "react";
import favIcon from "../../images/favIcon.png";
import "./AddDealNew.css";
import LoadingScreen from "./LoadingScreen";
import { useNavigate } from "react-router-dom";
import sunimg from "../../images/wb_sunny.png";
import done from "../../images/done.png";
import Wrong from "../../images/wrong.png";
import CopyImg from "../../images/CopyImg.png";
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
import Select from "./Select"
import { countries } from "./countries";
import SelectNew from "./SelectNew";

const AddDealNew = () => {
  const [loading, SetLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [email, setEmail] = useState("asafpeled.sm@gmail.com");
  const [toast, setToast] = useState(false);
  const [fillUpEmailShow, setFillUpEmailShow] = useState(false);
  const [noEmailValidate, setNoEmailValidate] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [phone, setPhone] = useState();
  const [number, setNumber] = useState();
  const [fieldValue, setFieldValue] = useState("My first task here Yay!");
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [countryCode, setCountryCode] = useState(countries[0]);
  const [personOptions, setPersonOptions] = useState([
    {
      id: "1",
      value: "Hadas Farhi",
      label: "Hadas Farhi",
      src: <Wand />,
      leftIcon: <Wand />,
      // type: Avatar.types.IMG,
      // size: Avatar.sizes.SMALL,
    },
    {
      id: "2",
      value: "Rotem Dekel",
      label: "Rotem Dekel",
      src: <PersonRound />,
      leftIcon: <PersonRound />,
      // type: Avatar.types.IMG,
      // size: Avatar.sizes.SMALL,
    },
    {
      id: "3",
      value: "Netta Muller",
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
      value: "Lead",
      label: "Lead",
      leftIcon: red,
    },
    {
      id: "2",
      value: "In progress",
      label: "In progress",
      leftIcon: violate,
    },
    {
      id: "3",
      value: "Done",
      label: "Done",
      leftIcon: green,
    },
  ]);

  const [taskOptions, setTaskOptions] = useState([
    {
      label: "Option 1",
      value: "Option 1",
    },
    {
      label: "Option 2",
      value: "Option 2",
    },
    {
      label: "Option 3",
      value: "Option 3",
    },
    {
      label: "Option 4",
      value: "Option 4",
    },
    {
      label: "Option 5",
      value: "Option 5",
    },
  ]);

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

  const copyToClipboard = (e) => {
    e.preventDefault();
    inputRef.current.select();
    document.execCommand("copy");
    alert("Text copied to clipboard!");
  };
  // const flags = {

  //   US: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
  //   IND: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
  // }


  const autoFillHanler = (e) => {
    e.preventDefault();
    setFillUpEmailShow(true)
  }
  const noEmailValidatedHanler = (e) => {
    e.preventDefault();
    setNoEmailValidate(true)
  }

  const navigateLink = (e) => {
    e.preventDefault();
    navigate("/googleSaveContact")
  }

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
                                style={{ padding: '12px' }}
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
                                  padding: '12px',
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
                                  style={{ padding: '12px' }}
                                  id="link"
                                  name="link"
                                  value={link}
                                  onChange={(e) => setLink(e.target.value)}
                                />
                                <button
                                  className="copy-link-button"
                                // onClick={(e) => copyToClipboard(e)}
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
                                  <label style={labelStyle}>Email with Validated Button</label>

                                  <div>
                                    {!fillUpEmailShow ? <div>
                                      <button
                                        onClick={(event) => autoFillHanler(event)}
                                        style={{
                                          padding: "8px 16px",
                                          height: "40px",
                                          color: "#323338",
                                          borderRadius: "4px",
                                          width: '100%',
                                          background: '#FFCB00',
                                          boxShadow: '0px 4px 8px rgba(197, 199, 208, 0.5)',
                                          fontWeight: '400',
                                          fontSize: '16px',
                                          fontFamily: "Roboto",
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          textAlign: 'center',
                                        }}
                                      >
                                        <span
                                          style={{ fontSize: "25px" }}
                                        >
                                          +
                                        </span> <span style={{ marginLeft: '8px', marginTop: '2px' }}>Get a validated email</span>
                                      </button>
                                    </div> : (
                                      <div style={{ display: "flex", border: '1px solid #c3c6d4', justifyContent: 'space-evenly', background: 'white' }}>
                                        <img
                                          width={"30px"}
                                          height={"30px"}
                                          src={done}
                                          alt="done"
                                          style={{ marginTop: '4px' }}
                                        />
                                        <input
                                          ref={inputRef}
                                          className="input_component"
                                          type="text"
                                          style={{
                                            padding: '12px', margin: 0, border: 'none', width: 'auto',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            color: '#0A66C2'
                                          }}
                                          id="email"
                                          name="email"
                                          value={email}
                                        />
                                        <button
                                          className="copy-link-button"
                                          style={{ border: 'none', margin: 0, background: 'white' }}
                                          onClick={(e) => copyToClipboard(e)}
                                        >
                                          <img
                                            width={"25px"}
                                            height={"25px"}
                                            src={CopyImg}
                                            alt="Copy"
                                          />
                                        </button>
                                      </div>
                                    )}
                                  </div>


                                  <h1 style={{
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#676879',
                                    margin: 0,
                                    width: '300px',
                                    marginTop: '8px',
                                  }}>You're on Pro Plan. You have 85/300 credits.</h1>


                                </div>
                                <hr />
                                <div className="box_wrapper">
                                  <label style={labelStyle}>No Email with Validated Button</label>

                                  <div>
                                    {!noEmailValidate ? <div>
                                      <button
                                        onClick={(event) => noEmailValidatedHanler(event)}
                                        style={{
                                          padding: "8px 16px",
                                          height: "40px",
                                          color: "#323338",
                                          borderRadius: "4px",
                                          width: '100%',
                                          background: '#FFCB00',
                                          boxShadow: '0px 4px 8px rgba(197, 199, 208, 0.5)',
                                          fontWeight: '400',
                                          fontSize: '16px',
                                          fontFamily: "Roboto",
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          textAlign: 'center',
                                        }}
                                      >
                                        <span
                                          style={{ fontSize: "25px" }}
                                        >
                                          +
                                        </span> <span style={{ marginLeft: '8px', marginTop: '2px' }}>Get a validated email</span>
                                      </button>
                                    </div> : (
                                      <div style={{ display: "flex", border: '1px solid #c3c6d4', justifyContent: 'start', background: 'white' }}>
                                        <img
                                          width={"25px"}
                                          height={"25px"}
                                          src={Wrong}
                                          alt="Wrong"
                                          style={{ marginLeft: '12px', marginTop: '7px' }}
                                        />
                                        <input
                                          ref={inputRef}
                                          className="input_component"
                                          type="text"
                                          style={{
                                            padding: '12px', margin: 0, border: 'none', width: 'auto',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            color: '#0A66C2'
                                          }}
                                          id="email"
                                          name="email"
                                          // value={email}
                                          placeholder="No validated email found."
                                        />
                                      </div>
                                    )}
                                  </div>


                                  <h1 style={{
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#676879',
                                    margin: 0,
                                    width: '300px',
                                    marginTop: '8px',
                                  }}>You're on Pro Plan. You have 85/300 credits.</h1>


                                </div>
                                <hr />
                                <div className="box_wrapper">
                                  <label style={labelStyle}>Disabled Validated Button</label>

                                  <div>
                                    <div>
                                      <button
                                        onClick={(event) => noEmailValidatedHanler(event)}
                                        disabled={email}
                                        style={{
                                          padding: "8px 16px",
                                          height: "40px",
                                          color: "#323338",
                                          borderRadius: "4px",
                                          width: '100%',
                                          background: '#FFCB00',
                                          boxShadow: '0px 4px 8px rgba(197, 199, 208, 0.5)',
                                          fontWeight: '400',
                                          fontSize: '16px',
                                          fontFamily: "Roboto",
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          textAlign: 'center',
                                        }}
                                      >
                                        <span
                                          style={{ fontSize: "25px" }}
                                        >
                                          +
                                        </span> <span style={{ marginLeft: '8px', marginTop: '2px' }}>Get a validated email</span>
                                      </button>
                                    </div>
                                  </div>

                                  <h1 style={{
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '16px',
                                    color: '#676879',
                                    margin: 0,
                                    width: '300px',
                                    marginTop: '8px',
                                  }}>You have no credits left for this billing cycle.
                                    <span onClick={(e) => {
                                      e.preventDefault()
                                      navigate('/Pricing')
                                    }} style={{
                                      color: '#323338',
                                      fontFamily: 'Roboto',
                                      fontWeight: 'bold',
                                      borderBottom: '1px solid #676879',
                                      cursor: 'pointer',
                                    }}>Upgrade to get credits</span>
                                  </h1>


                                </div>
                                <div className="box_wrapper" id="myDropdown">
                                  <label style={labelStyle}>Status</label>
                                  {/* <Select options={options} placeholder={"Status"} id={"1"} /> */}
                                  <SelectNew options={options} placeholder={"Status"} id={"1"} />
                                </div>

                                <div className="box_wrapper">
                                  <label style={labelStyle}>Rating</label>

                                  <div
                                    className="input_component"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      padding: '8px',
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
                                              style={{ fontSize: "30px" }}
                                            >
                                              ★
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
                                  {/* <Select options={personOptions} placeholder={"Person"} id={"2"} />  */}

                                  <SelectNew options={personOptions} placeholder={"Person"} id={"2"} />
                                </div>

                                <div className="box_wrapper">
                                  <label style={labelStyle}>Phone</label>
                                  <div style={{ display: "flex", position: 'relative' }}>

                                    {/* <img
                                      alt={`${countryCode?.name}`}
                                      src={flags[countryCode?.code]}
                                      style={{
                                        display: !countryCode?.code && 'none',
                                        height: '35px',
                                        position: 'absolute',
                                        top: '7px',
                                        left: '5px',
                                      }} /> */}

                                    <select className="phone_button"
                                      value={countryCode?.code}
                                      onChange={(e) => {
                                        const countryCodee = e.target.value;
                                        const country = countries.find((c) => c.code === countryCodee);
                                        setCountryCode(country);

                                        const dd = document.getElementById("phone");
                                        dd.value = e.target.value;
                                      }}>
                                      {countries.map((country) => (
                                        <>
                                          <option key={country?.code} value={country.dial_code}>
                                            {country?.code}
                                          </option>
                                        </>
                                      ))}
                                    </select>
                                    <input
                                      className="input_component"
                                      type="tel"
                                      id="phone"
                                      name="phone"
                                      style={{ padding: '12px' }}
                                      value={phone}
                                      onChange={(e) => setPhone(e.target.value)}
                                    />
                                  </div>
                                </div>

                                <div className="box_wrapper">
                                  <label style={labelStyle}>Number</label>
                                  <input
                                    className="input_component"
                                    type="number"
                                    id="number"
                                    name="number"
                                    style={{ padding: '12px' }}
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
                              <div className="box_wrapper" id="myDropdown">
                                <label style={labelStyle}>in</label>
                                {/* <Select options={taskOptions} placeholder={"My Tasks"} id={"3"} /> */}
                                <SelectNew options={taskOptions} placeholder={"My Tasks"} id={"3"} />
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
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "24px",
                                marginBottom: "24px",
                                textAlign: 'center'
                              }}
                            >
                              <h1 style={{
                                fontFamily: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '16px',
                                color: '#676879',
                                margin: 0,
                                marginTop: '8px',
                              }}>Offsite Subscription <br />
                                <span onClick={(e) => {
                                  e.preventDefault()
                                  navigate('/Pricing')
                                }} style={{
                                  color: '#323338',
                                  fontFamily: 'Roboto',
                                  fontWeight: 'bold',
                                  borderBottom: '1px solid #676879',
                                  cursor: 'pointer',
                                }}>How to Upgrade</span>
                              </h1>
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
    </div >
  );
};

export default AddDealNew;
