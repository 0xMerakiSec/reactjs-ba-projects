import { useState } from "react";

function TravelList({ itemsList, onDeleteItems, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItem;
  if (sortBy === "input") sortedItem = itemsList;
  if (sortBy === "description")
    sortedItem = itemsList.slice().sort((a, b) => a.item.localeCompare(b.item));
  if (sortBy === "packed")
    sortedItem = itemsList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <>
      <h2>List Items</h2>
      <ul className="divide-y divide-slate-100 ">
        {sortedItem.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              value={item.packed}
              onChange={() => onToggleItem(item.id)}
            />
            Qty: {item.quantity}
            <br />
            Item:{item.item}
            <button onClick={() => onDeleteItems(item.id)}>❌</button>
          </li>
        ))}

        <div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">sort by input</option>
            <option value="description">sort by description</option>
            <option value="packed">sort by packed</option>
          </select>
        </div>
        <button onClick={() => onClearList([])}>Clear List</button>
      </ul>
    </>
  );
}

export default TravelList;
