import React from "react"
import { Route } from "react-router-dom"
import { CompleteProfile } from "./auth/CompleteProfile"
import { BikeDetailsList } from "./bike/BikeDetails"
import { BikeList } from "./bike/BikeList"
import { BikeProvider } from "./bike/BikeProvider"
import { BikeSizeProvider } from "./bike/BikeSizeProvider"
import { BikeTypeProvider } from "./bike/BikeTypeProvider"
import { PaymentProvider } from "./payments/PaymentProvider"
import { DashboardList } from "./dashboard/DashboardList"
import { StateProvider } from "./state/StateProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            
                {/* Render the location list when http://localhost:3000/ */}
                <BikeProvider>
                    <BikeTypeProvider>
                        <BikeSizeProvider>
                            <StateProvider>
                                <PaymentProvider>
                                    <Route exact path="/">
                                        <DashboardList />
                                    </Route>
                                    <Route exact path="/bikes">
                                        <BikeList />
                                    </Route>
                                    <Route path="/bikes/:bikeId(\d+)" render={
                                        props => <BikeDetailsList {...props} />
                                    } />
                                    <Route path="/completeprofile">
                                        <CompleteProfile />
                                    </Route>
                                </PaymentProvider>
                            </StateProvider>
                        </BikeSizeProvider>
                    </BikeTypeProvider>
                </BikeProvider>
        </>
    )
}