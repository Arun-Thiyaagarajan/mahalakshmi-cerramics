const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const http = require('http')

const app = express();

const empTable = 'authentication';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'music2025',
    database: 'mahalakshmi-cerramics'
});

// Login
app.post('/login', (req, res) => { 
    
    const { username, password } = req.body;
    
    db.query("SELECT * FROM " + users + " WHERE username = ? AND password = ?", [username, password], (err, result) => { 
        if (err) throw err;
        
        else if (result.length > 0) {
            res.send({ success: true });
            console.log("Login Successful");
        }
        else {
            res.send({ success: false, message: "Invalid Credentials!!" });
        }
        res.end();
    });
});


// Listening Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Listening On Port: ${PORT}`) 
});