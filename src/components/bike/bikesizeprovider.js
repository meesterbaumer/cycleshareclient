import React, { useState } from "react"

export const BikeSizeContext = React.createContext()

export const BikeSizeProvider = (props) => {
    const [bikeSizes, setBikeSizes] = useState([])

    const getBikeSizes = () => {
        return fetch("http://localhost:8000/bikesizes", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("CS_token")}`
            }
        })
        .then(res => res.json())
        .then(setBikeSizes)
    }


    // const addBikes = (bike) => {
    //     return fetch("http://localhost:8000/bikes", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": `Token ${localStorage.getItem("CS_token")}`
    //       },
    //       body: JSON.stringify(bike),
    //     }).then(getBikes);
    // };

    // const editBikes = (bike) => {
    // return fetch(`http://localhost:8000/bike/${bike.id}`, {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": `Token ${localStorage.getItem("CS_token")}`
    //     },
    //     body: JSON.stringify(bike)
    //     })
    // .then(getBikes)
    // }

    // const deleteBikes = (bikeId) => {
    //     return fetch(`http://localhost:8000/bikes/${bikeId}`, {
    //       method: "DELETE",
    //       headers:{
    //         "Authorization": `Token ${localStorage.getItem("CS_token")}`
    //     }
    //     }).then(getBikes);
    //   };

    return (
        <BikeSizeContext.Provider value={{
            bikeSizes, getBikeSizes
        }}>
            {props.children}
        </BikeSizeContext.Provider>
    )
}