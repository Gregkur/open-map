import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Landing";

function App() {
  return (
    <Router>
      <Route path="/">
        <Landing />
      </Route>
    </Router>
  );
}

export default App;
