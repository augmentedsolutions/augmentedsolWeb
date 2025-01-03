import React, { useEffect, useState } from "react";
import UseCaseCards from "./UseCaseCards";
import UseCaseIMage1 from "../../assets/UseCase/UseCaseIMage1.png";
import axios from "axios";
import Loading from "../../common/Loading/Loading";

const UseCaseCarousel = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const route = import.meta.env.VITE_API_Route2;
  const request = import.meta.env.VITE_API_Request2;
  console.log("Request", apiUrl, route, request);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const APiCall = async () => {
    try {
      const response = await axios.get(`${apiUrl}${route}${request}`);
      console.log("response", response);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    APiCall();
  }, []);
  useEffect(() => {
    console.log("data", data);
  }, [data]);
  return (
    <>
      <div className="row p-0 m-0" style={{minHeight:'40vh',alignItems:'center'}}>
        {" "}
        {loading ? (
          <Loading/>
        ) : (
          data.map((item) => {
            return (
              <div style={{}} className=" col-sm-5 col-sm-6  col-xl-4 col-xxl-3 ">
                <UseCaseCards item={item} responseData={data} />
              </div>
              
            );
          })
        )}
      </div>
    </>
  );
};

export default UseCaseCarousel;
