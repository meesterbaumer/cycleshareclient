import React, { useState } from "react"

export const PaymentContext = React.createContext()

export const PaymentProvider = (props) => {
    const [payments, setPayments] = useState([])

    const getPayments = () => {
        return fetch("http://localhost:8000/payments", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("CS_token")}`
            }
        })
        .then(res => res.json())
        .then(setPayments)
    }

    return (
        <PaymentContext.Provider value={{
            payments, getPayments
        }}>
            {props.children}
        </PaymentContext.Provider>
    )
}