import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  useParams,
} from "react-router-dom";

const contents = [
  { id: 1, title: "HTML", description: "HTML is ..." },
  { id: 2, title: "JS", description: "JS is ..." },
  { id: 3, title: "React", description: "React is ..." },
];

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
};

const Topic = () => {
  let params = useParams();
  let topicId = params.topicId;
  let selectedTopic = {
    title: "Sorry",
    description: "Not Found",
  };

  for (let i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topicId)) {
      selectedTopic = contents[i];
      break;
    }
  }

  return (
    <div>
      <h3>{selectedTopic.title}</h3>
      {selectedTopic.description}
    </div>
  );
};

const Topics = () => {
  const list = [];
  for (let i = 0; i < contents.length; i++) {
    list.push(
      <li key={contents[i].id}>
        <NavLink to={`/topics/${contents[i].id}`}>{contents[i].title}</NavLink>
      </li>
    );
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>{list}</ul>
      <Routes>
        <Route path="/:topicId" element={<Topic />}></Route>
      </Routes>
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
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/*" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={"Not Found"} />
      </Routes>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
