import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StarRating from "./StarRating.jsx";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={8} color="blue" onRating={setMovieRating} />
//       <p>
//         The movie was {movieRating} of {8}
//       </p>
//     </div>
//   );
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    /> */}
    {/* <StarRating maxRating={10} /> */}
    {/* <StarRating
      size={24}
      color="red"
      maxRating={10}
      className="test"
      defaultRating={9}
    />
    <StarRating /> */}
    {/* <Test /> */}
  </StrictMode>
);
