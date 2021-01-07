import React, { useContext, useEffect, useRef, useState } from "react"
import { RiderContext } from "../rider/RiderProvider"
import { BikeContext } from "../bike/bikeprovider"
import { BikeTypeContext } from "../bike/BikeTypeProvider"
import { BikeSizeContext } from "../bike/bikesizeprovider"
import { SearchForm } from "../dashboard/SearchForm"
import "./Dashboard.css"
import { MyBikesList } from "../bike/MyBikes"
import { MyReservationList } from "../reservation/ReservationsList"
import { ReviewList } from "../reviews/ReviewList"
import { useHistory } from "react-router-dom"

export const DashboardList = (props) => {

    const { bikeTypes, getBikeTypes } = useContext(BikeTypeContext)
    const { bikeSizes, getBikeSizes } = useContext(BikeSizeContext)
    const { bikes, getBikes, addBikes, editBikes, getSingleBike } = useContext(BikeContext)

    const [bike, setBike] = useState({
        year: 2020,
        make: "",
        model: "",
        biketype: {},
        bikesize: {},
        image: "",
        fee: 1
    })

    const [base64, setBase64] = useState(null)

    const editMode = props.match.params.hasOwnProperty("bikeId")
    const createMode = props.match.params.hasOwnProperty("bike")

    const handleControlledInputChange = (event) => {
        const newBike = Object.assign({}, bike)
        newBike[event.target.name] = event.target.value
        setBike(newBike)
    }

    const getBikeInEditMode = () => {
        if (editMode) {
          const bikeId = parseInt(props.match.params.bikeId);
          const selectedBike = bikes.find((a) => a.id === bikeId) || {};
          const bikeTemplate = {
              id: selectedBike.id,
              year : selectedBike.year,
              make : selectedBike.make,
              model : selectedBike.model,
              biketype : selectedBike.biketype.id,
              bikesize : selectedBike.bikesize.id,
              image : "",
              fee : selectedBike.fee
          }
          setBike(bikeTemplate);
        }
      };

    const getBase64 = (file, callback) => {
        const reader = new FileReader()
        reader.addEventListener('load', () => callback(reader.result))
        reader.readAsDataURL(file)
    }

    const createImageString = (event) => {
        getBase64(event.target.files[0], (base64ImageString) => {
            console.log("Base64 of file is", base64ImageString)
            setBase64(base64ImageString)
        })
    }

    const history = useHistory()

    useEffect(() => {
        if (editMode) {
          console.log("EditMode");
          addBikeClicked();
        } else if (createMode) {
          addBikeClicked();
        }
      }, []);

    useEffect(() => {
        getBikeInEditMode();
        }, [bikes]);

    useEffect(() => {
        console.log(bike)
    }, [bike])


    const addBikeDialog = useRef()
    // const year = useRef()
    // const make = useRef()
    // const model = useRef()
    // const type = useRef()
    // const size = useRef()
    // const image = useRef()
    // const fee = useRef()

    const addBikeClicked = () => addBikeDialog.current.showModal()

    useEffect(() => {
        getBikes()
        getBikeTypes()
        getBikeSizes()
    }, [])

    const addoreditBikes = () => {
        if (editMode) {
            editBikes({
                id: bike.id,
                year : parseInt(bike.year),
                make : bike.make,
                model : bike.model,
                biketype : parseInt(bike.biketype),
                bikesize : parseInt(bike.bikesize),
                image : base64,
                fee : bike.fee
            })
            .then(() => history.push("/"))
            
        } else {
            addBikes({
                year : parseInt(bike.year),
                make : bike.make,
                model : bike.model,
                biketype : parseInt(bike.biketype),
                bikesize : parseInt(bike.bikesize),
                image : base64,
                fee : bike.fee
            })
            .then(() => history.push("/"))
            addBikeDialog.current.close()
        }
    }

    return (
        <>
            {/* Initial render of dashboard content */}
            <h3 className="greeting">Hello Welcome to CyCleShare</h3>
            <button onClick={() => props.history.push("/bikes")}>Ready to ride?!  Click here to get moving</button>
            <div className='upcomingRides'>Upcoming Rides
                <MyReservationList />
            </div>
            <div className='myGarage'>Garage
            <button onClick={() => props.history.push("/create/bike")} className='addBikeButton'>Add a Bike</button>
                <MyBikesList />
            </div>
            <div className='myReviews'>Reviews
                <ReviewList />
            </div>

            {/* POP UP Dialog for adding a bike to your garage */}
            <dialog className="addBikeDialog" ref={addBikeDialog}>
                <div>Enter Your Bike's Details</div>
                <form>
                    <fieldset>
                        <label for="year">Year:</label>
                        <input
                            // ref={year}
                            type="number"
                            id="year"
                            name="year"
                            className="form-control"
                            placeholder="2020"
                            value={bike.year}
                            onChange={handleControlledInputChange}
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <label>Make:</label>
                        <input
                            // ref={make}
                            type="text"
                            name="make"
                            className="form-control"
                            placeholder="Trek"
                            value={bike.make}
                            onChange={handleControlledInputChange}
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <label>Model</label>
                        <input
                            // ref={model}
                            type="text"
                            name="model"
                            className="form-control"
                            placeholder="Madone"
                            value={bike.model}
                            onChange={handleControlledInputChange}
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <label>Type</label>
                        <select
                            // ref={type}
                            type="select"
                            name="biketype"
                            value={bike.biketype}
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
                            // ref={size}
                            type="select"
                            name="bikesize"
                            value={bike.bikesize}
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
                        onChange={createImageString}
                        type="file"
                        />
                    </fieldset>
                    <fieldset>
                        <label>Would you like to charge a fee to rent this bike?</label>
                        <select
                            // ref={fee}
                            type="select"
                            name="fee"
                            value={bike.fee}
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
                            onClick={(evt) => {
                                evt.preventDefault()
                                addoreditBikes()
                                addBikeDialog.current.close()
                                
                            }}
                        >
                        Add Bike
                        </button>
                        <button
                        onClick={(e) => {
                            addBikeDialog.current.close()
                            props.history.push("/");
                        }}
                        >Close</button>
                    </fieldset>
                </form>
            </dialog>
        </>
    )
}

