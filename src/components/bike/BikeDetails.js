import React, { useContext, useEffect, useRef, useState } from "react"
import { BikeContext } from "./bikeprovider"
import { PaymentContext } from "../payments/PaymentProvider"
import { ReservationContext } from "../reservation/ReservationProvider"
import "./BikeDetail.css"
import { ReviewList } from "../reviews/ReviewList"

export const BikeDetailsList = (props) => {
    const { getSingleBike } = useContext(BikeContext)
    const { payments, getPayments } = useContext(PaymentContext)
    const { addReservation } = useContext(ReservationContext)

    const [bike, setBike] = useState({biketype:"", bikesize:"", image:"", rider:"", user:""})
    const costTrue = bike.fee
    const reserveBikeDialog = useRef()
    const reserveBikeClicked = () => reserveBikeDialog.current.showModal()
    
    const handleControlledInputChange = (event) => {
        const newRes = Object.assign({}, reservation)
        newRes[event.target.name] = event.target.value
        setReservation(newRes)
    }
    
    useEffect(() => {
        getPayments()
        getSingleBike(props.match.params.bikeId)
        .then(r => setBike(r))
    }, [])
    
    const [reservation, setReservation] = useState({
        date: "",
        paymentId: ""
    })
    
    console.log(reservation.date)
    console.log(reservation.paymentId)

    const confirmReservation = () => {
        addReservation({
            date: reservation.date,
            bikeId: parseInt(bike.id),
            paymentId: parseInt(reservation.paymentId)
        })
    }


    return (
        <>
            <div className="detailContainer">
                <div className="firstThird bikeHeading">{bike.year} {bike.model}</div>
                <div className="secondThird">
                    <div className="bikeDeets">
                        <div>
                            <div>Type: {bike.biketype.label}</div>
                            <div>Size: {bike.bikesize.label}</div>
                            <div>Rental fee: {costTrue ? "This bike can be rented for 5$ per hour.  See below for payment options:" : "Great news!  This bike is being offered for free!"}</div>
                            <div>{costTrue ? (<div><ul>{payments.map(p => <li>{p.name}</li>)}</ul></div>): ""}</div>
                        </div>
                    </div>
                    <div className="bikeImageCont">
                        <div className="bike__image"><img className="bikeimage" src={bike.image}></img></div>
                    </div>
                </div>
                <div className="thirdThird">
                    <div>
                        <div>Check out what you're fellow riders think:</div>
                        <ReviewList />
                    </div>
                </div>
                <div className="fourthThird">
                    <button onClick={reserveBikeClicked}>
                        Reserve {bike.model}
                    </button>
                </div>
            </div>

            {/* Dialog for reservation pop-up */}
            <dialog className="reserveDialog" ref={reserveBikeDialog}>
                <div>Confirming your reservation of this</div>
                <div>{bike.year} {bike.make} {bike.model}</div>
                <div className="bikeImageCont">
                    <div className="bike__image"><img className="bikeimage" src={bike.image}></img></div>
                </div>
                <div>
                    <input
                    type="date"
                    name="date"
                    onChange={handleControlledInputChange}
                    >
                    </input>
                    <select
                        type="select"
                        name="paymentId"
                        className="paymentDD"
                        onChange={handleControlledInputChange}
                    >
                        <option value="0">Select</option>
                        {payments.map((p) => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                    </select>
                </div>
                <div className="finePrint">
                    *Ensure payment availabiltiy upon arrival
                    <br></br>
                    *Be sure to bring a helmet for safety
                    <br></br>
                    *CyCleShare assumes no responsibility for damage,
                    <br></br>
                    injury or death while using the platform.
                    <br></br>
                    *RIDE AT YOUR OWN RISK!!
                </div>
                <br></br>
                <button onClick={(evt) => {
                    evt.preventDefault()
                    confirmReservation()
                    reserveBikeDialog.current.close()
                    props.history.push("/")
                }}>Confirm Reservation</button>
            </dialog>
        </>
    )
}