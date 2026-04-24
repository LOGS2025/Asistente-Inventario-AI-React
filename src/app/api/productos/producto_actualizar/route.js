import { supabase } from "@/app/lib/supabase";


export async function PUT(request) {

  const body = await request.json();
  const {id, ...update} = body;

  if (!id) {
    return Response.json({ok:false,error:"id es necesario"});
  }

  try {
    const { data, error} = await supabase
      .from("productos")
      .update(update)
      .eq("id",id)
      .select()
      .single()

    if(data) {
      return Response.json({ data })
    } else {
      return Response.json({ data })
    }
  } catch(error) {
    console.error(error);
  }
}
