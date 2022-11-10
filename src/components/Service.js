import React from 'react';
import { Link } from 'react-router-dom';

const Service = (service) => {
    return (
        
            

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={service.service.pic} alt={service.service.name} /></figure>
  <div className="card-body gap-4">
    <h2 className="card-title">Service Name: {service.service.name}</h2>
    <p>Price: {service.service.price}</p>
    <p>Description: {service.service.detail}</p>
    <Link to={`/detailservice/${service.service._id}`}>
                <button>Details</button>
                </Link>
    
  </div>
</div>



    );
};

export default Service;