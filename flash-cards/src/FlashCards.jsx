import { useState } from "react";

function FlashCards({ questionObj }) {
  const [selectedId, setSelectedId] = useState(null); //state is null because we want ot open with nothing

  function handleClick(id) {
    setSelectedId(selectedId !== id ? id : null);
  }

  return (
    <div
      className={questionObj.id === selectedId ? "selected" : ""}
      onClick={() => handleClick(questionObj.id)}
      onMouseOut={() => {
        setSelectedId(selectedId === questionObj.id ? null : "");
      }}
    >
      <p>
        {questionObj.id == selectedId
          ? questionObj.answer
          : questionObj.question}
      </p>
    </div>
  );
}

export default FlashCards;
