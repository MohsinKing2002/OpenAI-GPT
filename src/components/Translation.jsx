import React, { useEffect, useState } from "react";

const Translation = ({ generateResponse, setInput, response }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (response) setLoading(false);
  }, [response]);

  return (
    <div className="result">
      <textarea
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="type to ask...."
      ></textarea>
      <button
        onClick={() => {
          generateResponse();
          setLoading(true);
        }}
      >
        Submit !
      </button>
      {loading || response ? (
        <p className="response para">
          {loading ? (
            <img
              style={{
                height: "12vh",
                borderRadius: "100%",
                margin: "auto",
                display: "block",
              }}
              src="https://i.gifer.com/origin/e0/e0ea055299e92297b2ec0ef1c80696bf_w200.gif"
              alt="loader_image"
            />
          ) : (
            response
          )}
        </p>
      ) : null}
    </div>
  );
};

export default Translation;
