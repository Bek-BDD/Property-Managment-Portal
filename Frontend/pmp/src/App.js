import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import SplashScreen from "./component/SplashScreen";

import Cards from "./component/Cards";
import Footer from "./component/Footer";
import LoginPage from "./component/LoginPage";
import Signup from "./component/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./component/PageNotFound";
import EditAccount from "./component/EditAccount";
import CustomerDashBoard from "./component/Customer/CustomerDashBoard";
import CustomerHeader from "./component/Customer/CustomerHeader";
import ForgotPassword from "./component/ForgotPassword";
import ChangePassword from "./component/ChangePassword";
function App() {
  return (
    <BrowserRouter>
       {localStorage.getItem("tokens") == null ? 
       <Header /> : 
       <CustomerHeader />
      }
      <Routes>
     
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/editaccount" element={<EditAccount/>} />
        <Route path="/changeaccount" element={<PageNotFound/>} />
        <Route path="/" element={<SplashScreen />} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/customer" element={<CustomerDashBoard/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword />}/>
        <Route path="/changePassword/reset_pwd" element={<ChangePassword/>}/>
      
      </Routes>
      <Footer />
     
    </BrowserRouter>

  );
}

export default App;
