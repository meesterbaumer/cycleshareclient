import React, { useContext, useEffect } from "react"
import { BikeContext } from "./BikeProvider"
import { Bike } from "./Bike"
import "./Bike.css"

export const BikeList = () => {
    // This state changes when `getLocations()` is invoked below
    const { bikes, getBikes } = useContext(BikeContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        getBikes()
    }, [])

    return (
        <div className="bikes">
        {
            bikes.map(bik => <Bike key={bik.id} bike={bik} />)
        }
        </div>
    )
}