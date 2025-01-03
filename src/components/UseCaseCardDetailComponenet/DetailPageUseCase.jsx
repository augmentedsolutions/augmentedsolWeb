import React from 'react'
import Logo from '../../common/Logo/Logo';

import ContactLogoleft1 from "../../assets/Home/ContactLogoleft1.png";
import ContactLogoleft2 from "../../assets/Home/ContactLogoleft2.png";
import ContactLogoleft3 from "../../assets/Home/ContactLogoleft3.png";
import Button from '../../common/Button/Button';
import './DetailPageUseCase.css'
const DetailPageUseCase = ({data}) => {
    console.log("Data to show", data);
  return (
<>
    <div
        className="project-description px-2 px-lg-5 py-lg-5"
        style={{ color: "white" }}
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
      <div className="row justify-content-center">
       <div className="col-auto ">

      <div style={{borderBottom:'1px solid white'}} className="p-3 row  justify-content-center  mb-4 footer-logo MarginContentContainer ">
        <div className="col-auto">
          <Logo logo={ContactLogoleft1} />
        </div>
        <div className="col-auto">
          <Logo logo={ContactLogoleft2} />
        </div>
        <div className="col-auto">
          <Logo logo={ContactLogoleft3} />
        </div>
       </div>
      </div>
      </div>
      <div className="row justify-content-center mt-1">
        <div className="col-auto">
            <Button name='View More'/>
        </div>
      </div>
        </>
  )
}

export default DetailPageUseCase