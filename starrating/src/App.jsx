import { useState } from "react";

function StarRating({
  color = "black",
  maxRate = 5,
  border = 2,
  borderColor = "black",
}) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  return (
    <div className=" min-h-screen min-w-full flex justify-center align-center items-center">
      <div className=" bg-slate-400 p-6 rounded-md shadow-lg flex items-center space-x-4">
        <div className="flex">
          {Array.from({ length: maxRate }, (_, i) => (
            <Star
              key={i}
              onClick={() => setRating(i + 1)}
              full={tempRating >= i + 1 || rating >= i + 1}
              color={color}
              onMouseEnter={() => setTempRating(i + 1)}
              onMouseLeave={() => setTempRating(0)}
              border={border}
              borderColor={borderColor}
            />
          ))}
        </div>
        <p>{tempRating || rating || ""}</p>
        {(rating || "") && (
          <button
            onClick={() => setRating(0)}
            className="bg-yellow-50 px-4 py-1 shadow-sm rounded-2xl font-semibold"
          >
            reset
          </button>
        )}
      </div>
    </div>
  );
}

function Star({
  onClick,
  full,
  color,
  onMouseEnter,
  onMouseLeave,
  border,
  borderColor,
}) {
  return (
    <span
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="12,2 15,9 23,9 17,14 19,22 12,17 5,22 7,14 1,9 9,9"
          fill={full ? color : "none"}
          stroke={borderColor}
          strokeWidth={border}
        />
      </svg>
    </span>
  );
}

export default function App() {
  return (
    <div>
      <StarRating maxRate={10} color="pink" border={1} borderColor="pink" />
    </div>
  );
}
