
import "./App.css";
import Header from "./component/Header";
import SplashScreen from "./component/SplashScreen";
import Footer from "./component/Footer";
import LoginPage from "./component/LoginPage";
import Signup from "./component/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./component/PageNotFound";
import ChangePassword from "./component/ProflieChangePassword";
import NewEditAccount from "./component/NewEditAccount";
import ForgetPassword from "./component/ForgetPassword";

function App() {
  return (
    <BrowserRouter>
       <Header />
      <Routes>
     
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/editaccount" element={ <NewEditAccount/> } />
        <Route path="/changeaccount" element={<PageNotFound/>} />
        <Route path="/changepassword" element={<ChangePassword/>}/>
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
        <Route path="/" element={<SplashScreen />} />
        <Route path="*" element={<PageNotFound/>} />
      
      </Routes>
      <Footer />
     
    </BrowserRouter>

  );
}

export default App;
