import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

 
const Login = () => {

const {signIn} = useContext(AuthContext);

const handleSubmit = event => {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  
  console.log(email, password);

  signIn(email, password)
  .then(result => {
    const user = result.user;
    console.log(user);
    form.reset();
  })
  .catch(error => console.error(error))

}

    return (
        <div className="hero min-h-screen bg-base-200" class="col-span-5 border-2">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Please Login now!</h1>
    </div>
    <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn">Login</button>
        </div>
      </div>
    </form>
  </div>
</div>
    );
};

export default Login;