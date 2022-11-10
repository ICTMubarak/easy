import React, { useState } from 'react';

const AddServices = () => {


    const [service, setService] = useState({});
    const handleAddService = event =>{
        event.preventDefault();
        fetch('http://localhost:5000/addservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(service)

        })
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            if(data.acknowledged){
                window.alert('data insert successfully');
                event.target.reset();
            }
        })

    }




    const handleInputBlur = event =>{

        const value = event.target.value;
        const field = event.target.name;
        const newSrvice = {...service}
        newSrvice[field] = value;
        setService(newSrvice);
    }

    return (
        <div>
            <h3>Please add a new Service</h3>
            <br /><br />
            <form onSubmit={handleAddService}>
                    <input onBlur={handleInputBlur} type="text" name="name" placeholder='Service Name' />
                    <br/><br />
                    <input onBlur={handleInputBlur} type="text" name="pic" placeholder='Service picture url' />
                    <br/><br />
                    <input onBlur={handleInputBlur} type="text" name="price" placeholder='price' />
                    <br /><br />
                    <input onBlur={handleInputBlur} type="text" name="detail" placeholder='Service Detail' />
                    <br /><br />
                    <button type="submit" className="btn btn-sm">Add Service</button>
                    <br /><br />
            </form>
        </div>
    );
};

export default AddServices;