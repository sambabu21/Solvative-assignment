import { useState } from "react"

export default function Table({ cities,searchParam }){

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

    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Place Name</th>
                    <th>Country</th>
                </tr>
                </thead>
                {
                    searchParam?<tbody>
                    {currentCities.map((city,i) => (
                        <tr key={city.id}>
                        <td>{i+1}</td>
                        <td>{city.name}</td>
                        <td>{city.country}</td>
                        </tr>
                    ))}
                        </tbody>
                        :<h1>Start searching</h1>
                }
            </table>
            
        </div>
    )
}