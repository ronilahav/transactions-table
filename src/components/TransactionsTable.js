import React from 'react';
import { Table } from 'antd';


const TransactionsTable = ({ transactions }) => {
    const columns = [
        { title: 'Timestamp', dataIndex: 'timeStamp', key: 'timeStamp', ellipsis: true },
        { title: 'From', dataIndex: 'from', key: 'from', ellipsis: true },
        { title: 'To', dataIndex: 'to', key: 'to', ellipsis: true },
        { title: 'Value', dataIndex: 'value', key: 'value', ellipsis: true },
        { title: 'Confirmations', dataIndex: 'confirmations', key: 'confirmations', ellipsis: true },
        { title: 'Hash', dataIndex: 'hash', key: 'hash', ellipsis: true }
    ];

    return (
        <Table columns={columns}
            dataSource={transactions}
            pagination={false} />
    );
}

export default TransactionsTable;
