import React from "react";



const Hero = ({ title, subtitle }) => {

    return (
        <div className="container-fluid" style={{ background: "var(--color-light-primario)" }}>
            <div className="d-flex flex-column mx-1 mx-md-3 mx-lg-4 px-0 px-md-3 px-lg-4 p-1 p-md-5">
                <p className="text-capitalize fw-light text-muted fs-2"> {title}</p>

                <p className=" fs-4">{subtitle}</p>
            </div>
        </div>
    )
}

export default Hero;