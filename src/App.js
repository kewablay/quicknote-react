import "./App.css";
import Header from "./components/Header";
import NoteList from "./components/pages/NoteList";

import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NotePage from "./components/NotePage";
import { AnimatePresence } from "framer-motion";

function App() {
  const [toggled, setToggled] = useState(false);

  return (
    <Router>
      <div className="App" id={`${toggled && 'light-mode'}`}>
        <Header />
        <AnimatePresence>
          <Route exact path="/">
            <NoteList toggled={ toggled } setToggled={ setToggled }/>
          </Route>
          <Route path="/:id" component={NotePage} />
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
