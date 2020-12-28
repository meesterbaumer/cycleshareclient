import React, { useContext, useEffect } from "react"
import { MyBikeContext } from "./MyBikesProvider"
import { MyBike } from "./MyBike"
import "./Bike.css"

export const MyBikesList = () => {

    const {myBikes, getMyBikes } = useContext(MyBikeContext)

    useEffect(() => {
        getMyBikes()
    }, [])

    return (
        <>
            <div className="bikes">
                {
                    myBikes.map(bik => <MyBike key={bik.id} bike={bik} />)
                }
            </div>
        </>
    )
}