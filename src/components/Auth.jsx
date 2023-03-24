import React,{ useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    setLoading(true);
  try {
    const response = await axios.get('/data/users.json');
    const users = response.data;
    const validUser = users.find(user => user.email === email && user.password === password);
    if (validUser) {
        const token = "your_token_here"; // aquí deberías obtener el token desde la respuesta del servidor
        localStorage.setItem("token", token); // guardamos el token en el localStorage
      await Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        showConfirmButton: false,
        timer: 1500
      });
      navigate("/dashboard"); // Redirigir al dashboard
    } else {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Correo electrónico o contraseña incorrectos'
      });
    }
  } catch (error) {
    console.log(error);
  }
  setLoading(false);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <br />
        <label>
          Password:
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {isLoading && <p>Cargando...</p>}
    </div>
  );
}

export default Auth;