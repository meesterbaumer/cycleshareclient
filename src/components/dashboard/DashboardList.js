import React from "react"
import { RiderContext } from "../rider/RiderProvider"
import { SearchForm } from "../dashboard/SearchForm"
import "./Dashboard.css"
import { MyBikesList } from "../bike/MyBikes"

export const DashboardList = () => {

    return (
        <>
            <h3 className="greeting">Hello *username*, Welcome to CyCleShare</h3>
            <SearchForm />
            <div className='upcomingRides'>Upcoming Rides</div>
            <div className='myGarage'>Garage
                <MyBikesList />
            </div>
            <div className='myReviews'>Reviews</div>
        </>
    )
}