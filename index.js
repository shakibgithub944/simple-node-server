const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Node practice server is running');
})

const users = [
    { id: 1, name: 'shahruk', email: 'shahrukh@gmial.com' },
    { id: 2, name: 'salman', email: 'salman@gmial.com' },
    { id: 3, name: 'tiger', email: 'tiger@gmial.com' },
];

app.get('/users', (req, res) => {
    res.send(users);
})
app.post('/users', (req, res) => {
    const user = req.body
    user.id = users.length + 1
    users.push(user)
    res.send(user)
})


app.listen(port, () => {
    console.log('server runing from port', port);
})