import React, { useContext, useEffect } from "react"
import { ReviewContext } from "./ReviewProvider"
import { Review } from "./Review"
import "./Review.css"


export const ReviewList = () => {

    const { reviews, getReviews } = useContext(ReviewContext)

    useEffect(() => {
        getReviews()
    }, [])


    return (
        <>
            <div className="reviewsContainer">
                <div className="topHalf">
                <div className="reviewsHeading">Recent Reviews</div>
                    {
                        reviews.map(rev => <Review key={rev.id} review={rev} />).reverse()
                    }
                </div>
            </div>
        </>
    )
}