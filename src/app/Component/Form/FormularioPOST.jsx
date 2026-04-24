"use client"
import { useRef, useEffect, useState } from "react"
import { ButtonPOST } from "../Botones/Botones";
import { callOllamaAPI } from "@/app/services/services";
import { send_to_supabase } from "@/app/services/services";

export const Formulario = ()=>{
  const inputRef = useRef();
  const [inputView, setInputView] = useState([]);

  return (
  <>
    <h1>Formulario</h1>
    <div className="form_card">
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
    callOllamaAPI={callOllamaAPI}
    send_to_supabase={send_to_supabase}
    />

    {inputView.map((el, i) => {
      let content;
      
      if (i === 0) {
        content = <strong className="item_prop">Nombre : {el}</strong>;
      } else if (i === 3) {
        content = <strong className="item_prop">Descripcion : {el}</strong>;
      } else if (i === 1) {
        content = <strong className="item_prop">Precio : {el}</strong>;
      } else if (i === 2) {
        content = <strong className="item_prop">Categoria : {el}</strong>;
      }
      
      return (
        <div className="input map">
          <li key={i}>
            {content}
          </li>
        </div>
      );
    })}
  </>
  )
}
