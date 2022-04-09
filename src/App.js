import React, { useState } from "react";
import "./components/styles.css"
import List from "./components/List";
import Data from "./components/data";

function App() {
  const [people, setPeople] = useState(Data)
  return (
    <main>
      <section>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
