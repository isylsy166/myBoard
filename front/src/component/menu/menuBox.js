
import { useState } from "react";
import MenuTitle from "./menu-title";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MenuBox(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedMenu, setSelectedMenu] = useState('');
    

    const handleMenuClick = (id, text, nav) => {
      setSelectedMenu(text); // 클릭한 메뉴 텍스트 저장
      dispatch({ type: 'SET_TEXT', id: id, text: text }); // 클릭한 메뉴 텍스트를 payload로 action 전달
      navigate(nav);
    };

    const menu = [
        {
            id:"menu1",
            title: "게시판 목록",
            nav: "/boardlist"
        },
        {
            id:"menu2",
            title: "게시물 등록",
            nav: "/createboard"
        }
    ]

    return(
            <div className='menu-box'>
                <div className="menu-logo"></div>

                <div className="menu-title-box">
                    {
                        menu.map(menu => (
                            <MenuTitle key={menu.id} text={menu.title} onClick={() => handleMenuClick(menu.id,menu.title,menu.nav)} selected={selectedMenu === menu.title} />
                        ))
                    }
                </div>
            </div>
    )
}