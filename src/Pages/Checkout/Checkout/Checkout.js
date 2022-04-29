import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked')
                    event.target.reset();
                }
            })
    }


    return (
        <div className='w-50 mx-auto'>
            <h2>Please order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' readOnly disabled value={user?.displayName} type="text" name="name" placeholder='Name' required id="" />
                <br />
                <input className='w-100 mb-2' readOnly disabled value={user?.email} type="email" name="email" placeholder='Email' required id="" />
                <br />
                <input className='w-100 mb-2' type="text" readOnly value={service.name} name="service" placeholder='Service' required id="" />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='Address' required id="" />
                <br />
                <input className='w-100 mb-2' value={user.phone} type="text" name="phone" placeholder='Phone' required id="" />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;