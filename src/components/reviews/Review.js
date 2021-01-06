import React from "react"
import "./Review.css"

export const Review = ({ review }) => { 

    return (
        <>
            <div className="individualReview">
                <div className="reviewMessage">-{review.message}</div>
                <div className="reviewAuthor">-{review.author.user.first_name} {review.author.user.last_name}</div>
            </div>
        </>
    )
}