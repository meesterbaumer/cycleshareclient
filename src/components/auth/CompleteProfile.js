import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { StateContext } from "../state/StateProvider"

export const CompleteProfile = (props) => {
    
    const { states, getStates } = useContext(StateContext)

    const address = React.createRef()
    const city = React.createRef()
    const state = React.createRef()

    useEffect(() => {
        getStates()
    }, [])

    const handleCompleteProfile = (e) => {
        e.preventDefault()

        const updateUser = {
            "address": address.current.value,
            "city": city.current.value,
            "state": state.current.value,
        }

        return fetch("http://127.0.0.1:8000/riders", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("CS_token")}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(props.history.push("/"))
    }

    return (
        <main style={{ textAlign: "center" }}>

            <form className="form--login" onSubmit={handleCompleteProfile}>
                <h1 className="h3 mb-3 font-weight-normal">Let's complete your account</h1>
                <fieldset>
                    <label htmlFor="address"> Address </label>
                    <textarea ref={address} name="address" className="form-control" placeholder="555 Cycle Street" />
                </fieldset>
                <fieldset>
                    <label htmlFor="city"> City </label>
                    <textarea ref={city} name="city" className="form-control" placeholder="Nashville" />
                </fieldset>
                <fieldset>
                    <label htmlFor="state"> State </label>
                    <select
                    ref={state}
                    name="state"
                    className="form-control"
                    required
                    >
                        <option value="0">Choose a state</option>
                        {states.map((s) => (
                            <option key={s.id} value={s.id}>
                                {s.name}
                            </option>
                        ))}
                    </select>
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="btn btn-1 btn-sep icon-send" type="submit">Complete Registration</button>
                </fieldset>
            </form>
        </main>
    )
}