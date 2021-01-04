import React, { useState } from "react"

export const MyBikeContext = React.createContext()

export const MyBikeProvider = (props) => {
    const [mybikes, setMyBikes] = useState([])

    const getMyBikes = () => {
        return fetch("http://localhost:8000/mybikes", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("CS_token")}`
            }
        })
        .then(res => res.json())
        .then(setMyBikes)
    }

    const updateMyBike = bike => {
        return fetch(`http://localhost:8000/mybikes/${bike.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("CS_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bike)
        })
            .then(getMyBikes)
    }

    const deleteMyBikes = bike => {
        return fetch(`http://localhost:8000/mybikes/${bike}`, {
            method: "DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("CS_token")}`
        }
        }).then(getMyBikes)
    }

    return (
        <MyBikeContext.Provider value={{
            mybikes, getMyBikes, deleteMyBikes
        }}>
            {props.children}
        </MyBikeContext.Provider>
    )
}