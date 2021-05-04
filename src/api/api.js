const API_URL = 'https://api.etherscan.io/api';
const API_PARAMETERS = 'module=account&action=txlist&startblock=0&endblock=99999999&sort=asc';
const API_KEY = 'IT8AGK2V9APVK4MTQS2HEJ6QG9GY7A5SEU';

export const getTransactionsByAddress = (address, onSuccess) => {
    const url = `${API_URL}?${API_PARAMETERS}&apikey=${API_KEY}&address=${address}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const { result } = data;
        const transactions = result.map(({ timeStamp, from, to, value, confirmations, hash }) => ({
            timeStamp,
            from,
            to,
            value,
            confirmations,
            hash         
        }));
        onSuccess(transactions);
    });
};
