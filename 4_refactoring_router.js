const http = require("http");
const url = require("url");

http
    .createServer((req, res) => {
        const path = url.parse(req.url, true).pathname;
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        if (path in urlMap) {
            urlMap[path](req,res);
        } else {
            notFound(req, res);
        }
    })
    .listen("3000", () => console.log("let's refactoring routers"));

const user = (req, res) => { 
    const userInfo = url.parse(req.url, true).query; // 쿼리스트링 데이터를 userInfo에 할당 즉 url의 query 부분을 userInfo라는 매개변수로 받고 응답을 줄 때 userInfo라는.name, userInfo라는.age를 사용
    res.end(`[user] name: ${userInfo.name}, age: ${userInfo.age}`); // 결과값으로 이름과 나이 설정
}

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


const urlMap = {
    "/" : (req, res) => res.end("HOME"),
    "/user" : user,
    "/feed" : feed,
};