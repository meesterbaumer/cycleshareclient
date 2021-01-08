import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { ReviewContext } from "../reviews/ReviewProvider"
import "./Reservation.css"

export const ReservationReview = ({ reservation }) => { 

    const { addReviews } = useContext(ReviewContext)

    const history = useHistory()

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
        .then(history.push("/"))
    }

    return (
        <>
            <div className="individualReservationReview">
                <div className="reviewFirstName">{reservation.bike.rider.user.first_name}</div>
                <div className="reviewFirstName">{reservation.bike.rider.user.last_name}</div>
                <br></br>
                <div className="addreviewMessage">Thank {reservation.bike.rider.user.first_name} for the ride</div>
                <div className="addreviewMessage">on his {reservation.bike.year} {reservation.bike.model}</div>
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