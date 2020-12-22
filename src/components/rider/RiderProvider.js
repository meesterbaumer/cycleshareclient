import React, { useState } from "react"

export const RiderContext = React.createContext()

export const RiderProvider = (props) => {
    const [riders, setRiders] = useState([])

    const getRiders = () => {
        return fetch("http://localhost:8000/riders", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("CS_token")}`
            }
        })
        .then(res => res.json())
        .then(setRiders)
    }

    return (
        <RiderContext.Provider value={{
            riders, getRiders
        }}>
            {props.children}
        </RiderContext.Provider>
    )
}
