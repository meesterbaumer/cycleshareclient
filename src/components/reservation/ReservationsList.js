import React, { useContext, useEffect } from "react"
import { ReservationContext } from "./ReservationProvider"

import "./Reservation.css"
import { MyReservation } from "./SingleReservation"

export const MyReservationList = () => {
    const { reservations, getReservations } = useContext(ReservationContext)

    useEffect(() => {
        getReservations()
    }, [])

    return (
        <>
            <div className="myreservations">
            <br></br>
                {
                    reservations.map(res => <MyReservation key={res.id} reservation={res} />)
                }
                <br></br>
            </div>
        </>
    )
}