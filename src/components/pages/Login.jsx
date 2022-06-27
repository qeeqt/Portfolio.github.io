import {

  Navigate,

  useLocation,
  useNavigate,
} from "react-router-dom";
import { useAuth } from '../../hook/useAuth'
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();
  const frompage = location.state?.form?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;
    signin(user, () => navigate(frompage, { replace: true }));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label >
          Name: <input name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export { Login };
