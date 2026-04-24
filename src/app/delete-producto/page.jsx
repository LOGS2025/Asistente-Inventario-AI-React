'use client'
import { Productos } from "../Component/Productos/Productos";
import { useState, useRef } from "react";
import { supabase } from "../lib/supabase";

export const DeleteProducto = ()=>{
  const [id, setId] = useState();
  const [productos, setProductos] = useState();
  const inputRef = useRef();

  async function getByID () {
    const { data: todos } = await supabase.from('productos').select('*').eq('id',id);
    // const response = await fetch(`/api/productos/${inputRef}`);
    console.log(todos);
    setProductos(todos);
  }
  
  return (
      <>
        <h1>Delete Productos</h1>
        <input 
          onChange={()=>{
            console.log(inputRef.current.value);
            setId(inputRef.current.value);
          }} 
          ref={inputRef} 
          type="number" 
        />
        <button onClick={getByID}>Revisar</button>
        <button onClick={()=>{console.log("Eliminar")}}>Eliminar</button>
        
        {
          productos && (
            <>
            <Productos
              productos={productos}
            />
            </>
          )
        }
      </>
    );
  };

export default DeleteProducto;