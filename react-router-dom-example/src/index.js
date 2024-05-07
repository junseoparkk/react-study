import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
};

const Topics = () => {
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Hello React Router Dom!</h1>
      <Home></Home>
      <Topics></Topics>
      <Contact></Contact>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
