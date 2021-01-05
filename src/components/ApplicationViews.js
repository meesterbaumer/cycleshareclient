import React from "react"
import { Route } from "react-router-dom"
import { CompleteProfile } from "./auth/CompleteProfile"
import { BikeDetailsList } from "./bike/BikeDetails"
import { BikeList } from "./bike/BikeList"
import { BikeProvider } from "./bike/bikeprovider"
import { BikeSizeProvider } from "./bike/bikesizeprovider"
import { BikeTypeProvider } from "./bike/BikeTypeProvider"
import { PaymentProvider } from "./payments/PaymentProvider"
import { DashboardList } from "./dashboard/DashboardList"
import { StateProvider } from "./state/StateProvider"
import { MyBikeProvider } from "./bike/MyBikesProvider"
import { SearchForm } from "./dashboard/SearchForm"
import { ReservationProvider } from "./reservation/ReservationProvider"

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
                                        <ReservationProvider>
                                            <Route 
                                            exact path="/"
                                            render={(props) => <DashboardList {...props} />}
                                            />
                                            <Route 
                                            exact path="/edit/:bikeId(\d+)"
                                            render={(props) => <DashboardList {...props} />}
                                            />
                                            <Route exact path="/bikes">
                                                <SearchForm />
                                                <BikeList />
                                            </Route>
                                            <Route path="/bikes/:bikeId(\d+)" render={
                                                props => <BikeDetailsList {...props} />
                                            } />
                                            <Route path="/completeprofile">
                                                <CompleteProfile />
                                            </Route>
                                        </ReservationProvider>
                                    </MyBikeProvider>
                                </PaymentProvider>
                            </StateProvider>
                        </BikeSizeProvider>
                    </BikeTypeProvider>
                </BikeProvider>
        </>
    )
}