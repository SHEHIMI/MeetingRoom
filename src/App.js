import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Reservation from "./Pages/Reservation";
import Admins from "./Pages/Admins";
import AdminDashboard from "./Pages/AdminDashboard";
import { registerLicense } from "@syncfusion/ej2-base";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGJWdkx0RWFbb1p6dFdMYFpBJAtUQF1hS39TdkxiX39ac3BWR2lc"
);
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Admins" element={<Admins />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
