import React from "react"
import { Route } from "react-router-dom"
import { CompleteProfile } from "./auth/CompleteProfile"
import { Bike } from "./bike/Bike"
import { StateProvider } from "./state/StateProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <Bike />
                </Route>
                <StateProvider>
                    <Route path="/completeprofile">
                        <CompleteProfile />
                    </Route>
                </StateProvider>

            
        </>
    )
}