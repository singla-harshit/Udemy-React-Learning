import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StarRating from "./StarRating";
import { Test } from "./StarRating";
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} />
    <StarRating maxRating={10} color="gold" />
    <StarRating maxRating={10} color="gold" size="40px" defaultRating={7}/>
    <StarRating
      maxRating={5}
      color="gold"
      size="40px"
      messages={["one", "two", "Amazing", "Siraa", "ohooo"]}
    />
    <StarRating
      maxRating={5}
      color="pink"
      size="40px"
      messages={["one", "two", "Amazing", "Siraa", "ohooo"]}
      defaultRating={3}
    />
    <Test/>
  </StrictMode>
);
