import React from "react";

const Options = ({ arr, selectOption }) => {
  return (
    <div className="options">
      {arr &&
        arr.map((item) => (
          <div
            key={item.id}
            className="box"
            onClick={() => selectOption(item.option)}
          >
            <h3 style={{ marginBottom: "15px" }} className="title">
              {item.name}
            </h3>
            <p className="para">{item?.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Options;
