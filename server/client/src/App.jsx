import "./App.css";
import { Routes, Route } from "react-router-dom";

/*import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";*/
import PhonePage from "./pages/PhonePage";
import PhoneDetails from "./pages/PhoneDetails";

function App() {
  return (
    <div className="App">

    <Routes>
        <Route path="/phones" element={<PhonePage />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
      
    </Routes>
      
      
    </div>
  );
}

export default App;
