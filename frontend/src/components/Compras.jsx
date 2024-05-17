import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

import "../css/Compras.css";

const Caja = styled.div``;

const Precios = styled.h1``;

const Boton = styled.p``;

const Informacion = styled.h1``;

const Descripcion = styled.h1``;

const ConfirmarCompraButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
`;

const Compras = () => {
  const [metodoPago, setMetodoPago] = useState('');
  const [datosTarjeta, setDatosTarjeta] = useState({
    numero: '',
    fechaExpiracion: '', // Cambiado a cadena en lugar de Date
    codigoSeguridad: '',
  });
  const [mostrarDatosTarjeta, setMostrarDatosTarjeta] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const location = useLocation();

  useEffect(() => {
    // Obtener el producto seleccionado de la URL
    const searchParams = new URLSearchParams(location.search);
    const productoString = searchParams.get('producto');
    if (productoString) {
      const producto = JSON.parse(decodeURIComponent(productoString));
      setProductoSeleccionado(producto);
    }
  }, [location.search]);

  const handleMetodoPagoChange = (e) => {
    const selectedMetodoPago = e.target.value;
    setMetodoPago(selectedMetodoPago);

    if (selectedMetodoPago === 'tarjeta') {
      setMostrarDatosTarjeta(true);
    } else {
      setMostrarDatosTarjeta(false);
    }
  };

  const handleDatosTarjetaChange = (e) => {
    const { name, value } = e.target;

    setDatosTarjeta((prevDatos) => ({
      ...prevDatos,
      [name]: value,
      }));
    
  };

  return (
    <Caja>
      <div className='div_principal'>
        <h2>Pagos</h2>

        {/* Mostrar resumen del producto seleccionado */}
        {productoSeleccionado && (
          <div>
            <h3>Resumen de la Compra</h3>
            <p><strong>Producto:</strong> {productoSeleccionado.title}</p>
            <p><strong>Precio:</strong> {productoSeleccionado.price}</p>
            <p><strong>Descripción:</strong> {productoSeleccionado.descripcion}</p>
            <p><strong>Imagen:</strong> <img src={productoSeleccionado.imagen} alt="Producto" /></p>
          </div>
        )}

        <div>
          <label>Seleccione el método de pago:</label>
          <select value={metodoPago} onChange={handleMetodoPagoChange}>
            <option value="">Seleccione</option>
            <option value="tarjeta">Tarjeta</option>
            <option value="pse">PSE</option>
            <option value="efectivo">Efectivo</option>
          </select>
        </div>

        {mostrarDatosTarjeta && (
          <div>
            <h3>Datos de la tarjeta</h3>
            <label>Número de tarjeta:</label>
            <input
              type="text"
              name="numero"
              value={datosTarjeta.numero}
              onChange={handleDatosTarjetaChange}
            />
            <label>Fecha de expiración:</label>
            <input
              type="month"
              name="fechaExpiracion"
              value={datosTarjeta.fechaExpiracion}
              onChange={handleDatosTarjetaChange}
            />
            <label>Código de seguridad:</label>
            <input
              type="text"
              name="codigoSeguridad"
              value={datosTarjeta.codigoSeguridad}
              onChange={handleDatosTarjetaChange}
            />
          </div>
        )}

        <div>
          <h3>Datos de envío</h3>
          <label>Dirección:</label>
          <input type="text" />
          <label>Número de teléfono:</label>
          <input type="text" />
          <label>Nombre de quien recibe:</label>
          <input type="text" />
        </div>

        <ConfirmarCompraButton>Confirmar Compra</ConfirmarCompraButton>
      </div>
    </Caja>
  );
};

export default Compras;
