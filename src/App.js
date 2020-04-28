import React from "react";

import { Navbar } from "./Navbar";
import { navbar_data } from "./data/navbar";

function App() {
  return (
    <div className="App">
      <Navbar brand="News" items={navbar_data} />
    </div>
  );
}

export default App;
