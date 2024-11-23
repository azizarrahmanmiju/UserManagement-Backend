const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const User = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },

]

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/users", (req, res) => {
    res.send(User);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});