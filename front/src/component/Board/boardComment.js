import axios from "axios";
import { useEffect, useState } from "react";

export default function BoardComment({boardId}){

    const [author, setAuthor] = useState("");
    const [password, setPassword] = useState("");
    const [content, setContent] = useState("");

    const [comment, setComment] = useState([]);

    useEffect(() => {
        if (comment.commentData) {
            axios.post('http://localhost:3002/comments', comment)
            .then(response => {
                alert("댓글이 등록되었습니다.");
                setAuthor("");
                setPassword("");
                setContent("");
            })
            .catch(error => {
              // ...
            });
        }
    }, [comment]);

    const onClickSave = () => {

        if (author.trim() === "") {
            alert("작성자를 입력해주세요.");
            return;
          }

        setComment({
            "commentData": {
                "author": author,
                "password": password,
                "content": content,
                "boardId": boardId,
            }
        })
    }



    return(
        <div className="boardComment_box">
            <div className="row-space w500">
                <div>작성자</div>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                <div>비밀번호</div>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button>삭제</button>
            </div>
            <textarea className="boardComment_text" value={content} onChange={(e) => setContent(e.target.value)}/>
            <button type="button" onClick={onClickSave}>등록</button>
        </div>
    )
}