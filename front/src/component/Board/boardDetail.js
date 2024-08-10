import axios from "axios";
import { useEffect, useState } from "react";
import BoardComment from "./boardComment";

export default function BoardDetailPage({id}){

    const [board, setBoard] = useState([]);
    const [comment, setComment] = useState([]);


    useEffect(()   => {
       const fetchData = async () => {
         try {
           const response = await axios.get(`http://localhost:3002/boards/${id}`);
            setBoard(response.data.boards); //게시물 정보 받아오기
            setComment(response.data.comments); //댓글 정보 받아오기
         } catch (error) {
           console.error('Error fetching data:', error);
         }
       };
   
       fetchData();
     }, [id, comment]);

     console.log(comment)

    return(
        <div className="boardDetail_Box">
            <h2>{board.title}</h2>
            <div className="boardTitle">작성자 : {board.author}</div>
            <pre className="boardContent">{board.content}</pre>

            <BoardComment boardId={id}/>

            {
              comment.map( comment => (
                <div className="boardCommentList_box">
                  <div className="row-space w100p">
                    <div className="commentAuthor">{comment.author}</div>
                    <div className="row-space w100">
                      <button>수정</button>
                      <button type="button">삭제</button>
                    </div>
                  </div>
                  <textarea className="boardComment_text" readOnly="true" value={comment.content}/>                 
                </div>
              ))
            }     
        </div>
    )
}