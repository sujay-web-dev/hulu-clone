import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import requests from "./requests";

function App() {
  const [selectedoption, setselectedoption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />

      <Nav setselectedoption={setselectedoption} />

      <Results selectedoption={selectedoption} />
    </div>
  );
}

export default App;
