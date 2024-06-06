import React from "react";
import colores from "../../img/colores.jpg";

const Card = () => {
    return (
        <div className="col mb-3">
            <div className="card h-100">
                <img src={colores} className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Sequi esse rerum pariatur illo, aut optio eum
                        nulla doloremque veniam.
                    </p>
                </div>
                <div className="card-footer">
                    <button type="button" class="btn btn-primary">
                        Find out more
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Card;
