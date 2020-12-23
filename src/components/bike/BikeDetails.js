import React, { useContext, useEffect } from "react"
import { BikeContext } from "./BikeProvider"
import { Bike } from "./Bike"
import "./Bike.css"

export const BikeList = (city) => {
    // This state changes when `getLocations()` is invoked below
    const { bikes, getBikes } = useContext(BikeContext)
    const filteredBikes = bikes.filter(bike => bike.rider.city === city)

    useEffect(() => {
        getBikes()
    }, [])



    return (
        <>
            <div className='whereTo'>Where are you heading today?</div>
            <div className="form-cont">
            <h3 className='searchedCity'>Bikes Available in *SearchedCity*</h3>
            <div className="bikes">
                {
                    bikes.map(bik => <Bike key={bik.id} bike={bik} />)
                }
            </div>
        </div>
        </>
    )
}