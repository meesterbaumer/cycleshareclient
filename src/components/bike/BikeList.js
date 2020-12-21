import React, { useContext, useEffect } from "react"
import { BikeContext } from "./BikeProvider"
import { Bike } from "./Bike"
import "./Bike.css"

export const BikeList = (city) => {
    // This state changes when `getLocations()` is invoked below
    const { bikes, getBikes } = useContext(BikeContext)
    const filteredBikes = bikes.filter(bike => bike.rider.city === city)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        getBikes()
    }, [])

    return (
        <div>
            <form>
                <fieldset>
                    <input 
                    name="search"
                    type="text"
                    placeholder="Enter city to search"
                    />
                    <button
                    >
                        search
                    </button>
                </fieldset>
            </form>
            <h3 className='searchedCity'>Bikes Available in *SearchedCity*</h3>
            <div className="bikes">
                {
                    bikes.map(bik => <Bike key={bik.id} bike={bik} />)
                }
            </div>
        </div>
    )
}