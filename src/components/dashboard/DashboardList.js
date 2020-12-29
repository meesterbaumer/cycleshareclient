import React, { useContext, useEffect, useRef } from "react"
import { RiderContext } from "../rider/RiderProvider"
import { BikeTypeContext } from "../bike/BikeTypeProvider"
import { SearchForm } from "../dashboard/SearchForm"
import "./Dashboard.css"
import { MyBikesList } from "../bike/MyBikes"

export const DashboardList = () => {

    const { bikeTypes, getBikeTypes } = useContext(BikeTypeContext)

    const addBikeDialog = useRef()
    const year = useRef()
    const make = useRef()
    const model = useRef()
    const type = useRef()

    const addBikeClicked = () => addBikeDialog.current.showModal()

    useEffect(() => {
        getBikeTypes()
    }, [])

    return (
        <>
            {/* Initial render of dashboard content */}
            <h3 className="greeting">Hello *username*, Welcome to CyCleShare</h3>
            <SearchForm />
            <div className='upcomingRides'>Upcoming Rides</div>
            <div className='myGarage'>Garage
            <button onClick={addBikeClicked} className='addBikeButton'>Add a Bike</button>
                <MyBikesList />
            </div>
            <div className='myReviews'>Reviews</div>

            {/* POP UP Dialog for adding a bike to your garage */}
            <dialog className="addBikeDialog" ref={addBikeDialog}>
                <div>Enter Your Bike's Details</div>
                <form>
                    <fieldset>
                        <label for="year">Year:</label>
                        <input
                            ref={year}
                            type="number"
                            id="year"
                            name="year"
                            className="form-control"
                            placeholder="2020"
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <label>Make:</label>
                        <input
                            ref={make}
                            type="text"
                            name="make"
                            className="form-control"
                            placeholder="Trek"
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <label>Model</label>
                        <input
                            ref={model}
                            type="text"
                            name="model"
                            className="form-control"
                            placeholder="Madone"
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <label>Type</label>
                        <select
                            ref={type}
                            type="select"
                            name="type"
                            className="form-control"
                            required
                            >
                            <option value="0">Select from the categories below</option>
                            {bikeTypes.map((b) => (
                                <option key={b.id} value={b.id}>
                                {b.label}
                                </option>
                            ))}
                            </select>
                    </fieldset>
                    
                </form>
            </dialog>
        </>
    )
}

