import React, { useState } from "react"

export const ReservationContext = React.createContext()

export const ReservationProvider = (props) => {
    const [reservations, setReservations] = useState([])

    const getReservations = () => {
        return fetch("http://localhost:8000/reservations", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("CS_token")}`
            }
        })
        .then(res => res.json())
        .then(setReservations)
    }

    const addReservation = (reservation) => {
        return fetch("http://localhost:8000/reservations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("CS_token")}`
            },
            body: JSON.stringify(reservation),
        }).then(getReservations)
    }

    return (
        <ReservationContext.Provider values={{
            reservations, getReservations
        }}>
            {props.children}
        </ReservationContext.Provider>
    )
}