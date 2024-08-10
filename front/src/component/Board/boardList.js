import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function BoardListPage(){
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(()   => {
       const fetchData = async () => {
         try {
           const response = await axios.get('http://localhost:3002/boards');   
   
           setData(response.data);
         } catch (error) {
           console.error('Error fetching data:', error);
         }
       };
   
       fetchData();
     }, []);

    console.log(data)

    const onClickPageDetail = (id) => {
        navigate("/boarddetail/" + id);
        dispatch({ type: 'SET_BOARD_ID', id:id });
    }




    return(
        <table className="boardDetail_table">
              <colgroup>
                <col style={{ width: '30%' }} />
                <col style={{ width: '70%' }} />
            </colgroup>
            <tr>
                <th>작성자</th>
                <th>제목</th>
            </tr>
            {
            data.map(data => (   
                <tr key={data.id} onClick={() => onClickPageDetail(data.id)}>
                    <td>{data.author}</td>
                    <td>{data.title}</td>
                </tr>                              
            ))
        }
        </table>
    );
}