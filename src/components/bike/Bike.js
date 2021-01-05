import React, { useRef } from "react"
import { Link } from "react-router-dom"
import "./Bike.css"

export const Bike = ({ bike }) => { 

    const bigPhotoDialog = useRef()

    const bigPic = () => bigPhotoDialog.current.showModal()

    return (
        <>
            <dialog className="photopopupdialog" ref={bigPhotoDialog}>
                <button onClick={() => bigPhotoDialog.current.close()}>x</button>
                <div className="bike__image">
                    <img className="bikeimagebig" src={bike.image} alt="larger version of Bike"></img>
                </div>
            </dialog>
            <section className="individualBike">
                <div className="bike__heading">{bike.year} {bike.make} {bike.model}</div>
                <div className="bike__location">Location: {bike.rider.city}, {bike.rider.state.name}</div>
                <div className="bike__image"><img onClick={bigPic} className="bikeimage" src={bike.image} alt="Thumbnail of Bicycle"></img></div>
                <div className="bike__type">Type: {bike.biketype.label}</div>
                <div className="bike__size">Size: {bike.bikesize.label}</div>
                <Link key={bike.id} to={`/bikes/${bike.id}`}>
                    <button>Details</button>
                </Link>
            </section>
        </>
    )
}