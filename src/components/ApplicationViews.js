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
import { MyBikeProvider } from "./bike/MyBikesProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            
                {/* Render the location list when http://localhost:3000/ */}
                <BikeProvider>
                    <BikeTypeProvider>
                        <BikeSizeProvider>
                            <StateProvider>
                                <PaymentProvider>
                                    <MyBikeProvider>
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
                                    </MyBikeProvider>
                                </PaymentProvider>
                            </StateProvider>
                        </BikeSizeProvider>
                    </BikeTypeProvider>
                </BikeProvider>
        </>
    )
}