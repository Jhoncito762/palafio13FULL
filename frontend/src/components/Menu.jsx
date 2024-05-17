import React, { useState, useEffect } from 'react';
import CardP from "../components/Card_product"
import axios from 'axios';

const Menu = () => {
    const [data, setData] = useState([]);
    //Obtener datos desde DB
    useEffect(() => {
        axios.get('http://localhost:7777/api/productos/listar')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error al obtener datos:', error);
            });
    }, []);


    return (
        <div className='max-w-6xl mx-auto py-12'>
            <div>
                <h2 className='text-xl italic font-bold text-center'>
                    Bienvenido al menu de Palacio de los Fritos
                </h2>
                <p className='text-center text-sm py-2'>
                    Degusta cualquiera de nuestros productos y disfruta de la mejor comida
                </p>
            </div>
            <div className='flex gap-4 flex-wrap justify-center'>
                {data?.length > 0 && data.slice(0, 5).map(item => (
                    <CardP
                        key={item._id}
                        title={item.nombre}
                        price={item.precio}
                        imagen={item.imagen}
                        enlace={item._id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Menu
