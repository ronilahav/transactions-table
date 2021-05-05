import React, { useState } from 'react';
import { Spin } from 'antd';
import TransactionsTable from '../TransactionsTable';
import Form from '../Form';
import './style.scss';


const App = () => {
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleTransactions = (newTransactions) => {
        setTransactions(newTransactions);
        setIsError(false);
        toggleLoading();
    };

    const toggleLoading = () => {
        setIsLoading((isLoading) => !isLoading);
    };

    const handleError = (e) => {
        console.log(e);
        setTransactions([]);
        toggleLoading();
        setIsError(true);
    }

    return (
        <div className='transactions-app'>
            <Form onSubmit={handleTransactions} onFailure={handleError} toggleLoading={toggleLoading}/>
            {isLoading && <Spin />}
            {!isLoading && transactions.length && <TransactionsTable transactions={transactions}/>}
            {isError && <p className='error'>An error was encountered with this address! Please try again.</p>}
        </div>
    );
}

export default App;
