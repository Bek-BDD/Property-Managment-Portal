
import "./App.css";
import "@fontsource/poppins";
import Header from "./component/Header";
import SplashScreen from "./component/SplashScreen";
import AccountMenu from "./component/Customer/ProfileDropDown";
import PropertyDetails from "./component/PropertyDetails";
import OwnerAppDashBoard from "./component/Owner/OwnerAppDashBoard";
import Cards from "./component/Cards";
import Footer from "./component/Footer";
import LoginPage from "./component/LoginPage";
import Signup from "./component/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./component/PageNotFound";
import ManageProperties from "./component/ManageProperties";
import CustomerDashBoard from "./component/Customer/CustomerDashBoard";
import ForgotPassword from "./component/ForgotPassword";
import CustomerHeader from "./component/Customer/CustomerHeader";
import ChangePassword from "./component/ChangePassword";
import CustomerApplications from "./component/Customer/CustomerApplications";
import { useEffect,useState } from "react";
import { ImageTable } from "./component/Customer/FavoritesTable";
import NewEditAccount from "./component/NewEditAccount";
import PropertyStepper from "./component/Property/PropertyStepper";
import OwnerApplication from "./component/Owner/OwnerApplications";
import ApplicationForm from "./component/ApplicationForm";
import ProfilePasswordChange from "./component/ProfilePasswordChange";
import ProflieChangePassword from "./component/ProflieChangePassword";
import ApplicationList from "./component/ApplicationList";
import FavouriteList from "./component/FavouriteList";
function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/editaccount" element={<NewEditAccount />} />
        <Route path="/profileChangePassword" element={<ProflieChangePassword/>}/>
        <Route path="/change-account" element={<PageNotFound />} />
        <Route path="/" element={<SplashScreen />} />
        <Route path="/viewApplication" element={<ApplicationList/>} />
        <Route path="/favourites" element={<FavouriteList/>} />
        <Route path="/property-detail" element={<PropertyDetails />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/create-property" element={<PropertyStepper />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/properties" element={<ManageProperties />} />
        <Route path="/customer" element={<CustomerDashBoard />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/changePassword/reset_pwd" element={<ChangePassword />} />
        <Route path="/customerdashboard"         element={<CustomerDashBoard/>} />
        <Route path="/ownerapplications" element={<OwnerAppDashBoard/>}/>
        <Route
          path="/customerapplications"
          element={<CustomerApplications />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
