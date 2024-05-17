import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import ProductoView from '../components/Card_product_view';
import CreatePedido from '../components/Create_pedido';
import Modal from '../components/Modal';
import axios from 'axios';

const ProductView = ({ match }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad
  const { id } = match.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:7777/api/productos/buscar/${id}`);
        setData(response.data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, [id]);

  const openModal = (productId) => {
    console.log('Abriendo modal de edición para el producto con ID:', productId);

    if (Array.isArray(data)) {
      const product = data.find((item) => item._id === productId);
      if (product) {
        setProductToEdit(product);
        setIsModalOpen(true);
      } else {
        console.log('Producto no encontrado en el array');
      }
    } else if (data && data._id === productId) {
      setProductToEdit(data);
      setIsModalOpen(true);
    } else {
      console.log('Producto no encontrado en data');
    }
  };

  const closeModal = () => {
    console.log('Modal cerrado');
    setProductToEdit(null);
    setIsModalOpen(false);
  };

  const handleCreatePedido = async () => {
    if (productToEdit) {
      try {
        const response = await axios.post('http://localhost:7777/api/pedidos', {
          productId: productToEdit._id,
          quantity: quantity,
        });
        console.log('Pedido creado:', response.data);
        closeModal();
      } catch (error) {
        console.error('Error al crear pedido:', error);
      }
    }
  };

  return (
    <>
      {data && (
        <ProductoView
          imagen={data.imagen}
          title={data.nombre}
          price={data.precio}
          description={data.descripcion}
          modal={() => openModal(id)}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      )}

      {productToEdit && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Validar pedido</h2>
          <br />
          <CreatePedido productoEditado={productToEdit} />
          <br />
          <label>
            Cantidad: {quantity}
          </label>
          <br />
          <button onClick={handleCreatePedido}>Crear Pedido</button>
          <br />
          <button className='close-button' onClick={closeModal}>
            X
          </button>
        </Modal>
      )}
    </>
  );
};

export default withRouter(ProductView);
