import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleDecrement() {
    setCount((cCount) => cCount - step);
  }
  function handleIncrement() {
    setCount((cCount) => cCount + step);
  }

  return (
    <>
      <div>
        <input
          style={{ width: "270px" }}
          type="range"
          step={step}
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span>{step}</span>
      </div>
      <div>
        <span>
          <button onClick={handleDecrement}>-</button>
        </span>
        <input
          type="number"
          placeholder="count"
          value={count}
          onChange={(e) => {
            setCount(+e.target.value);
          }}
        />
        <span>
          <button onClick={handleIncrement}>+</button>
        </span>
      </div>
      <div>
        <p>
          {count < 0
            ? `${Math.abs(count) > 1 ? Math.abs(count) : ""} ${
                Math.abs(count) > 1 ? "day's ago" : "Yesterday"
              }  was ${date.toDateString()}`
            : " "}
        </p>
        <p>{count === 0 ? `Today is ${date.toDateString()}` : null}</p>
        <p>
          {" "}
          {count > 0
            ? `${count > 1 ? count : ""} ${
                count > 1 ? "day's from today" : "Tommorow"
              } is ${date.toDateString()}`
            : ""}
        </p>
      </div>
    </>
  );
}

export default Counter;
