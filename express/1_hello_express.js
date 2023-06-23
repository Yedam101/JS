const express = require("express"); // express 모듈 import
const app = express(); //. express를 초기화한 후 app에 할당
const port = 3000;

app.get("/", (req, res) => {
    res.set({ "Content-Type": "text/html; charset=utf-8" });
    res.end("Hello 익스프레스999");
});

app.listen(port, () => {
    console.log(`START SERVER : using ${port}`);
});

