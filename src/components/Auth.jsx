import React, { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Input, P, Button, ButtonMostrar, Container, VideoBackground, Header, Title, CardContainer } from "../UI/Styles";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("/data/users.json");
      const users = response.data;
      const validUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (validUser) {
        const token = "your_token_here"; // aquí deberías obtener el token desde la respuesta del servidor
        localStorage.setItem("token", token); // guardamos el token en el localStorage
        await Swal.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard"); // Redirigir al dashboard
      } else {
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Correo electrónico o contraseña incorrectos",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <Container>
        <VideoBackground>
        <video autoPlay muted>
          <source src="https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/tcg/sun-moon-team-up.mp4" type="video/mp4" />
        </video>
      </VideoBackground>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <h4>Monoma.io pokedex</h4>
        <label>
          Email:
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <ButtonMostrar
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </ButtonMostrar>
        </label>
        <br />
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
}

export default Auth;
