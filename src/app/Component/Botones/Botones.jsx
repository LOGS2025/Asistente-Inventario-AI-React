export const ButtonPOST = (
  { inputRef, 
    inputView, 
    setInputView, 
    callOllamaAPI, 
    send_to_supabase}
)=>{
  const updateProduct = async ()=>{
    try {
      const result = await callOllamaAPI(inputRef.current.value);
      
      const parsed_json_result = JSON.parse(result);
      if(result){
        const producto_array = [
          parsed_json_result.nombre,
          parsed_json_result.descripcion,
          parsed_json_result.precio,
          parsed_json_result.categoria,
        ];
      setInputView(producto_array);
      console.log("Finished calling api");
    }
  } catch(error) {
    console.error("Error in updateProduct:", error);
  }}
  return (
  <div className="http_button">
    <button 
      onClick={updateProduct}
      >Obtener Descripcion</button>
    <button
      onClick={ async ()=>{
        const res = await send_to_supabase(inputView[0],inputView[1],inputView[2],inputView[3]);
      }}
      >Enviar a supabase</button>
  </div>
)
}

export const ButtonPUT = (payload)=>{
  const nombre = payload.nombre;
  const descripcion = payload.descripcion;
  const precio = payload.precio;
  const categoria = payload.categoria;

  return (
  <>
    <button
      onClick={ async ()=>{
          const res = await send_to_supabase(nombre,descripcion,precio,categoria);
        }
      }
    >
      Enviar a supabase
    </button>
  </>
  )
}

export const ButtonDELETE = (payload)=>{
  const nombre = payload.nombre;
  const descripcion = payload.descripcion;
  const precio = payload.precio;
  const categoria = payload.categoria;

  return (
  <>
    <button
      onClick={ async ()=>{
          const res = await send_to_supabase(nombre,descripcion,precio,categoria);
        }
      }
    >
      Eliminar
    </button>
  </>
  )
}
