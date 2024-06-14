import React, { useEffect, useState } from "react";
import Boton from "../Botones/Boton";
import CartIcon from "../../../img/icons/shopping-cart.svg"
import ProductService from "../../../servicios/productService"

const producto = ProductService.getProductById(1);

const ProductCard = ({ product }) => {
    const [cantidad, setCantidad] = useState("");
    const [error, setError] = useState();
    const [subtotal, setSubtotal] = useState();

    const handleAddToCart = (event) => {
        throw new Error('Function handleAddToCart() not implemented');
    }

    const manejarCambiodeCantidad = () => {
        console.log("Cantidad cambio a", cantidad);
        //covertir string del input state a un entero
        if (parseInt(cantidad) <= 0 && parseInt(cantidad) !== 0) {
            setError("Ingrese una cantidad válida");
            setSubtotal("");
            return
        } else {
            setError("");
        }
        setSubtotal(producto.price.value * cantidad);
    }

    useEffect(manejarCambiodeCantidad, [cantidad])


    return (
        <div className="card w-25" style={{ height: "450px", border: "1px solid var(--color-division)" }}>
            <div className="position-relative">
                <img className="card-img-top" src={producto.images[0]} alt="Card image cap" width="393" height="233" />
                {cantidad && subtotal > 0 && (
                    <span className="position-absolute  bottom-0 start-0 bg-secondary px-4 py-1">Subtotal €{subtotal.toFixed(2)}</span>
                )}
                <span className="position-absolute  bottom-0 end-0 text-wrap p-2 rounded" style={{ background: "var(--color-primario)" }}>€ {producto.price.value.toFixed(2)}</span>
            </div>
            <div className="card-body">
                <h5 className="card-title fw-bold">{producto.name}</h5>
                <p className="card-text overflow-hidden" style={{ maxHeight: "80px", minHeight: "80" }}>{producto.description}</p>
                <div className="d-flex flex-row w-100 justify-content-end align-items-center gap-3">
                    <div className="form-group" style={{ maxWidth: "105px" }}>
                        <input type="number" className="form-control rounded-0" placeholder="Cantidad" value={cantidad} onChange={(event => setCantidad(event.target.value))} />
                    </div>
                    <div>
                        <Boton icono={CartIcon} texto="Añadir al carrito" onClick={handleAddToCart} />
                    </div>
                </div>
                <div className="text-danger overflow-hidden text-center">
                    {error}
                </div>

            </div>
        </div >
    )

}

export default ProductCard;