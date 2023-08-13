import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
        <section id='header' className='d-flex align-content-center'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row my-5 ">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h1 >{props.h1} <strong className='brand-name'>{props.Strong}</strong></h1>
                                <h2 className='my-3'>{props.h2}</h2>
                                <div className='mt-3'>
                                    <NavLink className='btn-get-started btn' to={props.visit}>
                                        {props.btn}
                                    </NavLink>
                                </div>

                            </div>
                            <div className="col-md-6 order-1 order-lg-2 header-img">
                                <img className='animated img-fluid'  src={props.img} alt="Home Img" />

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Common