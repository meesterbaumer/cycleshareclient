import React, { useState } from "react"

export const BikeTypeContext = React.createContext()

export const BikeTypeProvider = (props) => {
    const [bikeTypes, setBikeTypes] = useState([])

    const getBikeTypes = () => {
        return fetch("http://localhost:8000/biketypes", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("CS_token")}`
            }
        })
        .then(res => res.json())
        .then(setBikeTypes)
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
        <BikeTypeContext.Provider value={{
            bikeTypes, getBikeTypes
        }}>
            {props.children}
        </BikeTypeContext.Provider>
    )
}