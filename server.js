import fetch from "node-fetch";

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3030;

app.use(cors())
app.use(express.json())
app.use(express.static(__dirname));

// app.post('/', async (req, res) => {
//     console.log("fsdsads")
//     console.log(req.body.email)
//     return res.json({status: 'OK!'});
// })



app.post('/api', async (req, res) => {
    console.log("fsdsads")
    console.log(req.body)
    console.log(JSON.stringify(req.body));
    // var result = {}
    const url = 'https://expensedaily.azurewebsites.net/api/post/' + req.body.url
    console.log(url);
    let result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
        'Content-Type': 'application/json',
        }
    })
    console.log(result)
    let data = await result.json()
    console.log(data)

    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     // return res.json(data);
    // })
    // .catch(error => console.error(error));
    return res.json({status: data});
})


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/Login.html");
  });
app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
  });
app.get("/profile", (req, res) => {
    res.sendFile(__dirname + "/profile.html");
  });
app.get("/hisaab", (req, res) => {
    res.sendFile(__dirname + "/hisab.html");
  });
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about_us.html");
  });


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
