const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 3000;

// Mock data
const users = [
    { id: 1, name: 'Alice Johnson', age: 25, sex: 'Female', address: '123 Main St' },
    { id: 2, name: 'David Beckham', age: 30, sex: 'Male', address: '456 Maple Ave' },
    { id: 3, name: 'Bob Marley', age: 34, sex: 'Male', address: '202 Hollywood Boulevard' },
    { id: 4, name: 'John Smith', age: 62, sex: 'Male', address: '6 Grove Street' },
    { id: 5, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 6, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 7, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 8, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 9, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 10, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 11, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 12, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 1, name: 'Alice Johnson', age: 25, sex: 'Female', address: '123 Main St' },
    { id: 2, name: 'David Beckham', age: 30, sex: 'Male', address: '456 Maple Ave' },
    { id: 3, name: 'Bob Marley', age: 34, sex: 'Male', address: '202 Hollywood Boulevard' },
    { id: 4, name: 'John Smith', age: 62, sex: 'Male', address: '6 Grove Street' },
    { id: 5, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 6, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 7, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 8, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 9, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 10, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 11, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 12, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 1, name: 'Alice Johnson', age: 25, sex: 'Female', address: '123 Main St' },
    { id: 2, name: 'David Beckham', age: 30, sex: 'Male', address: '456 Maple Ave' },
    { id: 3, name: 'Bob Marley', age: 34, sex: 'Male', address: '202 Hollywood Boulevard' },
    { id: 4, name: 'John Smith', age: 62, sex: 'Male', address: '6 Grove Street' },
    { id: 5, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 6, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 7, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 8, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 9, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 10, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 11, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
    { id: 12, name: 'Willy Wonka', age: 150, sex: 'Dolphin', address: 'Pacific ocean' },
];

app.use(express.json());
app.use(cors());

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.get('/api/getData', (req, res) => {
    const { search, startYear, endYear, sex, minAge, maxAge } = req.query;
    const currentYear = new Date().getFullYear();
    let filteredUsers = users;

    if (search) {
        const searchLower = search.toLowerCase();
        filteredUsers = filteredUsers.filter(user =>
            user.name.toLowerCase().includes(searchLower)
        );
    }

    if (startYear && endYear) {
        filteredUsers = filteredUsers.filter(user => {
            const birthYear = currentYear - user.age;
            return birthYear >= parseInt(startYear, 10) && birthYear <= parseInt(endYear, 10);
        });
    }
    if (minAge && maxAge) {
        filteredUsers = filteredUsers.filter(user => {
            return user.age >= parseInt(minAge, 10) && user.age <= parseInt(maxAge, 10);
        });
    }
    if (sex) {
        filteredUsers = filteredUsers.filter(user => {
            if (sex === 'Other') {
                return user.sex !== 'Male' && user.sex !== 'Female';
            }
            return user.sex === sex;
        });
    }

    res.json(filteredUsers);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});