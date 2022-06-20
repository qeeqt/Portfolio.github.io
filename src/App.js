import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Admin } from "./components/pages/Admin";
import { Login } from "./components/pages/Login";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <>
      <header className="header">
        <div className="divlink">
          <Link className="Link" to="/">
            Home
          </Link>
          <Link className="Link" to="/Login">
            Login
          </Link>
          {/*<Link className="Link" to="/Admin">
            Admim
  </Link>*/}
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
