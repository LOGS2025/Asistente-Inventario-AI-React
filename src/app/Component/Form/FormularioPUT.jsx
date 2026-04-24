"use client"
import { useRef, useEffect, useState } from "react"
import { ButtonPUT } from "../Botones/Botones";

export const FormularioPUT = ()=>{
  const inputRef_nombre = useRef();
  const inputRef_descripcion = useRef();
  const inputRef_precio = useRef();
  const inputRef_categoria = useRef();

  let payload = {
    'nombre':'',
    'descripcion':'',
    'precio':'',
    'categoria':'',
  };

  return (
  <>
    <h1>Formulario</h1>
    <div>
      <label>Nombre</label>
      <input
        onChange={(e)=>{
            payload.nombre =  inputRef_nombre.current.value;
          }
        }
        type="text"
        ref={inputRef_nombre}
      />
      <label>Descripcion</label>
      <input
        onChange={(e)=>{
            payload.descripcion =  inputRef_descripcion.current.value;
          }
        }
        type="text"
        ref={inputRef_descripcion}
      />
      <label>Precio</label>
      <input
        onChange={(e)=>{
            payload.precio =  inputRef_precio.current.value;
          }
        }
        type="number"
        ref={inputRef_precio}
      />
      <label>Categoria</label>
      <input
        onChange={(e)=>{
            payload.categoria =  inputRef_categoria.current.value;
          }
        }
        type="text"
        ref={inputRef_categoria}
      />
  </div>

  <ButtonPUT
    payload={payload}
  />

  </>
  )
}
