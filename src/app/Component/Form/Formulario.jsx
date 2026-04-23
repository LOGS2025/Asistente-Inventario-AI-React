"use client"
import { useRef, useEffect, useState } from "react"

export const Formulario = ()=>{
  const inputRef = useRef();
  const [inputView, setInputView] = useState([]);

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

  const send_to_supabase = async (nombre,descripcion,precio,categoria)=>{
    const objectPayload_dante = {
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
  }

  return (
  <>
    <h1>Hola</h1>
    <div>
      <label>Nombre</label>
      <input 
        type="text"
        ref={inputRef}
      />
    </div>

    <button 
      onClick={async ()=>{
        const result = await callOllamaAPI(generarProductoConIA(inputRef.current.value));
        console.log(result);

  // {"nombre": "Dinosaurio", 
  // "descripcion": "Un modelo a escala de un dinosaurio prehist\u00f3rico con detalles precisos y materiales de alta calidad.", 
  // "precio": "2499", 
  // "categoria": "Juguetes y Figuras"}

        if(result){
          const producto_array = [
            result.nombre,
            result.descripcion,
            result.precio,
            result.categoria,
          ];
          setInputView(producto_array);
        }
      }}
      >Obtener Descipcion</button>
      <button
        onClick={
          ()=>{
            console.log(inputView)
          }
        }
      >
        Revisar inputref
      </button>
    
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