import ResturantCard from "./ResturantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body =()=>{
    [ResList, setResList] = useState([]);
      //use effect takes two argumets a callback function and an array use effect is renderd or called after the ui or componet is rendered
    useEffect(()=>{
      fetchdata()

    },[])

    const fetchdata = async()=>{

      try{
        const data= await fetch(  'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING');

      }catch{
        console.log("error")
      }

    const jsonData = await data.json();

    setResList(jsonData?.data?.cards[2]?.data?.data?.cards)
    }

    // if(ResList.length===0){
    //   return(
    //     <Shimmer/>
    //   )
    // }
    return ResList.length===0?<Shimmer/> :(
        <div className="body">
            <div className="filter">
              <button className="filter-btn" onClick={()=>{
                const filteredList = ResList.filter((res)=>res.data.avgRating>4)
                setResList(filteredList)
              }}>
                Top Rated Resturant
              </button>
            </div>
            <div className="res-con">
              {
                ResList.map(restaurant=><ResturantCard key={restaurant.data.id} resData={restaurant}/>)
              }
            </div>
        </div>
    )
  
}

export default Body;