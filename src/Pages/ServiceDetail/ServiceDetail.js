import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Services from '../../services.json';

const ServiceDetail = () => {
    const { serviceId, } = useParams();
    const service = Services.find(service => service.id === parseInt(serviceId));
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <img src={img} alt="" className='img-fluid' />
                    </div>
                    <div className='col-lg-7 bg-warning'>
                        <h2>{name}</h2>
                        <p className='price'><strong>price: {price}</strong></p>
                        <p>{description} </p>


                        <br />
                        <button className='btn btn-primary btn-sm' onClick={() => navigate(-1)}>BACK</button> &nbsp;
                        <button className='btn btn-primary btn-sm' onClick={() => navigate('/')}>Navigate to Home</button> &nbsp;
                        <Link to='/' className='btn btn-primary btn-sm'>Home</Link>
                        <br />
                        <Link to='/checkout' className='btn btn-danger mt-5 btn-sm'>Proceed Check-Out</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;