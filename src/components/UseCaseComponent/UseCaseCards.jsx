import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";

const UseCaseCards = ({ item ,responseData}) => {
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate('/useCaseDetails',{state:{item,responseData}})
    }
  return (
    <div class="card text-center mb-4 " style={{border:'1px solid white', borderRadius:'2px'}} >
      <img src={item.image} height='380px' width='100%'  alt="..."  style={{borderRadius:'2px',objectFit:'cover'}}/>
      <div class="card-body " style={{backgroundColor:'white',borderRadius:'2px'}} >
        <h2 style={{height:"80px",overflow:'hidden'}} class="card-title text-black text-start">{item.title}</h2>
        <p  style={{height:"60px",overflow:'hidden'}} class="card-text lead text-black text-start">{item.excerpt}</p>
        <div
          className="mt-4 text_seventh "
          onClick={handleClick}
          style={{
            height: '53px',
            background: 'linear-gradient(99.05deg, #A700F5 0.07%, #DF308D 106.32%)',
            width: "100%",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          View Details
        </div>
      </div>
    </div>

  );
};

export default UseCaseCards;
