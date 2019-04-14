import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import Movie from "./components/Movie/Movie";
import uuidv4 from 'uuid/v4';
import "./App.scss";

const App = () => {
  React.useEffect(() => {
    let userId = localStorage.getItem('userId');
    if(!userId ) {
      userId = uuidv4();
      localStorage.setItem('userId', userId);
    }
  });

  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={MovieList} />
        <Route path="/movie/:id" component={Movie} />
      </div>
    </Router>
  );
};

export default App;
