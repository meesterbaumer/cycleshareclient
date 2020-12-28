import React, { useContext, useEffect } from "react"
import { StateContext } from "../state/StateProvider"
import "./searchForm.css"

export const SearchForm = (city) => {
    
    const { states, getStates } = useContext(StateContext)

    const state = React.createRef()

    useEffect(() => {
        getStates()
    }, [])



    return (
        <>
            <div className='whereTo'>Where are you heading today?</div>
            <div className="form-cont">
            <form className='searchForm'>
                <fieldset>
                    <input 
                    name="search"
                    type="text"
                    className="cityBox"
                    placeholder="Enter city to search"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="state"></label>
                    <select
                    ref={state}
                    name="state"
                    className="statePicker"
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
                <button className=" rideButton btn btn-1">Find a Ride!</button>
            </form>
        </div>
        </>
    )
}