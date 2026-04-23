"use client"
import { useRef, useEffect, useState } from "react"

  // POST A SUPABASE
const send_to_supabase = async (nombre,descripcion,precio,categoria)=>{
  const payload = {
    "nombre" : nombre,
    "descripcion" : descripcion,
    "precio" : precio,
    "categoria" : categoria,
  }
  const response = await fetch('/API/productos/producto_crear', {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json',
  },
    body: JSON.stringify(payload)
  });
  const result = await response.json();
  console.log(result);
};
  // UPDATE

  // SOFT DELETE
  

export const Formulario = ()=>{
  const inputRef = useRef();
  const [inputView, setInputView] = useState([]);

  return (
  <>
    <h1>Formulario</h1>
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



const ButtonPOST = ({inputRef, inputView, setInputView})=>{
  
  const callOllamaAPI = async (prompt) => {
    console.log("Calling API...");
        // In browser console
    const res = await fetch('/API/IA/prompt_post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    })
    const data = await res.json();
    if(data.success){
      return data.message;
    } else {
      return 'No se pudo completar la request a ollama.'
    }
  };

  const generarProductoConIA = (prompt) => {
    const prompt_for_ollama = `Genera un producto ficticio para una tienda en línea. 
    Devuelve SOLO un objeto JSON con esta estructura exacta:
    {
      "nombre": "nombre del producto",
      "descripcion": "descripción detallada del producto",
      "precio": "precio en números (ejemplo: 19.99)",
      "categoria": "categoría del producto"
    }
    No incluyas texto adicional fuera del JSON. 
    
    El precio en pesos mexicanos.
  
    El nombre del producto es : ${prompt}
    `;
    return prompt_for_ollama;
  }

  const updateProduct = async ()=>{
    const result = await callOllamaAPI(generarProductoConIA(inputRef.current.value));
    const parsed_json_result = JSON.parse(result);
    if(result){
      const producto_array = [
        parsed_json_result.nombre,
        parsed_json_result.descripcion,
        parsed_json_result.precio,
        parsed_json_result.categoria,
      ];
    setInputView(producto_array);
    }
  }

  return (
  <>
  <button 
    onClick={updateProduct}
    >Obtener Descipcion</button>
    <button
      onClick={ async ()=>{
          const res = await send_to_supabase(inputView[0],inputView[1],inputView[2],inputView[3]);
        }
      }
    >
      Enviar a supabase
    </button>
  </>
  )
}