import { useState } from "react";

function PackingList({ items, onDeleteItems, onCheckItems, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all  items?"
    );
    if (confirmed) onClearList([]);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            itemObj={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onCheckItems={onCheckItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ itemObj, onDeleteItems, onCheckItems }) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          value={itemObj.packed}
          onChange={() => onCheckItems(itemObj.id)}
        />
        <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
          {itemObj.quantity}
          {itemObj.description}
        </span>
        <button onClick={() => onDeleteItems(itemObj.id)}>❌</button>
      </li>
    </>
  );
}
export default PackingList;
