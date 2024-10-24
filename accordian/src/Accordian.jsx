import { useState } from "react";

function Accordian({ data }) {
  return (
    <div className="accordion">
      {data.map((d, i) => (
        <AccordianItem num={i + 1} title={d.title} text={d.text} key={i} />
      ))}
    </div>
  );
}

function AccordianItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleIsOpen() {
    setIsOpen((open) => !open);
  }
  return (
    <div className={isOpen ? "item open" : "item"} onClick={handleIsOpen}>
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export default Accordian;
