import React from "react";

import { Card } from "./Card";

export const SectionCard = () => {
    return (
        <section className="container">
            <div className="row row-cols-auto row-cols-md-3 row-cols-lg-5 d-flex justify-content-around  mt-5">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            
        </section>
    )
}