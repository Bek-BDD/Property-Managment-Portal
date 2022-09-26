import logo from "./logo.svg";
import "./App.css";
import "@fontsource/poppins";
import Header from "./component/Header";
import SplashScreen from "./component/SplashScreen";
import AccountMenu from "./component/Customer/ProfileDropDown";
import PropertyDetails from "./component/PropertyDetails";

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
import CustomerApplications from "./component/Customer/CustomerApplications";
import { useEffect,useState } from "react";
import { ImageTable } from "./component/Customer/FavoritesTable";
function App() {
  const[isLoggedIn,setIsLoggedIn] = useState(false)
useEffect(()=>{
  if(localStorage.getItem("tokens") != null){setIsLoggedIn(true)
}},[])
  return (
    <BrowserRouter>
      <Header />
       {!(isLoggedIn)? 
       <Header /> : 
       <CustomerHeader />
      }
      
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/editaccount" element={<EditAccount />} />
        <Route path="/changeaccount" element={<PageNotFound />} />
        <Route path="/" element={<SplashScreen />} />
        <Route path="apply/" element={<PropertyDetails />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/customer" element={<CustomerDashBoard/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword />}/>
        <Route path="/changePassword/reset_pwd" element={<ChangePassword/>}/>
        <Route path="/customerapplications" element={<CustomerApplications/>}/>
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
