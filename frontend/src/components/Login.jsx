// Login.jsx

import { useState } from 'react';
import styled from '@emotion/styled';
import Alerta from './Alerta.jsx';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import "../css/login.css";
import "../js/login.js";

const Contenedor = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState({});
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true,
      });
      return;
    }

    setAlerta({});

    try {
      const { data } = await axios.post('http://localhost:7777/api/usuarios/login', {
        email,
        password,
      });

      setAlerta({
        msg: data.msg,
        error: false,
      });

      // Guardar el estado de inicio de sesión en el localStorage
      localStorage.setItem('loggedIn', 'true');
      // Guardar el rol del usuario en el localStorage
      localStorage.setItem('userRol', data.rol);

      setEmail('');
      setPassword('');

      // Redirigir al usuario a la página principal después del inicio de sesión exitoso
      history.push('/', { fromLogin: true });
      window.location.reload(); // Recargar la página
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;
  
  return (
    <>
      <br /><br />
      {msg && <Alerta alerta={alerta} />}
      <Contenedor>
        <div className="container5" id="container5">
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <form onSubmit={handleSubmit}>
                  <input
                    className="input_login"
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="input_login"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="olvidar-contraseña">
                    <p>Olvidé mi contraseña</p>
                  </div>
                  <div className="button-container">
                    <button className='buttonl'>Iniciar Sesión</button>
                    <Link to="/register">
                      <button className='button2'>Crear cuenta</button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="form-container sign-in-container">
            <div className="Texto" id='text_palacio'>
              <h1>LOS GONZÁLEZ</h1>
              <h3>Empandas Caseras</h3>
            </div>
          </div>
        </div>
      </Contenedor>
    </>
  );
};

export default Login;

