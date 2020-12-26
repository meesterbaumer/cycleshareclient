import React, { useContext, useEffect, useState } from "react"
import { BikeContext } from "./BikeProvider"
import { PaymentContext } from "../payments/PaymentProvider"
import "./BikeDetail.css"

export const BikeDetailsList = (props) => {
    const { getSingleBike } = useContext(BikeContext)
    const { payments, getPayments } = useContext(PaymentContext)

    const [bike, setBike] = useState({biketype:"", bikesize:"", image:""})

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
                            <div>Accepted Payments: </div>
                            <ul>{payments.map(p => <li>{p.payment.name}</li>)}</ul>
                        </div>
                    </div>
                    <div className="bikeImageCont">
                        <div className="bikeImage">{bike.image}</div>
                    </div>
                </div>
                <div className="thirdThird">
                    <div>
                        placeholder to load some recent reviews
                    </div>
                </div>
            </div>
        </>
    )
}