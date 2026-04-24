import { supabase } from "@/app/lib/supabase";


export async function PUT(request) {
  console.log("Request received:", request);
  
  const body = await request.json();
  console.log("Full body:", body);
  
  // Handle both nested and non-nested formats
  let data = body;
  if (body.payload) {
    data = body.payload;
  }
  
  const { id, ...update } = data;
  console.log("ID:", id);
  console.log("Update data:", update);

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
