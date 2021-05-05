import React, { useState } from 'react';
import { getTransactionsByAddress } from '../../api/api.js';
import './style.scss';


const Form = ({ onSubmit, onFailure, toggleLoading }) => {
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleLoading();
        getTransactionsByAddress(address, onSubmit, onFailure);
        setAddress('');
    };

    return (
        <form onSubmit={handleSubmit} className='transactions-form'>

                <span>Enter Address:</span>
                <input className='address-input' type='text' value={address} onChange={(e) => setAddress(e.target.value)} required />

            <input className='submit-btn' type='submit' value='Submit' />
        </form>
    );
}

export default Form;
