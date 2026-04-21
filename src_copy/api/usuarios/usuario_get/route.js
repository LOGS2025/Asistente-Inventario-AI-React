import { supabase } from "@/app/lib/supabase";


export async function GET() {
  try {
    const { data, error }= await supabase 
      .from('cuentas')
      .select('*')
    if (data) {
      return Response.json({
        ok: true,
        mensaje: "Conexión exitosa",
        data : data,
      });
    } else {
      return Response.json({
        ok: true,
        mensaje: "Conexión exitosa",
        data : error,
      });
    } 
  }
  catch (error) {
    return Repsonse.json({
      ok: false,
      mensaje : error,
    })
  }
}
