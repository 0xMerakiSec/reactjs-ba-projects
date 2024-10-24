import { useState } from "react";

function TipCalculator() {
  const [bills, setBills] = useState();
  const [myTips, setMyTips] = useState(0);
  const [fTip, setFTip] = useState(0);
  function tipCalculate(myTips = 0, fTip = 0) {
    if (myTips === 0 || fTip === 0) return myTips + fTip;

    return (myTips + fTip) / 2;
  }

  function handleReset() {
    setBills(() => "");
    setMyTips(0);
    setFTip(0);
  }

  return (
    <>
      <Bill bills={bills} onSetBills={setBills} />
      <Service tip={myTips} onTip={setMyTips}>
        How did you like the service?
      </Service>
      <Service tip={fTip} onTip={setFTip}>
        How did your friend like the service?
      </Service>
      <h3>
        {bills &&
          `You pay $${bills + tipCalculate(myTips, fTip)} ${
            tipCalculate(myTips, fTip)
              ? `($${bills} + $${tipCalculate(myTips, fTip)}tip)`
              : ""
          }`}
      </h3>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

function Bill({ bills, onSetBills }) {
  return (
    <>
      <div>
        <label htmlFor="bill">How much was the bill? </label>
        <input
          type="text"
          name="bill"
          id="bill"
          value={bills}
          onChange={(e) => onSetBills(+e.target.value)}
        />
      </div>
    </>
  );
}
function Service({ tip, onTip, children }) {
  return (
    <>
      <div>
        {children}
        <select
          name="service-feedback"
          id="service-feedback"
          value={tip}
          onChange={(e) => onTip(+e.target.value)}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </div>
    </>
  );
}

export default TipCalculator;
