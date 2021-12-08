import "./App.css";
import Header from "./components/Header";
import NoteList from "./components/pages/NoteList";

import { BrowserRouter as Router, Route } from "react-router-dom";
import NotePage from "./components/NotePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={NoteList} />
        <Route path="/:id" component={NotePage} />
      </div>
    </Router>
  );
}

export default App;
