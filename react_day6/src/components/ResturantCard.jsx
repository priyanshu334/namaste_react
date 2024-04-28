import { CDN_URL } from "../utils/constans";

const ResturantCard =(props)=>{
    const {resData} = props;
    // const {}
    // {console.log(resData["name"])}
  const {cloudinaryImageId,name,costForTwo,cuisines,avgRating}= resData?.data;
    return(
        <div className="res-card">

            <img className="res-logo" alt="ref-logo" src={CDN_URL+cloudinaryImageId}/>
            ,<h3>{name}</h3>
            <h4>{costForTwo/100}</h4>
            <h4>{cuisines.join(' ,')}</h4>
            <h4>{avgRating}</h4>


        </div>
    )
}


export default ResturantCard