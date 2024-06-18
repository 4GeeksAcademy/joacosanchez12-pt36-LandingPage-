import React from "react";

const Jumbotron = () => {
    return (
        <div className="card botron text-bg-dark mt-3 rounded-1 bg-light text-dark border border-0">
            <div className="card-img-overlay">
                <h1 className="card-title mt-2">A Warm Welcome!</h1>
                <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloribus quas iusto eligendi facilis odio laudantium unde,
                    neque vitae beatae adipisci blanditiis dolores asperiores
                    tenetur sed eum totam quis, consequatur laborum? Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                </p>
                <button type="button" class="btn btn-primary">
                    Call to action!
                </button>
            </div>
        </div>
    );
};
export default Jumbotron;
