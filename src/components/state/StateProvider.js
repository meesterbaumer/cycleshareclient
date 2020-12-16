import React, { useState, useEffect } from "react"

export const StateContext = React.createContext()

export const StateProvider = (props) => {
    const [states, setStates] = useState([])

    const getStates = () => {
        return fetch("http://localhost:8088/states")
        .then(res => res.json())
        .then(setStates)
    }

    return (
        <StateContext.Provider value={{
            states, getStates
        }}>
            {props.children}
        </StateContext.Provider>
    )
}

