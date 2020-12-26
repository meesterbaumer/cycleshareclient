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

    return (
        <MyBikeContext.Provider value={{
            mybikes, getMyBikes
        }}>
            {props.children}
        </MyBikeContext.Provider>
    )
}