import { useState } from "react";

function Form({ handleAddItem }) {
  const [item, setItem] = useState("Test");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { id: Date.now(), item, quantity, packed: false };
    if (!item) return null;
    console.log(newItem);
    handleAddItem(newItem);
    setItem("");
    setQuantity(1);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="py-4 px-6 text-sm font-medium">
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          placeholder="Item..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default Form;
