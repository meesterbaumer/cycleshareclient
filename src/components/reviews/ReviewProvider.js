import React, { useState } from "react"

export const ReviewContext = React.createContext()

export const ReviewProvider = (props) => {
    const [reviews, setReviews] = useState([])

    const getReviews = () => {
        return fetch("http://localhost:8000/reviews", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("CS_token")}`
            }
        })
        .then(res => res.json())
        .then(setReviews)
    }

    const addReviews = (review) => {
        return fetch("http://localhost:8000/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("CS_token")}`
          },
          body: JSON.stringify(review),
        }).then(getReviews);
    };

    return (
        <ReviewContext.Provider value={{
            reviews, getReviews, addReviews
        }}>
            {props.children}
        </ReviewContext.Provider>
    )
}