import { supabase } from "@/app/lib/supabase";


export async function POST(request) {

  const body = await request.json();

  console.log(body);

  const objectPayload_dante = {
    first_name : body.first_name,
    last_name_f : body.last_name_f,
    last_name_m : body.last_name_m,
    birth_date : body.birth_date,
    email : body.email, 
    password_hash : body.password_hash,
    phone : body.phone,
  }
  try {
    const { data, error} = await supabase
      .from("cuentas")
      .insert(objectPayload_dante)
      .select('*')
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
