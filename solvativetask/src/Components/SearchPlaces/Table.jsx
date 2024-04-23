import { useState } from "react"
import Pagination from "./Pagination"

export default function Table({ cities,searchParam,setLimit }){
    //error state for user limit entry greater than 10
    const [error,setError] = useState(false)
   
    //state to hold limit value 
    const [limitNumber,setLimitNumber] = useState(5)

   //state to control pagination
   const [currentPage,setCurrentPage]=useState(1)
   const [postsPerPage,setPostsPerPage] = useState(3)

   //determining current page
   const indexOfLastPost = currentPage*postsPerPage
   const indexOfFirstPost = indexOfLastPost - postsPerPage
   const currentCities = cities.slice(indexOfFirstPost,indexOfLastPost)

   //function to change page number
   function paginate(number){
       setCurrentPage(number)
   }

   function handleChange(e){
        const val = e.target.value
        if(val > 10){
            setError(true)
        }else{
            setError(false)
            setLimitNumber(val)
        }
   }

   function applyLimit(e){
    e.preventDefault
    const limit=limitNumber.toString()
    setLimit(limit)
    setCurrentPage(1)
   }
    return(
        <div className="table-container">
            {   cities.length!==0?<table className="table">
                <thead >
                <tr className="header-top">
                    <th className="cell">#</th>
                    <th className="cell">Place Name</th>
                    <th className="cell">Country</th>
                </tr>
                </thead>
                {
                    searchParam?<tbody>
                    {currentCities?.map((city,i) =>  (
                        <tr key={city.id} className="header-bottom">
                        <td className="cell">{i+1}</td>
                        <td className="cell">{city.name}</td>
                        <td className="cell">{city.country}</td>
                        </tr>
                    ))}
                        </tbody>
                        :<h1 className="search-msg">Start searching</h1>
                }
            </table> : <h1>No result found</h1>
            }
            {
            searchParam && 
            <div className="footer">
                <Pagination totalPosts={cities.length} postsPerPage={postsPerPage} paginate={paginate} currentPage={currentPage} />
                <div className="limit">
                    <div className="limit-container">
                    <input 
                        type="number"
                        value={limitNumber}
                        onChange={handleChange}
                        className="search-box"></input>
                    <button onClick={applyLimit} className="limit-btn">Limit Data</button>
                    </div>
                    {error && <p>maximum limit can be set only upto 10</p>}
                </div>
            </div>
            }
        </div>
    )
}