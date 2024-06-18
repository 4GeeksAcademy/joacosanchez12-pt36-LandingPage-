import React from "react";

const Card = (props) => {
    return (
        <div className="col mb-3">
            <div className="card h-100">
                <img src={props.img} className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text text-center">{props.description}</p>
                </div>
                <div className="card-footer">
                    <button type="button" class="buttonCard btn btn-primary">
                        {props.button}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Card;
