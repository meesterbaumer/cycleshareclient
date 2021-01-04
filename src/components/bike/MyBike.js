import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { MyBikeContext } from "./MyBikesProvider"
import "./Bike.css"

export const MyBike = ({ bike }) => {

    const {deleteMyBikes} = useContext(MyBikeContext)


    return (
        <section className="individualBike">
            <div className="bike__heading">{bike.year} {bike.make} {bike.model}</div>
            <div className="bike__image"><img className="bikeimage" src={bike.image}></img></div>
            <div className="bike__type">Type: {bike.biketype.label}</div>
            <div className="bike__size">Size: {bike.bikesize.label}</div>
            <button>Edit</button>
            <button onClick={() => deleteMyBikes(bike.id)}>Delete</button>
            
        </section>
    )
}