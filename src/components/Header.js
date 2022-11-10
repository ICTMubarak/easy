import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    
    const handleLogout = () => {
        logOut()
        .then(()=>{ })
        .catch(error => console.log(error));
    }


    return (
        <div>
             <div className="navbar bg-neutral text-neutral-content">
                     <a className="btn btn-ghost normal-case text-xl">EasyServices.com</a>
                     <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                     <Link className="btn btn-ghost normal-case text-xl" to='/addservices'>Add Services</Link>
                     <Link className="btn btn-ghost normal-case text-xl" to='/myreviews'>My Reviews</Link>
                     <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
                     <Link className="btn btn-ghost normal-case text-xl" to='/register'>Sign Up</Link>
                     <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
                     <button onClick={handleLogout} className="btn">Log Out</button>
                     {user?.email && <span>{user.email}</span>}
      </div>
        </div>
    );
};

export default Header;