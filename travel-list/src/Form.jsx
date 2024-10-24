import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("TEST");
  const [quantity, setQuantity] = useState(1);
  // const [items, setItems] = useState([]);

  // function handleAddItems(item) {
  //   setItems((items) => [...items, item]);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), quantity, description, packed: false };
    onAddItems(newItem);
    //setting the description and quantity back to the initial state after the data is submitted.
    setDescription("");
    setQuantity(1);
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default Form;
