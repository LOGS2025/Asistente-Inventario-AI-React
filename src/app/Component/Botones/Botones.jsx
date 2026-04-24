import { delete_handler_sp, post_handler_sp, put_handler_sp } from "@/app/services/services";

export const ButtonPOST = (
  { inputRef, 
    inputView, 
    setInputView, 
    callOllamaAPI, 
    post_handler_sp}
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
        const res = await post_handler_sp(inputView[0],inputView[1],inputView[2],inputView[3]);
      }}
      >Enviar a supabase</button>
  </div>
)
}

export const ButtonPUT = (payload)=>{
  return (
  <>
    <button
      onClick={ async ()=>{
          const res = await put_handler_sp(payload);
        }
      }
    >
      Enviar a supabase
    </button>
  </>
  )
}

export const ButtonDELETE = (payload)=>{
  return (
  <>
    <button
      onClick={ async ()=>{
          const res = await delete_handler_sp(payload);
        }
      }
    >
      Eliminar
    </button>
  </>
  )
}
