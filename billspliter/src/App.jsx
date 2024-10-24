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
//reusable button component
function Button({ onClick, children }) {
  return (
    <>
      <button onClick={onClick} className="button">
        {children}
      </button>
    </>
  );
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  function handleSelection(friend) {
    setSelectedFriend((c) => (c?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList
            friends={friends}
            onSelection={handleSelection}
            selectedFriend={selectedFriend}
          />
          {showAddFriend && <FormAddFriend onAddfriend={handleAddFriend} />}

          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </>
  );
}

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <>
      <u>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            selectedFriend={selectedFriend}
            onSelection={onSelection}
            key={friend.id}
          />
        ))}
      </u>
    </>
  );
}

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

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
            {friend.name} owe's you ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        <Button onClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Selected"}
        </Button>
      </li>
    </>
  );
}

function FormAddFriend({ onAddfriend }) {
  const [name, setname] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const id = crypto.randomUUID();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const newFriend = { name, image: `${image}?=${id}`, balance: 0, id };
    onAddfriend(newFriend);
    setname("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <>
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label htmlFor="name">👯‍♂️ Friend Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <label htmlFor="name">🎞 Image URL</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoisPaying, setWhoisPaying] = useState("user");
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoisPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <>
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>
        <label htmlFor="bill">💰 Bill Value</label>
        <input
          type="text"
          id="bill"
          name="bill"
          placeholder="bill"
          value={bill}
          onChange={(e) => setBill(+e.target.value)}
        />
        <label htmlFor="my-expense">🤷‍♀️ Your Expense</label>
        <input
          type="text"
          id="my-expense"
          name="my-expense"
          placeholder="Your expense"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value)
          }
        />
        <label htmlFor="friend-expense">
          👭 {selectedFriend.name}'s Expense
        </label>
        <input
          type="text"
          id="friend-expense"
          name="friend-expense"
          placeholder="friends expense"
          disabled
          value={paidByFriend}
        />
        <label htmlFor="payee">😁 Who is paying the bill?</label>
        <select
          name="payee"
          id="payee"
          value={whoisPaying}
          onChange={(e) => setWhoisPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
        <Button>Split Bill</Button>
      </form>
    </>
  );
}
