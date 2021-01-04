import React, { useContext, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { MyBikeContext } from "./MyBikesProvider"
import "./Bike.css"

export const MyBike = ({ bike }) => {

    const {deleteMyBikes} = useContext(MyBikeContext)

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
                <div className="bike__image"><img onClick={bigPic} className="bikeimage" src={bike.image} alt="Thumbnail of Bicycle"></img></div>
                <div className="bike__type">Type: {bike.biketype.label}</div>
                <div className="bike__size">Size: {bike.bikesize.label}</div>
                <button>Edit</button>
                <button onClick={() => deleteMyBikes(bike.id)}>Delete</button>
                
            </section>
        </>
    )
}