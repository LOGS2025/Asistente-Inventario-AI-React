  // POST A SUPABASE
const send_to_supabase = async (nombre,descripcion,precio,categoria)=>{
  const payload = {
    "nombre" : nombre,
    "descripcion" : descripcion,
    "precio" : precio,
    "categoria" : categoria,
  }
  // CALL SERVICE
};

const callOllamaAPI = async (prompt_input) => {
  const prompt = generarProductoConIA(prompt_input);
  console.log("Calling API...");
  // CALL SERVICE
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

export const ButtonPOST = ({inputRef, inputView, setInputView})=>{
  const updateProduct = async ()=>{
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
