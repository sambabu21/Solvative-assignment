import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import Table from "./Table";
import axios from 'axios';

export default function SearchPlaces(){

    const [cities,setCities] = useState([])
    const [searchParam,setSearchParam] =useState("")
   
    const fetchCities = async () => {
            try {
              const response = await axios.get('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', {
                method: 'GET',
                params: {  namePrefix: searchParam, limit: '5' },
                headers: {
                    'X-RapidAPI-Key': 'b4690e0749msh3aca86d736166edp112867jsnb31ed74fb03a',
                    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'                
                }
              });
        
              setCities(response.data.data);
            } catch (error) {
              console.error(error);
            }
    };
    
    useEffect(()=>{
        fetchCities()
    },[searchParam])

    console.log(cities)

    return(
        <div>
            <div className="banner">
                <h1>Search Places</h1>
            </div>
            <SearchForm setSearchParam={setSearchParam}/>
            <Table cities={cities} searchParam={searchParam}/>
        </div>
    )
}