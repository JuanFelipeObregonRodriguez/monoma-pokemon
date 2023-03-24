import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <header>
        <div className="avatar" onClick={() => setMenu(true)}>
          <img src="https://via.placeholder.com/150" alt="Avatar" />
        </div>
        {menu && ( <div className="dropdown">
          <div className="dropdown-content">
            <a href="#">Perfil</a>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </div>
        </div> )}
      </header>
      <div className="cards-container">
        {/* Add code to render Pokemon cards here */}
      </div>
    </div>
  );
}

export default Dashboard;