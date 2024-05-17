import { useState, useEffect } from 'react';
import '../css/form_add_product.css';
import Alerta from '../components/Alerta';
import axios from 'axios';

function CreatePedido(props) {
  const { productoEditado, onEditSuccess } = props;

  // Use the initial product values to populate the fields
  const [nombre, setNombre] = useState(productoEditado.nombre);
  const [precio, setPrecio] = useState(productoEditado.precio);
  const [cantidad, setCantidad] = useState(productoEditado.cantidad);
  const [cliente, setCliente] = useState('');
  const [direccion, setDireccion] = useState('');
  const [alerta, setAlerta] = useState({});
  const [total, setTotal] = useState(precio * cantidad);

  useEffect(() => {
    setTotal(precio * cantidad);
  }, [precio, cantidad]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      nombre,
      precio,
      cantidad,
      cliente,
      direccion,
      total, // Incluye el total en la solicitud
    };

    try {
      const response = await axios.post('http://localhost:7777/api/pedidos', requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setAlerta({
        msg: 'Pedido Realizado',
        error: false,
      });

      setCliente('');
      setDireccion('');

      // Para cerrar la ventana modal
      // onEditSuccess();
    } catch (error) {
      console.error(error);
      console.error('Error Response:', error.response);

      setAlerta({
        msg: 'No se puede crear el pedido',
        error: true,
      });
    }
  };

  const { msg } = alerta;
  return (
    <>
      {msg && <Alerta alerta={alerta} />}
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="flex">
            <label>
              <input
                className="input"
                type="text"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                disabled={productoEditado !== undefined}
                style={{ backgroundColor: productoEditado !== undefined ? '#f0f0f0' : '' }}
              />
              <span>Producto</span>
            </label>

            <label>
              <input
                className="input"
                type="text"
                id="precio"
                name="precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                required
                disabled={productoEditado !== undefined}
                style={{ backgroundColor: productoEditado !== undefined ? '#f0f0f0' : '' }}
              />
              <span>Precio</span>
            </label>

            <label>
              <input
                className="input"
                type="number"
                id="cantidad"
                name="cantidad"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                required
                disabled={true} // Deshabilitado ya que viene predefinido
                style={{ backgroundColor: '#f0f0f0' }}
              />
              <span>Cantidad</span>
            </label>
          </div>

          <label>
            <input
              className="input"
              type="text"
              id="cliente"
              name="cliente"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
              required
            />
            <span>Nombre del Cliente</span>
          </label>

          <label>
            <input
              className="input"
              type="text"
              id="direccion"
              name="direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
            />
            <span>Direccion</span>
          </label>

          <div className="total">
            <h3>Total: ${total}</h3>
          </div>

          <button className="submit">Confirmar</button>
        </form>
      </div>
    </>
  );
}

export default CreatePedido;
