import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ producto, addToCart }) => {
    const navigate = useNavigate();

    const handleVerMasClick = () => {
        navigate(`/producto/${producto.id}`, { state: { producto } });
    };

    return (
        <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="card mb-4 producto">
                 
                <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />

              
                <div className="card-body">
                   
                    <h3 className="card-title">{producto.nombre}</h3>

                    <div className="price">
                        <p className="card-text">{producto.precio}</p>
                        
                        <button className="btn btn-green" onClick={handleVerMasClick}>Ver Más</button>
                        <button className="btn btn-blue" onClick={() => addToCart(producto)}>Añadir al Carrito</button>
                    </div>
                </div>

                <div className="product-badge">{producto.categoria}</div>
            </div>
        </div>
    );
};

export default ProductCard;
