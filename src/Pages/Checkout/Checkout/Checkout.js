import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user, setUser] = useState({
        name: 'Masud',
        email: 'masud@gmail.com',
        address: 'shugonda',
        phone: '012002120'
    })

    const handleAddressChange = event => {
        console.log(event.target.value)
        const { address, ...rest } = user;
        const newAddress = event.target.value;
        const newUser = { address: newAddress, ...rest };
        console.log(newUser)
        setUser(newUser)
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please order: {service.name}</h2>
            <form>
                <input className='w-100 mb-2' value={user.name} type="text" name="name" placeholder='Name' required id="" />
                <br />
                <input className='w-100 mb-2' value={user.email} type="email" name="email" placeholder='Email' required id="" />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='Service' required id="" />
                <br />
                <input className='w-100 mb-2' value={user.address} onChange={handleAddressChange} type="text" name="address" placeholder='Address' required id="" />
                <br />
                <input className='w-100 mb-2' value={user.phone} type="text" name="phone" placeholder='Phone' required id="" />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;