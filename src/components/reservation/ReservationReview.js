import React from "react"
import "./Reservation.css"

export const ReservationReview = ({ reservation }) => { 

    return (
        <>
            <div className="individualReservationReview">
                <div className="reviewFirstName">{reservation.bike.rider.user.first_name}</div>
                <div className="reviewFirstName">{reservation.bike.rider.user.last_name}</div>
                <div className="reviewMessage">Thank {reservation.bike.rider.user.first_name} for the ride</div>
                <input
                type="text"

                >
                </input>
            </div>
        </>
    )
}