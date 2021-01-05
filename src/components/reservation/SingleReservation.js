import React, { useContext, useRef } from "react"
import "./Reservation.css"

export const MyReservation = ({reservation}) => {
    
    const [year, month, day] = reservation.date.split("-")

    return (
        <>
            <div className="individualReservation">
                <div className="date">{month}/{day}/{year} in {reservation.bike.rider.city}, {reservation.bike.rider.state.name}</div>
            </div>
        </>
    )
}