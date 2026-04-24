"use client"
import { useRef, useEffect, useState } from "react"
import { ButtonPOST } from "../Component/Botones/Botones";

export const DeleteProducto = ()=>{
  const inputRef = useRef();
  const [inputView, setInputView] = useState([]);

  return (
  <>
    <h1>Eliminar producto</h1>
    <div>
      <label>Nombre</label>
      <input 
        type="text"
        ref={inputRef}
      />
    </div>

    <ButtonPOST
    inputRef={inputRef}
    inputView={inputView}
    setInputView={setInputView}
    />

    {inputView.map((el, i) => {
      let content;
      
      if (i === 0) {
        content = <strong>Nombre : {el}</strong>;
      } else if (i === 3) {
        content = <strong>Descripcion : {el}</strong>;
      } else if (i === 1) {
        content = <strong>Precio : {el}</strong>;
      } else if (i === 2) {
        content = <strong>Categoria : {el}</strong>;
      }
      
      return (
        <li key={i}>
          {content}
        </li>
      );
    })}
  </>
  )
}

export default DeleteProducto;