import React, { useContext, useEffect } from "react"
import { BikeContext } from "./BikeProvider"
import { Bike } from "./Bike"
import { StateContext } from "../state/StateProvider"
import "./Bike.css"

export const BikeList = (city) => {
    // This state changes when `getLocations()` is invoked below
    const { bikes, getBikes } = useContext(BikeContext)
    const { states, getStates } = useContext(StateContext)
    const filteredBikes = bikes.filter(bike => bike.rider.city === city)

    const state = React.createRef()

    useEffect(() => {
        getBikes()
        getStates()
    }, [])



    return (
        <div className="form-cont">
            <form className='searchForm'>
                <fieldset>
                    <input 
                    name="search"
                    type="text"
                    className="cityBox"
                    placeholder="Enter city to search"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="state"></label>
                    <select
                    ref={state}
                    name="state"
                    className="statePicker"
                    required
                    >
                        <option value="0">Choose a state</option>
                        {states.map((s) => (
                            <option key={s.id} value={s.id}>
                                {s.name}
                            </option>
                        ))}
                    </select>
                </fieldset>
                <button className=" rideButton btn btn-1">Find a Ride!</button>
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