import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { URL } from "./constants";
import Dashboard from "./Components/Dashboard/Dashboard";
import Shops from "./Components/Shops/Shops";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import CustomerReview from "./Components/CustomerReview/CustomerReview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={URL.HOME} component={Header} />
        <Route exact path={URL.HOME} component={Dashboard} />
        <Route path={URL.SHOPS} component={Shops} />
        <Route path={URL.ABOUT} component={About} />
        <Route path={URL.REVIEW} component={CustomerReview} />
        <Route path={URL.HOME} component={Footer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
