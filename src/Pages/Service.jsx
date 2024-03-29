import React from "react";
import Card from "./Card";
import Sdata from './Sdata';

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid">
        <div className="row my-5">
          <div className="col-10 mx-auto">
          <div className="row gy-3 ">
              {
                Sdata.map((val,index)=>{
                    return(
                        <Card 
                        imgsrc={val.imgsrc}
                        title={val.title}
                        />
                    )
                })
              }
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
