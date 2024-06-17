import React from "react"

const Footer = ({ appName, year }) => {

    return (
        <div className="d-flex justify-content-center align-items-center p-4 white-text ms-auto" style={{ background: "var(--color-acento)" }}>
            <div className="me-3">
                {appName}
            </div>
            <div>
                <span className="me-3">|</span>{year()}
            </div>
        </div>
    )
}


export default Footer;