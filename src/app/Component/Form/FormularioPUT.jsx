"use client"
import { useRef } from "react"
import { ButtonPUT } from "../Botones/Botones";

export const FormularioPUT = ({
  getValues
})=>{
  const inputRef_nombre = useRef();
  const inputRef_descripcion = useRef();
  const inputRef_precio = useRef();
  const inputRef_categoria = useRef();

  let payload = {
    'id':getValues.id,
    'nombre':getValues.nombre,
    'descripcion':getValues.descripcion,
    'precio':getValues.precio,
    'categoria':getValues.categoria,
  };

  return (
  <div className="form_card">
    <h1>Formulario</h1>
    <div className="form_put">
      <label>Nombre</label>
      <input
        defaultValue={getValues.nombre}
        onChange={()=>{
            payload.nombre =  inputRef_nombre.current.value;
          }
        }
        type="text"
        ref={inputRef_nombre}
      />
      <label>Descripcion</label>
      <input
        defaultValue={getValues.descripcion}
        onChange={()=>{
            payload.descripcion =  inputRef_descripcion.current.value;
          }
        }
        type="text"
        ref={inputRef_descripcion}
      />
      <label>Precio</label>
      <input
        defaultValue={getValues.precio}
        onChange={()=>{
            payload.precio =  inputRef_precio.current.value;
          }
        }
        type="number"
        ref={inputRef_precio}
      />
      <label>Categoria</label>
      <input
        defaultValue={getValues.categoria}
        onChange={()=>{
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

  </div>
  )
}
