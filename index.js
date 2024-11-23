const port = process.env.PORT || 5000;
//=====================
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let User = [];

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.get("/users", (req, res) => {
    res.send(User); // Send the User array
});


app.post('/users', (req, res) => {
    console.log("Post API Hitting");
    const newUser = req.body;
    newUser.id = User.length + 1; // Add ID
    User.push(newUser); // Add to User array
    res.status(201).send({ message: 'User added successfully', user: newUser });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
