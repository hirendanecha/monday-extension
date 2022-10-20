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
} from "monday-ui-react-core/dist/allIcons";
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
    // {
    //   <Toast
    //     open
    //     actions={actions}
    //     autoHideDuration={2000}
    //     className="monday-storybook-toast_wrapper"
    //     type={Toast.types.POSITIVE}
    //   >
    //     Tasked saved!
    //   </Toast>;
    // }
    navigate("/home", {
      state: {
        toast,
      },
    });
  };

  const options = useMemo(
    () => [
      {
        id: "Hadas Farhi",
        label: "Hadas Farhi",
        src: { red },
        type: Avatar.types.IMG,
        position: "(Frontend Developer)",
        categoryId: "suggestedPeople",
      },
      {
        id: "Rotem Dekel",
        label: "Rotem Dekel",
        src: {green},
        type: Avatar.types.IMG,
        position: "(Product Designer)",
        categoryId: "suggestedPeople",
      },
      {
        id: "Netta Muller",
        label: "Netta Muller",
        src: PersonRound,
        type: Avatar.types.IMG,
        position: "(Brand Designer)",
        categoryId: "suggestedPeople",
      },
    ],
    []
  );
  const categories = useMemo(
    () => ({
      suggestedPeople: {
        id: "suggestedPeople",
        label: "Suggested people",
      },
    }),
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
                  <Heading
                    type={Heading.types.h2}
                    value="My first task here Yay!"
                    style={{
                      fontWeight: "500",
                      fontSize: "32px",
                      lineHeight: "38px",
                      fontFamily: "Roboto",
                      color: "#323338",
                      marginLeft: "15px",
                      // paddingTop: "38px",
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
                    marginLeft: "30px",
                    marginRight: "38px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <label style={labelStyle}>Files</label>
                    <TextField
                      //   className="monday-storybook-text-field_size"
                      iconName={Attach}
                      size={TextField.sizes.MEDIUM}
                      type={TextField.types.PASSWORD}
                      checked
                      //   onChange={(e) => {
                      //     setFile(e);
                      //   }}
                    />
                  </div>
                  <div style={{ display: "flex", marginTop: "24px" }}>
                    <label style={labelStyle}>Date</label>
                    <TextField
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
                        marginLeft: "30px",
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
                            marginTop: "5px",
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
                                leftImage: red,
                                // type: Avtar.types.IMG,
                              },
                              {
                                label: "In progress",
                                value: 2,
                              },
                              {
                                label: "Done",
                                value: 3,
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
                          style={{ border: "1px solid gray", width: "470px" }}
                        >
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
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                              >
                                <span
                                  className="star"
                                  style={{ fontSize: "25px" }}
                                >
                                  &#9733;
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div style={{ display: "flex", marginTop: "24px" }}>
                        <label style={labelStyle}>Person</label>
                        <Flex
                          style={{
                            width: "100%",
                            height: "270px",
                          }}
                          justify={Flex.justify.CENTER}
                          align={Flex.align.START}
                        >
                          <Dialog
                            content={() => (
                              <DialogContentContainer className="combobox-stories-styles_wrapper">
                                <Combobox
                                  options={options}
                                  categories={categories}
                                  size={Combobox.sizes.SMALL}
                                  placeholder="Search"
                                />
                              </DialogContentContainer>
                            )}
                            tooltip
                            position={Dialog.positions.BOTTOM}
                            open={true}
                          >
                            <div className="person-picker-mock">
                              <Avatar
                                size={Avatar.sizes.SMALL}
                                src={green}
                                type={Avatar.types.IMG}
                              />
                            </div>
                          </Dialog>
                        </Flex>
                      </div>
                    </form>
                  </div>
                )}
                <div style={{ display: "flex" }}>
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
                  marginTop: "30px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div>
                    <p>in</p>
                  </div>
                  <div
                    style={{
                      width: "221px",
                      // height: "40px",
                      marginTop: "5px",
                      marginLeft: "8px",
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
                <div style={{ marginRight: "55px" }}>
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
