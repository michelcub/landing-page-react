import React from "react";


export const CallToAction = ({title, message, labelBtn}) => {
    return (
        <section className="container mt-3">
            <div className="row d-flex justify-content-center border bg-body-secondary p-4 py-5 rounded">
                <div className="col my-5">
                    <h1 className="display-2 fw-medium">{title}</h1>
                    <p>{message}</p>
                    <button className="btn btn-primary me-auto">
                        {labelBtn}
                    </button>
                </div>
            </div>
            
        </section>
    )
}

