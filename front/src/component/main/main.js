import { useSelector } from 'react-redux';
import CreateBoardPage from '../Board/createBoard';
import BoardListPage from '../Board/boardList';
import { Route, Routes } from 'react-router-dom';
import BoardDetailPage from '../Board/boardDetail';


export default function Main(){

    const text = useSelector((state) => state.text); // Redux store에서 text 값 가져오기
    const boardId = useSelector((state) => state.boardId);
    console.log(boardId);
    



    return(
        <div className='main-box'>
            <h1>{text}</h1>
            <Routes>
                <Route path='/boardlist' element={<BoardListPage/>}/>
                <Route path='/createboard' element={<CreateBoardPage/>}/>
                <Route path={`/boarddetail/${boardId}`} element={<BoardDetailPage id={boardId}/>}/>
            </Routes>
        </div>
    )
}





