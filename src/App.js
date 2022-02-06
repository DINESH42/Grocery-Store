import { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { URL } from "./constants";
import Dashboard from "./Components/Dashboard/Dashboard";
import Shops from "./Components/Shops/Shops";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import CustomerReview from "./Components/CustomerReview/CustomerReview";
import Blogs from "./Components/Blogs/Blogs";
import ContactUs from "./Components/ContactUs/ContactUs";
import FreshFruits from "./Components/FreshFruits/FreshFruits";
import Vegitables from "./Components/Vegitables/Vegitables";
import Spices from "./Components/Spices/Spices";
import Wheat from "./Components/Wheat/Wheat";
import UserProfile from "./Components/UserProfile/UserProfile";
import { AppContext } from "./ContextFile/Context";

function App() {
  const { theme } = useContext(AppContext);

  return (
    <div className="App" data-theme={theme}>
      <BrowserRouter>
        <Route path={URL.HOME} component={Header} />
        <Route exact path={URL.HOME} component={Dashboard} />
        <Route exact path={URL.USER_PROFILE} component={UserProfile} />
        <Route exact path={URL.SHOPS} component={Shops} />
        <Route path={URL.ABOUT} component={About} />
        <Route path={URL.REVIEW} component={CustomerReview} />
        <Route path={URL.BLOGS} component={Blogs} />
        <Route path={URL.CONTACTUS} component={ContactUs} />
        <Route path={URL.FRUITS} component={FreshFruits} />
        <Route path={URL.VEGITABLES} component={Vegitables} />
        <Route path={URL.SPICES} component={Spices} />
        <Route path={URL.WHEAT} component={Wheat} />
        <Route path={URL.HOME} component={Footer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
