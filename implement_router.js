// const http = require("http");
// const url = require("url");

// http
//     .createServer((req,res) => {
//         const path = url.parse(req.url, true).pathname;
//         res.setHeader("Content-Type", "text/html; charset=utf-8"); // utf-8하면 한글 안깨짐

//         if (path === "/user") {
//             res.end("[user] name : andy, age:30"); // user 결과값 설정
//         } else if (path === "/feed") {
//             res.end(`<ul>
//             <li>picture1</li>
//             <li>picture2</li>
//             <li>picture3</li>
//             `); // feed에 대한 결과값 설정
//         } else {
//             res.statusCode = 404;
//             res.end("404 page not found");
//         }
//     })
//     .listen("3000", () => console.log("let's make routers"))

// 아래 라우터와 실행하는 함수 코드 나눠서 개선한 코드

const http = require("http");
const url = require("url");

http
    .createServer((req, res) => {
        const path = url.parse(req.url, true).pathname;
        res.setHeader("Content-Type", "text/html");

        if (path === "/user") {
            user(req, res); // path가 user라면 user 함수 실행
        } else if (path === "/feed") {
            feed(req, res);
        } else {
            notFound(req, res);
        }
    })
    .listen("3000", () => console.log("better code of routers"))

const user = (req, res) => {
        res.end("[user] name : andy, age:30");
};

const feed = (req, res) => {
    res.end(`<ul>
    <li>picture1</li>
    <li>picture2</li>
    <li>picture3</li>
    </ul>
    `);
};

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("404 page not found");
}
