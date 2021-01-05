import React from "react"
import { Link } from "react-router-dom"
import "./Bike.css"

export const Bike = ({ bike }) => (
    <section className="individualBike">
        <div className="bike__heading">{bike.year} {bike.make} {bike.model}</div>
        <div className="bike__location">location: {bike.rider.city}, {bike.rider.state.name}</div>
        <div className="bike__image"><img className="bikeimage" src={bike.image}></img></div>
        <div className="bike__type">Type: {bike.biketype.label}</div>
        <div className="bike__size">Size: {bike.bikesize.label}</div>
        <Link key={bike.id} to={`/bikes/${bike.id}`}>
            <button>Details</button>
        </Link>
    </section>
)