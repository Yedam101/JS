const express = require("express");
const app = express();
let posts = []; // 게시글 리스트로 사용할 posts에 빈 리스트 할당

// req.body를 사용하려면 JSON 미들웨어를 사용해야 함
// 사용하지 않으면 undefined로 반환
// app.use()는 미들웨어를 사용할 때 사용하는 함수로 익스프레스에서 미들웨어는 요청과 응답 사이에 로직을 추가할 수 있는 함수를 제공
// 즉, 요청이 들어오고 나갈 때 전후 처리를 지원하는 역할. 
// ex) HTTP 요청 시마다 로그를 남기는 작업을 하고 싶을 때 API 코드에 로그를 남기는 작업을 넣기보다는 로그를 남기는 미들웨어를 추가 


app.use(express.json()); // JSON 미들웨어 활성화

// POST 요청 시 Content-Type이 application/x-www-form-urlencoded인 경우 파싱
app.use(express.urlencoded({ extended: true})); // JSON 미들웨어와 함께 사용

app.get("/", (req,res) => {
    res.json(posts);
});

app.post("/posts", (req, res) => {
    const { title, name, text } = req.body; // HTTP 요청의 body 데이터를 변수에 할당

// posts에 새로운 게시글 정보 추가
    posts.push({id: posts.length + 1, title, name, text, createdDt: Date()});
    res.json({ title, name, text});
});

app.delete("/posts/:id", (req, res) => {
    const id = req.params.id;
    const filtertedPosts = posts.filter((post) => post.id !== +id); // 삭제 로직
    const isLengthChanged = posts.length !== filtertedPosts.length; // 삭제 확인
    posts = filtertedPosts;
    if (isLengthChanged) {  // posts의 데이터 개수가 변경되었으면 삭제 성공
        res.json("OK");
        return;
    }
    res.json("NOT CHANGED"); 
});

app.listen(3000, () => {
    console.log("posts server start")
})
