import React, { useContext } from "react"
import { BikeContext } from "../bike/bikeprovider"
import "./searchForm.css"

export const SearchForm = () => {
    
    const { setTerms } = useContext(BikeContext)

    return (
        <>
            <div className='whereTo'>Where are you heading today?</div>
            <div className="form-cont">
            <form className='searchForm'>
                <fieldset>
                    <input 
                    name="search"
                    type="text"
                    onKeyUp={(event) => setTerms(event.target.value)}
                    className="cityBox"
                    placeholder="Enter city to search"
                    />
                </fieldset>
            </form>
        </div>
        </>
    )
}