import React, { useEffect, useState } from "react";
import "../../index.css";
import axios from "axios";
import Loading from "../../common/Loading/Loading";
const CategoriesCardDetailPage = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseURL = import.meta.env.VITE_API_URL;
  const route = import.meta.env.VITE_API_Route3;
  const request = import.meta.env.VITE_API_Request2;

  const handleApi = async () => {
    console.log('all Data ',props.data)
    try {
      const response = await axios.get(`${baseURL}${route}${request}`);
      setData(response);
      console.log("Categories Data while Request", response);
      setLoading(false);
    } catch (error) {
      console.log("Categories Error while Request", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    handleApi();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          class=" card  mb-4 p-2"
          className="background_gradient_one  border_radius_one"
          style={{ border: "3.24px solid rgb(47, 20, 63)" }}
        >
          {/* <img src={item.image} class="card-img-top" alt="..." /> */}
          <div class="card-body p-4">
            <h3
              style={{ height: "80px", overflow: "hidden" }}
              class="text-start card-title text-white"
            >
              Categories
            </h3>
            {data.data.map((e) => {
              return (
                <p
                  style={{ height: "60px", overflow: "hidden" }}
                  class="card-text lead row p-0 m-0"
                >
                  <div className="p-0 m-0 text-start col-10">{e.name}</div>
                  <div className="col-2 p-0 m-0">{e.__v}</div>
                </p>
              );
            })}
            <h3
              style={{ height: "80px", overflow: "hidden" }}
              class="card-title text-start text-white"
            >
              Recent Posts
            </h3>
            {props.data.map((item)=>{
                return(

             <p
                  style={{ height: "60px", overflow: "hidden" }}
                  class="card-text lead row"
                >
                  <div className="col-3 "> <img src={item.image} height='80px' width='100%' style={{objectFit:'cover'}}/></div>
                  <div className="text-start fs-6 col-9">{item.title}</div>
                </p> 
                )
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoriesCardDetailPage;
