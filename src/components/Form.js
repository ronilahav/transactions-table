import React, { useState } from 'react';
import { getTransactionsByAddress } from '../api/api.js';


const Form = ({ onSubmit }) => {
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        getTransactionsByAddress(address, onSubmit);
        setAddress('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter Address:
                <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} required />
            </label>
            <input className='submit-btn' type='submit' value='Submit' />
        </form>
    );
}

export default Form;
