import React, { useState } from "react"

export const BikeContext = React.createContext()

export const BikeProvider = (props) => {
    const [bikes, setBikes] = useState([])
    const [searchTerms, setTerms] = useState("")

    const getBikes = () => {
        return fetch("http://localhost:8000/bikes", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("CS_token")}`
            }
        })
        .then(res => res.json())
        .then(setBikes)
    }

    const getSingleBike = (bikeId) => {
        return fetch(`http://localhost:8000/bikes/${bikeId}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("CS_token")}`
            }
        })
        .then(res => res.json())
    }

    const addBikes = (bike) => {
        return fetch("http://localhost:8000/bikes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("CS_token")}`
          },
          body: JSON.stringify(bike),
        }).then(getBikes);
    };

    const editBikes = (bike) => {
    return fetch(`http://localhost:8000/bike/${bike.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("CS_token")}`
        },
        body: JSON.stringify(bike)
        })
    .then(getBikes)
    }

    const deleteBikes = (bikeId) => {
        return fetch(`http://localhost:8000/bikes/${bikeId}`, {
          method: "DELETE",
          headers:{
            "Authorization": `Token ${localStorage.getItem("CS_token")}`
        }
        }).then(getBikes);
      };

    return (
        <BikeContext.Provider value={{
            bikes, getBikes, addBikes, editBikes, deleteBikes, getSingleBike, searchTerms, setTerms
        }}>
            {props.children}
        </BikeContext.Provider>
    )
}
