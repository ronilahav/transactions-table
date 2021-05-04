import React from 'react';
import Table from './Table.js';
import Form from './Form.js';
import { getTransactionsByAddress } from '../api/api.js';

const App = () => {
    const handleTransactions = (transactions) => {
        console.log(transactions);
    };

    const address = '0xdf8572bB1E430565A150C1044B49b34a8f58a098';

    getTransactionsByAddress(address, handleTransactions);

    return (
        <div>
            <h1>test</h1>
            <Form />
            <Table />
        </div>
    );
}

export default App;
