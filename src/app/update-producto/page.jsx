'use client'
import { FormularioPUT } from "../Component/Form/FormularioPUT";
import { useRef, useState } from "react";
import { supabase } from "../lib/supabase";
import { Productos } from "../Component/Productos/Productos";

export const UpdateProducto = () => {
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
    <div className="form_card">
      <h1>Update Productos</h1>
      <input 
        onChange={()=>{
          console.log(inputRef.current.value);
          setId(inputRef.current.value);
        }} 
        ref={inputRef} 
        type="number" 
      />
      <button onClick={getByID}>Revisar</button>
      
      {
        productos && (
          <>
          <Productos
            productos={productos}
          />
          <FormularioPUT/>
          </>
        )
      }
    </div>
  );
};

export default UpdateProducto;