export const post_handler_ollama = async ()=>{
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
} 

export const post_handler_sp = async ()=>{
    const response = await fetch('/API/productos/producto_crear', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    }).catch(err => {console.log(err)});
    const result = await response.json();
    console.log(result);
}