import React from 'react';
import "./Botones.css";

const Boton = ({ onClick, texto, icono }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            className="btn btn-first p-0 d-flex align-items-center justify-content-center"
            style={{
                width: '100%',
                padding: '8px 16px',
            }}
            onClick={handleClick}
        >
            {icono && (
                <div className="icon-container">
                    <img src={icono} alt="icono" style={{ width: "28px", height: "28px", marginRight: "0px", marginTop: "5px" }} />
                </div>
            )}
            <span
                style={{
                    whiteSpace: 'normal',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                {texto}
            </span>
        </button>
    );
};

export default Boton;
