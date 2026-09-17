import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

function Dashboard() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default Dashboard;
