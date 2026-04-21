import { supabase } from "@/app/lib/supabase"

export async function POST(request) {

  const body = await request.json();

  return Response.json({ok:true, data:body})
}
