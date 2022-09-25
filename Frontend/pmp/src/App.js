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
import ManageProperties from "./component/ManageProperties";

function App() {

  return (
    <BrowserRouter>
       <Header />
      <Routes>
     
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/editaccount" element={<EditAccount/>} />
        <Route path="/changeaccount" element={<PageNotFound/>} />
        <Route path="/" element={<SplashScreen />} />
        <Route path="*" element={<PageNotFound/>} />
          <Route path="/properties" element={<ManageProperties/>} />
      
      </Routes>
      <Footer />
     
    </BrowserRouter>

  );
}

export default App;
