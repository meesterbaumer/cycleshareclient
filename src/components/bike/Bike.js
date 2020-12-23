import React from "react"
import "./Bike.css"

export const Bike = ({ bike }) => (
    <section className="individualBike">
        <div className="bike__heading">{bike.year} {bike.make} {bike.model}</div>
        <div className="bike__image">{bike.image}</div>
        <div className="bike__type">Type: {bike.biketype.label}</div>
        <div className="bike__size">Size: {bike.bikesize.label}</div>
        <button>{bike.make} {bike.model} Details</button>
    </section>
)