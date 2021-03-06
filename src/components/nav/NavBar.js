import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
    <>
        <ul className="navbar">
            <button className="navbar__item btn-grad">
                <Link className="navbar__link" to="/">Dashboard</Link>
            </button>
            {/* <button className="navbar__item">
                <Link className="navbar__link" to="/profile">Profile</Link>
            </button> */}
            <button className="navbar__item btn-grad">
                <Link className="navbar__link" to="/reviews">Reviews</Link>
            </button>
            {
                (localStorage.getItem("CS_token") !== null) ?
                    <div className="nav-item">
                        <button className="nav-link fakeLink btn-grad"
                            onClick={() => {
                                localStorage.removeItem("CS_token")
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </div> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }
        </ul>
    </>
    )
}