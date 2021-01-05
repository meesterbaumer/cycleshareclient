import React, { useContext, useEffect, useState } from "react"
import { BikeContext } from "./bikeprovider"
import { Bike } from "./Bike"
import "./Bike.css"
import { useHistory } from "react-router-dom"

export const BikeList = () => {

    const { bikes, getBikes, searchTerms } = useContext(BikeContext)

    const [ filteredBikes, setFiltered ] = useState([])
    const history = useHistory()

    // const notMyBikes = bikes
    //     .filter((b) => {
    //         return 
    //     })

    useEffect(() => {
        getBikes()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = bikes.filter(bike => bike.rider.city.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered(bikes)
        }
    }, [searchTerms, bikes])

    return (
        <>
            <div className="bikes">
                {
                    filteredBikes.map(bik => <Bike key={bik.id} bike={bik} />).reverse()
                }
            </div>
        </>
    )
}