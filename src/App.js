import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Admin } from "./components/pages/Admin";
import { Login } from "./components/pages/Login";
import "./App.css";
 import {RequireAuth} from "./hoc/RequireAuth";
 import {AuthProvider} from "./hoc/AuthProvider"

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
          <Link className="Link" to="/Admin">
            Admim
  </Link>
        </div>
      </header>
      
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Admin"element={
        <RequireAuth> 
        <Admin />
         </RequireAuth>
        }/>
        </Routes>
      </AuthProvider>
      </>
    
  );
};

export default App;
