"use client"
import { useRef } from "react"

export const Formulario = ()=>{
  const inputRef = useRef();

  const handleButton = async ()=>{
    console.log(inputRef.current.value);

    const objectPayload_dante = {
      "nombre" : 'Ejemplito',
      "descripcion" : 'Ejemplito descripcion',
      "precio" : 0.0001,
      "categoria" : 'Ejemplos',
    }

    const response = await fetch('/API/usuarios/usuario_crear', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
      body: JSON.stringify(objectPayload_dante)
    });
    const result = await response.json();
    console.log(result);
  }

  return (
  <>
    <input ref={inputRef} type="text"/>

    <button onClick={handleButton}>Enviar</button>
    {/* <button onClick={handlerUpdate}>Actualizar</button> */}

  </>
  )
}
