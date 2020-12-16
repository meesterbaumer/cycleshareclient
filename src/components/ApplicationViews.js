import React from "react"
import { Route } from "react-router-dom"
import { Bike } from "./bike/Bike"

export const ApplicationViews = (props) => {
    return (
        <>
            
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <Bike />
                </Route>
            
        </>
    )
}