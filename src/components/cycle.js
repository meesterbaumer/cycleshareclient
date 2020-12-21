import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./cycle.css"

export const Cycle = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("CS_token")) {
                return <>
                    <Route render={NavBar} />
                    <h1 className='CSLogo'>CyCleShare</h1>
                    <h3 className="greeting">Hello *username*, Welcome to CyCleShare</h3>
                    <Route render={props => <ApplicationViews {...props} />} />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
    </>
)