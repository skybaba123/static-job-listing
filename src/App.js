import { useEffect, useState } from "react";
import jsonData from "./data.json";
// import bgImageDesktop from "./images/bg-header-desktop.svg";
import "./App.scss";
import Tablet from "./components/Tablet";
import Job from "./components/Job";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(jsonData);
  }, []);

  const search = ["Sass", "HTML", "HTML"];

  const result = data.filter((dat) => {
    const currentTool = [dat.role, dat.level, ...dat.languages, ...dat.tools];
    return search.some((value) => currentTool.includes(value));
  });
  console.log(result);

  return (
    <div className="App">
      <header />
      <section className="main">
        <div className="search-container">
          <div className="search-item-container">
            <Tablet />
          </div>
          <p className="clear">Clear</p>
        </div>
        <div
          style={{ borderLeft: "6px solid hsl(180, 31%, 42%)" }}
          className="jobs-container"
        >
          <Job />
        </div>
      </section>
    </div>
  );
}

export default App;
