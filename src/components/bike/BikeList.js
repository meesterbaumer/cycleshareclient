import React, { useContext, useEffect } from "react"
import { BikeContext } from "./BikeProvider"
import { Bike } from "./Bike"
import "./Bike.css"

export const BikeList = () => {
    // This state changes when `getLocations()` is invoked below
    const { bikes, getBikes } = useContext(BikeContext)

    useEffect(() => {
        getBikes()
    }, [])



    return (
        <>
            <div className="bikes">
                {
                    bikes.map(bik => <Bike key={bik.id} bike={bik} />)
                }
            </div>
        </>
    )
}