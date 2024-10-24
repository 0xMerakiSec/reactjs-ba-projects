import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleStepdown() {
    setStep((cStep) => cStep - 1);
  }
  function handleStepup() {
    setStep((cStep) => cStep + 1);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",

        margin: "200px",
      }}
    >
      <div>
        <div>
          <span>
            <button onClick={handleStepdown}>-</button>
          </span>
          Step: {step}
          <span>
            <button onClick={handleStepup}>+</button>
          </span>
        </div>
      </div>
      <div>
        <div>
          <span>
            <button
              onClick={() => {
                setCount((cCount) => cCount - step);
              }}
            >
              -
            </button>
          </span>
          Count: {count}
          <span>
            <button
              onClick={() => {
                setCount((cCount) => cCount + step);
              }}
            >
              +
            </button>
          </span>
        </div>
      </div>
      <p>{count === 0 ? ` Today is ${date.toDateString()}` : ""}</p>
      <p>
        {count < 0
          ? `${Math.abs(count) > 1 ? Math.abs(count) : ""} ${
              Math.abs(count) > 1 ? "day's ago" : "Yesterday"
            }  was ${date.toDateString()}`
          : " "}
      </p>
      <p>
        {count > 0
          ? `${count > 1 ? count : ""} ${
              count > 1 ? "day's from today" : "Tommorow"
            } is ${date.toDateString()}`
          : ""}
      </p>
    </div>
  );
}

export default App;
