import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Service from './Service';

const AllServices = () => {
    const services = useLoaderData();
    return (
        <div>
            <h1>All services</h1>
            <div class="grid grid-cols-1 gap-2 border-4 gap-4 md:grid-cols-3">
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default AllServices;