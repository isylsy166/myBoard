import { useRef } from "react";
import CanvasDraw from 'react-canvas-draw';

export default function ConvasPage(){

    const canvasRef = useRef(null);

    return(
        <>
            <CanvasDraw ref={canvasRef} />
            <button onClick={() => canvasRef.current.undo()}>되돌리기</button>
            <button onClick={() => canvasRef.current.eraseAll()}>모두 지우기</button>
            <button onClick={() => canvasRef.current.getDataURL()}>PNG 이미지로 저장</button>
        </>
    );
}