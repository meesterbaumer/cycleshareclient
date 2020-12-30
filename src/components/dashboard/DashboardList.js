import React, { useContext, useEffect, useRef, useState } from "react"
import { RiderContext } from "../rider/RiderProvider"
import { BikeContext } from "../bike/bikeprovider"
import { BikeTypeContext } from "../bike/BikeTypeProvider"
import { BikeSizeContext } from "../bike/bikesizeprovider"
import { SearchForm } from "../dashboard/SearchForm"
import "./Dashboard.css"
import { MyBikesList } from "../bike/MyBikes"

export const DashboardList = (props) => {

    const { bikeTypes, getBikeTypes } = useContext(BikeTypeContext)
    const { bikeSizes, getBikeSizes } = useContext(BikeSizeContext)
    const { bikes, getBikes, addBikes, editBikes, getSingleBike } = useContext(BikeContext)

    const { bike, setBike } = useState({})

    const editMode = props.match.params.hasOwnProperty("bikeId")

    const handleControlledInputChange = (event) => {
        const newBike = Object.assign({}, bike)
        newBike[event.target.name] = event.target.value
        setBike(newBike)
    }

    const getBikeInEditMode = () => {
        if (editMode) {
            const bikeId = parseInt(props.match.params.bikeId)
            const selectedBike = bikes.find((b) => b.id === bikeId) || {}
            setBike(selectedBike)
        }
    }

    const addBikeDialog = useRef()
    const year = useRef()
    const make = useRef()
    const model = useRef()
    const type = useRef()
    const size = useRef()
    const image = useRef()
    const fee = useRef()

    const addBikeClicked = () => addBikeDialog.current.showModal()

    useEffect(() => {
        getBikes()
        getBikeTypes()
        getBikeSizes()
    }, [])

    useEffect(() => {
        getBikeInEditMode()
    }, [bikes])

    const addoreditBikes = () => {
        if (editMode) {
            editBikes({
                id: bike.id,
                year : parseInt(year.current.value),
                make : make.current.value,
                model : model.current.value,
                biketype : parseInt(type.current.value),
                bikesize : parseInt(size.current.value),
                image : image.current.value,
                fee : fee.current.value
            })
        } else {
            addBikes({
                year : parseInt(year.current.value),
                make : make.current.value,
                model : model.current.value,
                biketype : parseInt(type.current.value),
                bikesize : parseInt(size.current.value),
                image : image.current.value,
                fee : fee.current.value
            })
        }
    }

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
                            defaultValue="bike.year"
                            onChange={handleControlledInputChange}
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
                            defaultValue="bike.make"
                            onChange={handleControlledInputChange}
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
                            defaultValue="bike.model"
                            onChange={handleControlledInputChange}
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <label>Type</label>
                        <select
                            ref={type}
                            type="select"
                            name="type"
                            defaultValue="bike.type"
                            onChange={handleControlledInputChange}
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
                    <fieldset>
                        <label>Size</label>
                        <select
                            ref={size}
                            type="select"
                            name="size"
                            defaultValue="bike.size"
                            onChange={handleControlledInputChange}
                            className="form-control"
                            required
                            >
                                <option value="0">Select from the sizes below</option>
                                {bikeSizes.map((b) => (
                                    <option key={b.id} value={b.id}>
                                    {b.label}
                                    </option>
                                ))}
                        </select>
                    </fieldset>
                    <fieldset>
                        <label>Add a photo</label>
                        <input
                        className="form-control"
                        id="image"
                        name="image"
                        type="file"
                        />
                    </fieldset>
                    <fieldset>
                        <label>Would you like to charge a fee to rent this bike?</label>
                        <select
                            ref={fee}
                            type="select"
                            name="fee"
                            defaultValue="bike.fee"
                            onChange={handleControlledInputChange}
                            className="form-control"
                            required
                            >
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <button
                            className='addBikeButton'
                            type="submit"
                            onclick={(evt) => {
                                evt.preventDefault()
                                addoreditBikes()
                            }}
                        >
                        Add Bike
                        </button>
                    </fieldset>
                </form>
            </dialog>
        </>
    )
}

