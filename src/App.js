import { useEffect, useState } from "react";
import jsonData from "./data.json";

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
      <h1>My father is good man</h1>
    </div>
  );
}

export default App;
