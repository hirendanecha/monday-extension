import React from "react";
import { Dropdown, Icon } from "monday-ui-react-core";
import { useMemo } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskTab = () => {
  const navigate = useNavigate();

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
    // console.log("render", id);
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
    <div style={{ padding: "32px" }}>
      <Dropdown
        // onOptionSelect={() => navigate("/mytask")}
        openMenuOnFocus={true}
        options={options}
        optionRenderer={renderer}
        onInputChange={selectedOption}
        justify="end"
        placeholder={
          <span
            style={{ fontWeight: 400, fontFamily: "Roboto", fontSize: "16px" }}
          >
            Contacts Board
          </span>
        }
        className="dropdown-stories-styles_with-chips"
        noOptionsMessage={() =>
          "No board found. You can create a new board in monday.com"
        }
        menuPlacement="top"
      />
    </div>
  );
};

export default TaskTab;
