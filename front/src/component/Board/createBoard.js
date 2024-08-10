import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateBoardPage(){

    const navigate = useNavigate();

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const onChangeContent = (event) => {
        setContent(event.target.value);
    }

    const onClickSave = () => {
        console.log(`작성자 : ${writer}`);
        console.log(`비밀번호 : ${password}`);
        console.log(`제목 : ${title}`);
        console.log(`내용 : ${content}`);

        const data = {
            "boardData": {
                "author": writer,
                "title": title,
                "content": content
              }
        }

        axios.post('http://localhost:3002/boards', data)
            .then(response => {
                alert("게시물이 등록되었습니다.");
                navigate('/boardlist');
            })
            .catch(error => {
              // ...
            });

    }



    return(
        <div className='frame'>
            <div className='col-space-center'>
                <h1>게시물 등록</h1>

                <div className='row-space w500'>
                    <div className='col-left'>
                        <h3>작성자</h3>
                        <input type='text' className='w200' onChange={onChangeWriter}/>
                    </div>
                    <div className='col-left'>
                        <h3>비밀번호</h3>
                        <input type='password' className='w200' onChange={onChangePassword}/>
                    </div>
                </div>

                <div className='col-left w500'>
                    <h3>제목</h3>
                    <input type='text' className='w95p' onChange={onChangeTitle}/>
                </div>

                <div className='col-left w500'>
                    <h3>내용</h3>
                    <textarea className='w95p h300' onChange={onChangeContent}/>
                </div>

                <div className='col-left w500'>
                    <h3>주소</h3>
                    <div className='col-space w500 h130'>
                        <div className='row-space w230'>
                            <input type="text" className='w80'/>
                            <button type='button' className='addAddress_button'>우편번호 검색</button>
                        </div>
                        <input type='text' className='w95p'/>
                        <input type='text' className='w95p'/>
                    </div>
                </div>

                <div className='col-left w500'>
                    <h3>유튜브</h3>
                    <input type='text' className='w95p'/>
                </div>

                <div className='col-left w500'>
                    <h3>사진 첨부</h3>
                    <div className='row-space w300'>
                        <div className='addImg-button'>+</div>
                        <div className='addImg-button'>+</div>
                        <div className='addImg-button'>+</div>
                    </div>
                </div>

                <div className='col-left w500'>
                    <h3>메인 설정</h3>
                    <div className='row-space w140'>
                        <p>유튜브</p>
                        <input type='radio'/>
                        <p>사진</p>
                        <input type='radio'/>
                    </div>
                </div>

                <button type='button' className='save_button' onClick={onClickSave}>등록하기</button>


            </div>
        </div>
    );

}