import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchCar from "./Client/SearchCar";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Home from "./Client/Home";
import Dashboard from "./Admin/Dashboard";
import LayoutClient from "../layout/LayoutClient";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutClient>
                <Home />
              </LayoutClient>
            }
          />
          <Route
            path="/search-car"
            element={
              <LayoutClient>
                <SearchCar />
              </LayoutClient>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
