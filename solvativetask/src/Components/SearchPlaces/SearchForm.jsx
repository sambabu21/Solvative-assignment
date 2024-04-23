import { useState } from "react"

export default function SearchForm({ setSearchParam }){
    const [userInput,setUserInput] = useState("")

    const handleChange = (e) =>{
        setUserInput(e.target.value)
    }
    
    const handleSubmit = (e) =>{
        e.preventdefault
        setSearchParam(userInput)
    }
    return(
        <div>
            <h2> Search for a place of your choice and hit search.</h2>
            <input
                type="text"
                placeholder="Search places..."
                className="search-box"
                name="city"
                value={userInput}
                onChange={handleChange}
            ></input>
            <button onClick={handleSubmit}>Search</button>
   
        </div>
    )
}