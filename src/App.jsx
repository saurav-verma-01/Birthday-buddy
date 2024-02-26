import { useState } from "react";
import "./app.css";
import User from "./components/User";

import userData from "./data";

const App = () => {
  const handleClearAll = () => {
    setData([]);
  };
  const handleReset = () => {
    setData(userData);
  };
  const [data, setData] = useState(userData);
  return (
    <main>
      <div className="card">
        <h2 className="heading">{data.length} Birthdays Today</h2>
        <div className="users">
          {data.map((item) => (
            <User item={item} key={item.id} />
          ))}
        </div>
        <button className="clear-btn button" onClick={handleClearAll}>
          Clear All
        </button>
        <button className="reset-btn button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </main>
  );
};
export default App;
