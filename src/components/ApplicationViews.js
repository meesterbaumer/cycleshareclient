import React from "react"
import { Route } from "react-router-dom"
import { CompleteProfile } from "./auth/CompleteProfile"
import { BikeList } from "./bike/BikeList"
import { BikeProvider } from "./bike/bikeprovider"
import { BikeSizeProvider } from "./bike/bikesizeprovider"
import { BikeTypeProvider } from "./bike/biketypeprovider"
import { StateProvider } from "./state/StateProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            
                {/* Render the location list when http://localhost:3000/ */}
                <BikeProvider>
                    <BikeTypeProvider>
                        <BikeSizeProvider>
                            <StateProvider>
                                <Route exact path="/">
                                    <BikeList />
                                </Route>
                                <Route path="/completeprofile">
                                    <CompleteProfile />
                                </Route>
                            </StateProvider>
                        </BikeSizeProvider>
                    </BikeTypeProvider>
                </BikeProvider>
        </>
    )
}