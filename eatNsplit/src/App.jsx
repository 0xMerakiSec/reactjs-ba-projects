import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
//Button is the reusable component here.
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowAddForm() {
    setShowAddFriend((show) => !show);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  function handleSelectFriend(friend) {
    setSelectedFriend(friend.name);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddForm}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill />}
    </div>
  );
}

function FriendsList({ friends }) {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </>
  );
}

function Friend({ friend }) {
  return (
    <>
      <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        <Button onClick={() => handleSelectFriend(friend)}>Select</Button>
      </li>
    </>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    //early return
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      id,
      balance: 0,
    };
    onAddFriend(newFriend);
  }

  return (
    <>
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label htmlFor="name">👯‍♂️Friend name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="image-url">🎞ImageURL</label>
        <input
          type="text"
          name="image"
          id="image-url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </>
  );
}

function FormSplitBill() {
  return (
    <>
      <form className="form-split-bill">
        <h2>SPlit a bill with X</h2>
        <label htmlFor="split-bill">💰Bill Value</label>
        <input type="text" name="split-bill" id="split-bill" />
        <Button>Split Bill</Button>
        <label htmlFor="your-expense">🐱‍👤Your Expenses</label>
        <input type="text" name="your-expense" id="your-expense" />
        <label htmlFor="friend-expense">👯‍♂️X's expense</label>
        <input type="text" name="friend-expense" id="friend-expense" disabled />
        <label htmlFor="payee">🙀Who is paying the bill?</label>
        <select name="payee" id="payee">
          <option value="user">You</option>
          <option value="friend">X</option>
        </select>
      </form>
    </>
  );
}
