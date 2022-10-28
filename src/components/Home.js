import { React, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./mytask.css";
import {
  Avatar,
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
  Toast,
  EditableHeading,
  Modal,
  AlertBanner,
  AlertBannerText,
  AlertBannerLink,
  Loader,
} from "monday-ui-react-core";
import {
  MoreActions,
  Favorite,
  DoubleCheck,
  Offline,
  Wand,
  ThumbsUp,
  Time,
  Update,
  Upgrade,
} from "monday-ui-react-core/dist/allIcons";
import "./home.css";
import sunimg from "../images/wb_sunny.png";
import green from "../images/green.png";
import red from "../images/red.png";
import violate from "../images/violate.png";
import "semantic-ui-css/semantic.min.css";

const Home = () => {
  const [show, setShow] = useState(false);
  const { state } = useLocation();
  const [opentost, setOpenTost] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();
  console.log(state, "seeeee");

  useEffect(() => {
    var t, k;
    if (!!state?.toast) {
      setShowLoader(true);
      t = setTimeout(() => {
        setShowLoader(false);
        setOpenTost(true);
      }, 3000);
    }
    if (!!state?.toast) {
      k = setTimeout(() => {
        setOpenTost(false);
        navigate("/home", {
          state: {
            toast: false,
          },
        });
      }, 6000);
    }
    return () => {
      if (t) {
        clearTimeout(t);
        clearTimeout(k);
      }
    };
  }, [state?.toast]);

  const actions = useMemo(
    () => [
      {
        type: Toast.actionTypes.LINK,
        text: "monday.com",
        href: "https://monday.com",
      },
    ],
    []
  );

  const StarIcon = () => (
    <button>
      <Icon iconType={Icon.type.ICON_FONT} icon="fa-regular fa-star" />
    </button>
  );
  const StarSolidIcon = () => (
    <button style={{ color: "rgba(255, 204, 0, 0.779)" }}>
      <Icon
        iconType={Icon.type.ICON_FONT}
        icon="fa-solid fa-star text-red"
        style={{ color: "rgba(255, 204, 0, 0.779)" }}
      />
    </button>
    // <Icon
    //   iconType={Icon.type.ICON_FONT}
    //   iconLabel="my font awesome start icon"
    //   icon="fa fa-star"
    //   style={{ color: "color: rgba(255, 204, 0, 0.779);" }}
    // />
  );

  const options = useMemo(
    () => [
      {
        id: "1",
        value: 1,
        label: "Option 1",
        regular: StarIcon,
        fill: StarSolidIcon,
      },
      {
        id: "2",
        value: 2,
        label: "Option 2",
        regular: StarIcon,
        fill: StarSolidIcon,
      },
      {
        id: "3",
        value: 3,
        label: "Option 3",
        regular: StarIcon,
        fill: StarSolidIcon,
      },
      {
        id: "4",
        value: 4,
        label: "Option 4",
        regular: StarIcon,
        fill: StarSolidIcon,
      },
      {
        id: "5",
        value: 5,
        label: "Option 5",
        regular: StarIcon,
        fill: StarSolidIcon,
      },
    ],
    []
  );

  const Option = (props) => {
    const { id, label, regular: Star, fill: SolidStar, selectedId } = props;
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {label}
        {id === selectedId ? <SolidStar /> : <Star />}
      </div>
    );
  };

  const [selectedId, setSelectedId] = useState("0");
  const RenderOption = (props) => {
    const { id } = props;
    console.log("render", id);
    return (
      <div
        key={id}
        style={{ width: "100%" }}
        onMouseOver={() => {
          console.log("hover", id);
          setSelectedId(id);
        }}
      >
        <Option {...props} selectedId={selectedId} />
      </div>
    );
  };

  const renderer = (props) => {
    return <RenderOption {...props} />;
  };

  const selectedOption = (props) => {
    console.log(props, "selected option");
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
        <DialogContentContainer
          style={{
            width: "548px",
            height: "auto",
            boxShadow: "0px 15px 50px rgba(0, 0, 0, 0.3)",
            position: "relative",
          }}
        >
          <div id={showLoader ? "overlay" : ""}>
            {showLoader&&<div style={{ position: "absolute", right: "50%", bottom: "50%" }}>
              <Loader
                size={40}
              />
            </div>}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                height: "329px",
                position: "relative",
              }}
            >
              {/* <Modal show={true} style={{height:"50px", width:"300px"}} /> */}
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {opentost && (
                    // <div style={{display:"flex", justifyContent:"center"}}>
                    <AlertBanner
                      backgroundColor={AlertBanner.backgroundColors.POSITIVE}
                      onClose={() => setOpenTost(false)}
                    >
                      <AlertBannerText text="Tasked saved !See it in" />
                      <AlertBannerLink
                        text="https://monday.com"
                        href="https://monday.com"
                      />
                    </AlertBanner>
                    // </div>
                  )}
                  {/* <Toast
                    open={opentost}
                    onClose={() => setOpenTost(false)}
                    // closeable= {false}
                    // hideIcon={true}
                    actions={actions}
                    autoHideDuration={3000}
                    className="monday-storybook-toast_wrapper"
                    type={Toast.types.POSITIVE}
                    // style={{width:"480px"}}
                  >
                    Tasked saved!
                  </Toast> */}
                  <EditableHeading
                    type={EditableHeading.types.h1}
                    placeholder="Write your task name..."
                    brandFont={true}
                    style={{
                      fontWeight: "500",
                      fontSize: "32px",
                      lineHeight: "38px",
                      fontFamily: "Roboto",
                      color: "#676879",
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
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
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
                  <Tooltip
                    content="Select your default task board by searching and marking it with a star"
                    shouldShowOnMount
                    animationType="expand"
                    // tip={false}
                    data-cy="ddddd"
                    className="monday-style-tooltip-arrow.monday-style-arrow-dar"
                    theme="success"
                  >
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
                        onOptionSelect={() => navigate("/mytask")}
                        // defaultValue={[options[0]]}
                        openMenuOnFocus={true}
                        options={options}
                        optionRenderer={renderer}
                        // isOptionSelected={selectedOption}
                        onInputChange={selectedOption}
                        placeholder="My Tasks"
                        className="dropdown-stories-styles_with-chips"
                        noOptionsMessage={() =>
                          "No board found. You can create a new board in monday.com"
                        }
                        menuPlacement="top"
                      />
                    </div>
                  </Tooltip>
                </div>
                <div style={{ marginRight: "55px", marginTop: "6px" }}>
                  <Button disabled>Create</Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContentContainer>
      </div>
    </div>
  );
};

export default Home;
