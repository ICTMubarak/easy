import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import banner from '../easyBanner.jpg'
import Service from './Service';




const Home = () => {
    const services = useLoaderData({});
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <img src={banner} alt="Banner" />

            

            <div class="grid grid-cols-1 gap-2 border-4 gap-4 md:grid-cols-3">
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
            </div>

            
            <Link className="btn btn-ghost normal-case text-xl" to='/allservices'>All Services</Link>
        </div>
    );
};

export default Home;