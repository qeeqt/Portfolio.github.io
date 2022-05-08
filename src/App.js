import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Admin } from "./components/pages/Admin";
import { Login } from "./components/pages/Login";

const App = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Admin">Admim</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default App;
