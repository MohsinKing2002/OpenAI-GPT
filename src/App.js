import { useState } from "react";
import arrayItems from "./AIOptions";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";
import Options from "./components/Options";
import Translation from "./components/Translation";
import { OPEN_AI_KEY } from "./config";

function App() {
  const [option, setOption] = useState({});
  const [input, setInput] = useState();
  const [response, setResponse] = useState("");

  const configuration = new Configuration({
    apiKey: OPEN_AI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const selectOption = (op) => {
    setOption(op);
  };

  const generateResponse = async () => {
    // setOption({ ...option, prompt: input });
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);
    setResponse(response?.data?.choices[0]?.text);
  };

  return (
    <div>
      <h1 style={{ margin: "2rem 0" }} className="title">
        React AI App
      </h1>
      {/* <GenerateImage /> */}
      {Object.values(option).length === 0 ? (
        <Options arr={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation
          generateResponse={generateResponse}
          setInput={setInput}
          response={response}
        />
      )}
    </div>
  );
}

export default App;
