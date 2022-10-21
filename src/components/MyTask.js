import { React, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./mytask.css";
import {
  DialogContentContainer,
  Heading,
  Icon,
  Dropdown,
  Button,
  Tooltip,
  Combobox,
  IconButton,
  MenuItem,
  Menu,
  TextField,
  Toast,
  Flex,
  Avatar,
  Dialog,
  optionRenderer,
  EditableHeading,
  StoryDescription,
} from "monday-ui-react-core";
import {
  MoreActions,
  Favorite,
  DoubleCheck,
  TextCopy,
  Email,
  Link,
  Attach,
  DropdownChevronUp,
  NavigationChevronUp,
  PersonRound,
  Person,
  CloseSmall,
  Offline

} from "monday-ui-react-core/dist/allIcons";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import sunimg from "../images/wb_sunny.png";
import green from "../images/green.png";
import red from "../images/red.png";
import violate from "../images/violate.png";

const MyTask = () => {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState(true);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [value, setValue] = useState();
  const navigate = useNavigate();

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
        toast,
      },
    });
  };

  const optionsAvatar = useMemo(
    () => [
      {
        value: "Rotem",
        label: "Rotem Dekel",
        leftAvatar: Offline,
      },
      {
        value: "Hadas",
        label: "Hadas Farhi",
        leftAvatar: violate,
      },
      {
        value: "Netta",
        label: "Netta Muller",
        leftAvatar: green,
      },
    ],
    []
  );

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
        <DialogContentContainer
          style={{
            width: "548px",
            height: "auto",
            boxShadow: "0px 15px 50px rgba(0, 0, 0, 0.3)",
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
                  <EditableHeading
                    type={EditableHeading.types.h1}
                    placeholder="My first task here Yay!"
                    brandFont={true}
                    style={{
                      fontWeight: "500",
                      fontSize: "32px",
                      lineHeight: "38px",
                      fontFamily: "Roboto",
                      color: "#323338",
                      marginLeft: "15px",
                      marginTop: "30px",
                    }}
                  />
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
                    <TextField
                      //   className="monday-storybook-text-field_size"
                      iconName={Attach}
                      size={TextField.sizes.MEDIUM}
                      //   onChange={(e) => {
                      //     setFile(e);
                      //   }}
                    />
                    {/* <input
                      type="file"
                      name="img1"
                      id="img1"
                      onchange="document.getElementById('file_name').value = this.value.split('\\').pop().split('/').pop()"
                    /> */}
                    {/* <input type="text" name="file_name" id="file_name" /> */}
                  </div>
                  <div style={{ display: "flex", marginTop: "24px" }}>
                    <label style={labelStyle}>Date</label>
                    <TextField
                      style={{ marginLeft: "50px" }}
                      size={TextField.sizes.MEDIUM}
                      type={TextField.types.DATE}
                      //   onChange={(e) => {
                      //     setDate(e);
                      //   }}
                    />
                  </div>
                  <div style={{ display: "flex", marginTop: "24px" }}>
                    <label style={labelStyle}>Description</label>
                    <TextField
                      value={description}
                      onChange={(e) => setDescription(e)}
                      iconName={TextCopy}
                      size={TextField.sizes.MEDIUM}
                      validation={{
                        status: "error",
                        text: "Error text",
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", marginTop: "24px" }}>
                    <label style={labelStyle}>Link</label>
                    <TextField
                      iconName={Link}
                      size={TextField.sizes.MEDIUM}
                      //   onChange={(e) => {
                      //     setLink(e);
                      //   }}
                    />
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
                        <TextField
                          iconName={Email}
                          size={TextField.sizes.MEDIUM}
                          validation={{
                            status: "success",
                          }}
                          //   onChange={(e) => {
                          //     setEmail(e);
                          //   }}
                        />
                      </div>
                      <div style={{ display: "flex", marginTop: "24px" }}>
                        <label style={labelStyle}>Status</label>
                        <div
                          style={{
                            width: "470px",
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "24px",
                            fontFamily: "Roboto",
                          }}
                        >
                          <Dropdown
                            className="dropdown-stories-styles_spacing"
                            onBlur={function noRefCheck() {}}
                            // onChange={() => navigate("/mytask")}
                            onClear={function noRefCheck() {}}
                            onFocus={function noRefCheck() {}}
                            onInputChange={function noRefCheck() {}}
                            onMenuClose={function noRefCheck() {}}
                            onMenuOpen={function noRefCheck() {}}
                            onOptionRemove={function noRefCheck() {}}
                            onOptionSelect={() => navigate("/mytask")}
                            openMenuOnFocus={function noRefCheck() {}}
                            options={[
                              {
                                label: "Lead",
                                value: 1,
                                leftAvatar: red,
                                // type: Avtar.types.IMG,
                              },
                              {
                                label: "In progress",
                                value: 2,
                                leftAvatar: green,
                              },
                              {
                                label: "Done",
                                value: 3,
                                leftAvatar: violate,
                              },
                            ]}
                            placeholder="Set status"
                          />
                        </div>
                      </div>
                      {/* <img src={red} alt="red" /> */}
                      <div style={{ display: "flex", marginTop: "24px" }}>
                        <label style={labelStyle}>Rating</label>

                        <div
                          className="star-rating"
                          style={{
                            border: "1px solid gray",
                            width: "470px",
                            height: "35px",
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
                                    index <= (hover || rating) ? "on" : "off"
                                  }
                                  onClick={() => setRating(index)}
                                  // onMouseEnter={() => setHover(index)}
                                  // onMouseLeave={() => setHover(rating)}
                                >
                                  <span
                                    className="star"
                                    style={{ fontSize: "15px" }}
                                  >
                                    <Icon
                                      iconType={Icon.type.ICON_FONT}
                                      iconLabel="my font awesome start icon"
                                      icon="fa fa-star"
                                      // iconSize={2}
                                    />
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                          <Icon
                            onClick={() => {
                              // console.log(rating);
                              setRating(0);
                            }}
                            iconType={Icon.type.ICON_FONT}
                            iconLabel="my font awesome start icon"
                            icon={CloseSmall}
                            iconSize={25}
                            style={{ marginRight: "5px" }}
                          />
                        </div>
                      </div>
                      <div style={{ display: "flex", marginTop: "24px" }}>
                        <label style={labelStyle}>Person</label>
                        <div
                          style={{
                            width: "470px",
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "24px",
                            fontFamily: "Roboto",
                          }}
                        >
                          <Dropdown
                            // defaultValue={[optionsAvatar[0]]}
                            options={optionsAvatar}
                            src={red}
                            multi
                            multiline
                            className="dropdown-stories-styles_with-chips"
                            placeholder="Select a person"
                          />
                        </div>
                      </div>
                      <div style={{ display: "flex", marginTop: "24px" }}>
                        <label style={labelStyle}>Phone</label>
                        <div
                          style={{
                            width: "372px",
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "24px",
                            fontFamily: "Roboto",
                            height: "35px",
                          }}
                        >
                          <PhoneInput
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue}
                            style={{
                              width: "372px",
                              fontSize: "20px",
                              fontWeight: "400",
                              lineHeight: "24px",
                              fontFamily: "Roboto",
                              height: "35px",
                            }}
                          />
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
                            height: "35px",
                          }}
                        >
                          <input
                            type="number"
                            style={{
                              width: "363px",
                              fontSize: "16px",
                              fontWeight: "400",
                              lineHeight: "24px",
                              fontFamily: "Roboto",
                              height: "34px",
                            }}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                )}
                <div style={{ display: "flex", marginLeft: "19px" }}>
                  {!show && (
                    <Icon
                      onClick={() => setShow((pre) => !pre)}
                      iconType={Icon.type.SVG}
                      icon={MoreActions}
                      iconLabel="my bolt svg icon"
                      iconSize={20}
                      style={{ paddingTop: "25px" }}
                    />
                  )}
                  {show && (
                    <Icon
                      onClick={() => setShow((pre) => !pre)}
                      iconType={Icon.type.SVG}
                      icon={DropdownChevronUp}
                      iconLabel="my bolt svg icon"
                      iconSize={20}
                      style={{ paddingTop: "25px" }}
                    />
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
                      {!show && "4 more Inputs"}
                      {show && "Hide 4 Inputs"}
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
                    }}
                  >
                    <p>in</p>
                  </div>
                  <div
                    style={{
                      width: "221px",
                      // height: "40px",
                      marginTop: "7px",
                      marginLeft: "8px",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      fontFamily: "Roboto",
                    }}
                  >
                    <Dropdown
                      className="dropdown-stories-styles_spacing"
                      onBlur={function noRefCheck() {}}
                      onChange={function noRefCheck() {}}
                      onClear={function noRefCheck() {}}
                      onFocus={function noRefCheck() {}}
                      onInputChange={function noRefCheck() {}}
                      onMenuClose={function noRefCheck() {}}
                      onMenuOpen={function noRefCheck() {}}
                      onOptionRemove={function noRefCheck() {}}
                      onOptionSelect={function noRefCheck() {}}
                      openMenuOnFocus={function noRefCheck() {}}
                      onClick={() => {
                        navigate("/mytask");
                      }}
                      options={[
                        {
                          label: "Option 1",
                          value: () => {
                            navigate("/mytask");
                          },
                          onClick: () => {
                            navigate("/mytask");
                          },
                        },
                        {
                          label: "Option 2",
                          value: 2,
                        },
                        {
                          label: "Option 3",
                          value: 3,
                        },
                      ]}
                      placeholder="My Tasks"
                    />
                  </div>
                </div>
                <div style={{ marginRight: "36px" }}>
                  <Button onClick={(event) => handleSubmit(event)}>
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContentContainer>
      </div>
    </div>
  );
};

export default MyTask;
