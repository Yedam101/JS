const http = require("http"); // require은 import 역할. import http 해준 거임. 불러온 모듈을 http라는 변수에 저장
const server = http.createServer((req,res) => { 
    res.setHeader("Content-Type", "text/html");
    res.end("OK");
});

server.listen("3000", () => console.log("ok 서버 시작"))