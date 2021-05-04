import React, { useState } from 'react';
import TransactionsTable from './TransactionsTable.js';
import Form from './Form.js';


const App = () => {
    const [transactions, setTransactions] = useState([]);

    const handleTransactions = (newTransactions) => {
        setTransactions(newTransactions);
    };

    return (
        <div>
            <Form onSubmit={handleTransactions}/>
            {transactions.length > 0 && <TransactionsTable transactions={transactions}/>}
        </div>
    );
}

export default App;
