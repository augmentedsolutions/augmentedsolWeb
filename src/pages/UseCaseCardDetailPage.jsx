import React from 'react'
import HeroSectionService from '../components/ServiceComponents/HeroSectionService'
import { useLocation } from 'react-router-dom'
import DetailPagePortfolio from '../components/PortfolioCardDetailsComponent/DetailPagePortfolio'
import DetailPageUseCase from '../components/UseCaseCardDetailComponenet/DetailPageUseCase'
import CategoriesCardDetailPage from '../components/UseCaseCardDetailComponenet/CategoriesCardDetailPage'

const UseCaseCardDetail = () => {
    const location=useLocation()
    // console.log( "data from Home Page",JSON.stringify(location.state.item.image))
    console.log("Data from previous ",location)
    const recieveData =location.state;
    console.log("image",recieveData.item)
    console.log("See Data from Previous", recieveData.responseData)
  return (
    <div className="row " style={{overflow:'hidden',position:'relative'}}>
    <div className="col-12 ">
      <div className="row Container MarginContainer">
        <div className="col-12 p-0 ">
          <HeroSectionService
            img={recieveData.item.image}
            text1={recieveData.item.title}
            // text2="Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut."
          />
        </div>
      </div>
      <div className="row Container MarginContainer  my-3 my-lg-5 " style={{ minHeight:'60vh' }}>
        <div className="col-lg-8 p-0 order-2 order-lg-1 ">
          <DetailPageUseCase data={recieveData.item}/>
        </div>
        
        <div className="col-lg-4 order-1 order-lg-2 p-0 " >
          <CategoriesCardDetailPage  data={recieveData.responseData}/>
        </div>
      </div>
    </div>
    <div
          className="gradient_radial"
          style={{
            height: "950px",
            width: "950px",
            position: "absolute",
            top: "250px",
            left: "-600px",
            zIndex:'-1'
            // backgroundColor:"red"
          }}
          ></div>

<div
          className="gradient_radial"
          style={{
            height: "950px",
            width: "950px",
            position: "absolute",
            top: "400px",
            right: "-600px",
            zIndex:'-1'
            // backgroundColor:"red"
          }}
          ></div> 
  </div>
  )
}

export default UseCaseCardDetail