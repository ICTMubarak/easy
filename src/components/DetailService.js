import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const DetailService = () => {
    const detail = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(user);
    
    const [review, setReview] = useState({});
    
    //console.log(review);

    const handleAddReview = event => {

        event.preventDefault();
        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(review)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                window.alert('Your Review insert successfully');
                event.target.reset();
            }
        })


    }

    const handleInputBlur = event => {

        const value = event.target.value;
        const field = event.target.name;
        const newReview = {...review}
        newReview[field] = value;
        console.log(newReview);
        setReview(newReview);
        
    }
    
    return (
        <div>
            <h1 class="text-2xl">Detail service{detail.name}</h1>

            <div className="card">
  <figure><img src={detail.pic} alt={detail.name} /></figure>
  <div className="card-body gap-4">
    <h2 className="card-title">Service Name: {detail.name}</h2>
    <p>Price: {detail.price}</p>
    <p>Description: {detail.detail}</p>
  </div>
</div>



            <br /><br />
            <h1 class="text-lg">Reviwe Section</h1>
            <br /><br />
            <h1>Show all reviews about this service</h1>
            <br />
            <h1>Add a review </h1>
            <br /><br />

            <form onSubmit={handleAddReview}>
                    <input onBlur={handleInputBlur} type="text" name="reviewFild" placeholder='Write your Review' />
                    <br/><br />
                    <button type="submit" className="btn btn-sm">Add Review</button>
                    <br /><br />
            </form>

        </div>
    );
};

export default DetailService;