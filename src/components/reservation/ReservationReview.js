import React, { useContext, useState } from "react"
import { ReviewContext } from "../reviews/ReviewProvider"
import "./Reservation.css"

export const ReservationReview = ({ reservation }) => { 

    const { addReviews } = useContext(ReviewContext)

    const [review, setReview] = useState({
        message: ""
    })

    const handleControlledInputChange = (event) => {
        const newReview = Object.assign({}, review)
        newReview[event.target.name] = event.target.value
        setReview(newReview)
    }

    const addReview = () => {
        addReviews({
            message : review.message,
            user : reservation.bike.rider.id
        })
    }

    return (
        <>
            <div className="individualReservationReview">
                <div className="reviewFirstName">{reservation.bike.rider.user.first_name}</div>
                <div className="reviewFirstName">{reservation.bike.rider.user.last_name}</div>
                <div className="reviewMessage">Thank {reservation.bike.rider.user.first_name} for the ride</div>
                <textarea
                name="message"
                id="message"
                onChange={handleControlledInputChange}
                rows="5"
                cols="15"
                placeholder="Type your message here"
                required
                />
                <button onClick={addReview}>Submit Review</button>
            </div>
        </>
    )
}