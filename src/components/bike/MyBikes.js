import React, { useContext, useEffect } from "react"
import { MyBikeContext } from "./MyBikesProvider"
import { MyBike } from "./MyBike"
import "./Bike.css"

export const MyBikesList = () => {

    const {mybikes, getMyBikes} = useContext(MyBikeContext)

    useEffect(() => {
        getMyBikes()
    }, [])

    return (
        <>
            <div className="mybikes">
                {
                    mybikes.map(bik => <MyBike key={bik.id} bike={bik} />).reverse()
                }
            </div>
        </>
    )
}