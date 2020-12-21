import React from "react"
import "./Bike.css"

export const Bike = ({ bike }) => (
    <section className="location">
        <h3 className="location__name">{bike.make}</h3>
        <address className="location__address">{bike.model}</address>
    </section>
)