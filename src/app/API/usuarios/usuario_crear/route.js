// app/API/usuarios/usuario_crear/route.js
import { supabase } from "@/app/lib/supabase"

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Insert into Supabase
    const { data, error } = await supabase
      .from("productos")
      .insert({
        nombre: body.nombre,
        descripcion: body.descripcion,
        precio: body.precio,
        categoria: body.categoria,
      })
      .select()
    
    if (error) {
      console.error("Supabase error:", error);
      return Response.json({ 
        success: false, 
        error: error.message 
      }, { status: 400 })
    }
    
    return Response.json({ 
      success: true, 
      data: data 
    })
    
  } catch(error) {
    console.error("API error:", error);
    return Response.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 })
  }
}
