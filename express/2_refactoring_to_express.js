const url = require("url");
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("Express로 router 리팩토링하기히히");
});

app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

function user(req,res) { // 호이스팅 사용 위해 const () => {} 대신 function 씀
    const user = url.parse(req.url, true).query;
    res.json(`[user] name : ${user.name}, age: ${user.age}`)
}

function feed(req,res) {
    res.json(`<ul>
    <li>picture1</li>
    <li>picture2</li>
    <li>picture3</li>
    </ul>
    `);
}