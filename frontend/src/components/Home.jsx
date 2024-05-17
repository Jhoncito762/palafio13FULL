import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Intro from "./Intro";
import CardP from "./Card_product";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Contenedor = styled.div`
  width: 100%;
  background-color: #dddddd;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

const Heading = styled.a`
  font-family: 'Lato', sans-serif;
  color: #000000;
  cursor: pointer;
  font-size: 25px;
  margin-bottom: 25px;
`;

const Alerta = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #28a745;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 999;
  margin-top: 50px;
`;

const Home = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:7777/api/productos/listar')
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('Error al obtener datos:', error);
        });

    if (location.state && location.state.fromLogin) {
      setShowSuccessAlert(true);
      // Después de 4 segundos, ocultar la alerta y deshabilitarla
      const timer = setTimeout(() => {
        setShowSuccessAlert(false);
      }, 4000);

      // Limpiar el temporizador al desmontar el componente
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <Intro />
      {showSuccessAlert && (
        <Alerta>
          ¡Inicio de sesión exitoso!
        </Alerta>
       
      )}
      <Contenedor>
        
        <Heading>
            
        </Heading>      
      </Contenedor>
      <Contenedor>

      
      {data?.length > 0 && data.slice(0, 3).map( item => (
        <CardP
          key={item._id}
          title={item.nombre}
          price={item.precio}
          imagen={item.imagen}
          enlace={item._id}
        />
      ))}
      
        {/* <CardP title="Empanada Dorada" price="$1.500" imagen={ImagenEmpanada}  />	  */}
  
      </Contenedor>
    </>
  );
};

export default Home;
