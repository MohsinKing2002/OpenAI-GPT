import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { OPEN_AI_KEY } from "../config.env";

const GenerateImage = () => {
  //open api
  const configuration = new Configuration({
    apiKey: OPEN_AI_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    try {
      const res = await openai.createImage({
        prompt: text,
        n: 1,
        size: "1024x1024",
      });
      setUrl(res.data.data[0].url);
      setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const [text, setText] = useState();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="box">
      <h2>Image Generation - Using Open AI API</h2>
      <br />
      <div className="data-box">
        <input
          type="search"
          placeholder="type something...."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />{" "}
        <br />
        <button
          disabled={!text}
          onClick={() => {
            generateImage();
            setLoading(true);
            setUrl("");
          }}
        >
          Generate Image
        </button>
        <br />
        <br />
        {loading && (
          <img
            style={{ height: "12vh", borderRadius: "100%" }}
            src="https://i.gifer.com/origin/e0/e0ea055299e92297b2ec0ef1c80696bf_w200.gif"
            alt="loader_image"
          />
        )}
        {url && <img src={url} alt="generated_image" />}
      </div>
    </div>
  );
};

export default GenerateImage;
