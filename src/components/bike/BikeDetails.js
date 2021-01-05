import React, { useContext, useEffect, useRef, useState } from "react"
import { BikeContext } from "./bikeprovider"
import { PaymentContext } from "../payments/PaymentProvider"
import "./BikeDetail.css"

export const BikeDetailsList = (props) => {
    const { getSingleBike } = useContext(BikeContext)
    const { payments, getPayments } = useContext(PaymentContext)

    const [bike, setBike] = useState({biketype:"", bikesize:"", image:"", rider:"", user:""})
    const costTrue = bike.fee
    const reserveBikeDialog = useRef()
    const reserveBikeClicked = () => reserveBikeDialog.current.showModal()

    useEffect(() => {
        getPayments()
        getSingleBike(props.match.params.bikeId)
        .then(r => setBike(r))
    }, [])

    
    


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
                            <div>{costTrue ? (<div><ul>{payments.map(p => <li>{p.payment.name}</li>)}</ul></div>): ""}</div>
                        </div>
                    </div>
                    <div className="bikeImageCont">
                        <div className="bike__image"><img className="bikeimage" src={bike.image}></img></div>
                    </div>
                </div>
                <div className="thirdThird">
                    <div>
                        placeholder to load some recent reviews
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
                <div>confirming your reservation of *users name*'s</div>
                <div>{bike.year} {bike.make} {bike.model}</div>
                <div className="bikeImageCont">
                    <div className="bike__image"><img className="bikeimage" src={bike.image}></img></div>
                </div>
                <div>
                    <select>
                        <option value="0">Select from the dates below</option>
                    </select>
                    <select>Payment Method</select>
                </div>
                <div className="finePrint">Ensure payment availabiltiy upon arrival
                    <br></br>
                    Be sure to bring a helmet for safety
                    <br></br>
                    CyCleShare assumes no responsibility for damage,
                    <br></br>
                    injury or death while using the platform.
                    <br></br>
                    RIDE AT YOUR OWN RISK!!
                </div>
                <br></br>
                <button>Confirm Reservation</button>
            </dialog>
        </>
    )
}