import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderAvatar  } from "../UI/Styles";
function Avatar() {
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
      <HeaderAvatar>
        <div className="avatar" onClick={() => setMenu(!menu)}>
          <img src="https://cdn-icons-png.flaticon.com/512/287/287221.png" alt="Avatar" />
        </div>
        {menu && (
          <div className="dropdown">
            <div className="dropdown-content">
              <a href="#">Perfil</a>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </div>
          </div>
        )}
      </HeaderAvatar>
      <div className="cards-container">
        {/* Add code to render Pokemon cards here */}
      </div>
    </div>
  );
}

export default Avatar;