import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { URL } from "./constants";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={URL.HOME} component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
