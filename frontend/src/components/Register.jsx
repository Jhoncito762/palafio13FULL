import { useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { Link } from "react-router-dom";
import Alerta from './Alerta_register.jsx';
import "../js/login.js";
import "../css/register.css";

const Contenedor1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Register = () => {
  const valorInicial = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmarPassword: ''
  };

  const [usuario, setUsuario] = useState(valorInicial);
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });

  const capturarDatos = (e) => {
    const { name, value } = e.target;
    setUsuario({...usuario, [name]: value});
  };

  const guardarDatos = async (e) => {
    e.preventDefault();

    if ([usuario.nombre, usuario.apellido, usuario.email, usuario.password, usuario.confirmarPassword].includes('')) {
      setAlerta({ mensaje: 'Todos los campos son obligatorios', tipo: 'error' });
      return;
    }

    if (usuario.password !== usuario.confirmarPassword) {
      setAlerta({ mensaje: 'Las contraseñas no coinciden', tipo: 'error' });
      return;
    }

    try {
      await axios.post('http://localhost:7777/api/usuarios/signin', usuario);
      setAlerta({ mensaje: 'Usuario registrado exitosamente', tipo: 'success' });
      setUsuario(valorInicial);
    } catch (error) {
      setAlerta({ mensaje: error.response ? error.response.data.msg : 'Error al conectar al servidor', tipo: 'error' });
    }
  };

  return (
    <Contenedor1>
      <div className="container6" id="container6">
        <h2>REGISTRO</h2>
        <br />
        {alerta.mensaje && <Alerta mensaje={alerta.mensaje} tipo={alerta.tipo} />}
        <form onSubmit={guardarDatos}>
          <input type="text" placeholder="Nombre" name="nombre" value={usuario.nombre} onChange={capturarDatos} />
          <br />
          <input type="text" placeholder="Apellido" name="apellido" value={usuario.apellido} onChange={capturarDatos} />
          <br />
          <input type="email" placeholder="Correo Electrónico" name="email" value={usuario.email} onChange={capturarDatos} />
          <br />
          <input type="password" placeholder="Contraseña" name="password" value={usuario.password} onChange={capturarDatos} />
          <br />
          <input type="password" placeholder="Confirmar Contraseña" name="confirmarPassword" value={usuario.confirmarPassword} onChange={capturarDatos} />
          <br />
          <button className='button3'>Crear cuenta</button>
          <Link to="/login">
            <button className='button3'>Iniciar sesión</button>
          </Link>
        </form>
      </div>
    </Contenedor1>
  );
};

export default Register;