import React, { useContext, useEffect } from "react"
import { ReservationContext } from "../reservation/ReservationProvider"
import { ReservationReview } from "../reservation/ReservationReview"
import { Review } from "./Review"
import "./Review.css"



export const AddReviewList = () => {

    const { reservations, getReservations } = useContext(ReservationContext)

    useEffect(() => {
        getReservations()
    }, [])


    return (
        <>
            <div className="addReviewsContainer">
                <div className="bottomHalf">
                    <div>Leave a Review</div>
                    <br></br>
                    <div className="mappedReservations">
                        {
                            reservations.map(res => <ReservationReview key={res.id} reservation={res} />).reverse()
                        }
                    </div>
                </div>
            </div>
        </>
    )
}