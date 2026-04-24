 

export const post_handler_sp = async (payload)=>{
    const response = await fetch('/api/productos/producto_crear', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    }).catch(err => {console.log(err)});
    const result = await response.json();
    console.log(result);
}

export const put_handler_sp = async ()=>{
    const response = await fetch('/api/productos/producto_crear', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    }).catch(err => {console.log(err)});
    const result = await response.json();
    console.log(result);
}

// POST A SUPABASE
export const send_to_supabase = async (nombre,descripcion,precio,categoria)=>{
  const payload = {
    "nombre" : nombre,
    "descripcion" : descripcion,
    "precio" : precio,
    "categoria" : categoria,
  }
  post_handler_sp(payload);
};

export const callOllamaAPI = async (prompt_input) => {
    const prompt = `Genera un producto ficticio para una tienda en línea. 
    Devuelve SOLO un objeto JSON con esta estructura exacta:
    {
        "nombre": "nombre del producto",
        "descripcion": "descripción detallada del producto",
        "precio": "precio en números (ejemplo: 19.99)", 
        "categoria": "categoría del producto"
    }
    No incluyas texto adicional fuera del JSON. 
    
    Solo coloca puntos y no comas para el precio.

    El precio en pesos mexicanos.

    El nombre del producto es: ${prompt_input}
    `;
    
    console.log("Calling Ollama API...");
    
    const res = await fetch('/api/ia/prompt_post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
    });
    
    const data = await res.json();
    console.log("API Response:", data);
    
    if (data.success) {
        return data.message; 
    } else {
        throw new Error('No se pudo completar la request a ollama.');
    }
};
