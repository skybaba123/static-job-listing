import { useEffect, useState } from "react";
import jsonData from "./data.json";
// import bgImageDesktop from "./images/bg-header-desktop.svg";
import "./App.scss";
import Tablet from "./components/Tablet";
import Job from "./components/Job";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  const searchHandler = (item) => {
    if (search.includes(item)) {
      return;
    }
    setSearch((prev) => [...prev, item]);
  };

  const removeSearchItem = (item) => {
    setSearch((prev) => prev.filter((active) => active !== item));
  };

  const clearSearch = () => {
    setSearch([]);
  };

  const result = data.filter((dat) => {
    const currentTool = [dat.role, dat.level, ...dat.languages, ...dat.tools];
    return search.some((value) => currentTool.includes(value));
  });
  const displayData = search.length === 0 ? data : result;

  return (
    <div className="App">
      <header />
      <section className="main">
        {search.length !== 0 && (
          <div className="search-container">
            <div className="search-item-container">
              {search.map((se) => (
                <Tablet key={se} onRemoveSearch={removeSearchItem} item={se} />
              ))}
            </div>
            <p onClick={clearSearch} className="clear">
              Clear
            </p>
          </div>
        )}
        <div className="jobs-container">
          {displayData.map((dat) => (
            <Job
              key={dat.id}
              company={dat.company}
              logo={dat.logo}
              isNew={dat.new}
              isFeatured={dat.featured}
              position={dat.position}
              role={dat.role}
              level={dat.level}
              postedAt={dat.postedAt}
              contract={dat.contract}
              location={dat.location}
              languages={dat.languages}
              tools={dat.tools}
              onSearch={searchHandler}
              search={search}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
