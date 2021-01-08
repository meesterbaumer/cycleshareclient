import React, { useContext, useRef } from "react"
import { Link } from "react-router-dom"
import "./Reservation.css"

export const MyReservation = ({reservation}) => {
    
    const [year, month, day] = reservation.date.split("-")
    const reservationDialog = useRef()

    const reservationDialogClicked = () => reservationDialog.current.showModal()

    return (
        <>
            <dialog className="resPopUpCont" ref={reservationDialog}>
            <div className="closeButton"><button onClick={() => reservationDialog.current.close()}>X</button></div>
                <div className="centered">You'll Be Riding {reservation.bike.rider.user.first_name}'s</div>
                <div className="centered bikeTitle">{reservation.bike.year} {reservation.bike.make} {reservation.bike.model}</div>
                <div className="bikeImageCont">
                        <div className="bike__image"><img className="bikeimage" src={reservation.bike.image}></img></div>
                </div>
                <div className="centered datepopup">on {month}/{day}/{year}</div><br></br>
                <div>{reservation.bike.rider.user.first_name}'s address:</div>
                <div className="centered">{reservation.bike.rider.address}</div>
                <div className="centered">{reservation.bike.rider.city}, {reservation.bike.rider.state.name}</div>
                <br></br>
                <div>your method of payment is:</div>
                <div className="centered">{reservation.payment.name}</div>
            </dialog>
            <div className="individualReservation">
                <Link onClick={reservationDialogClicked}><a className="date">{month}/{day}/{year} in {reservation.bike.rider.city}, {reservation.bike.rider.state.name}</a></Link>
            </div>
        </>
    )
}