import { supabase } from "@/app/lib/supabase";

export async function GET(request, { params }) {
  const { id } = await params;

  const { data, error} = await supabase
    .from("cuentas")
    .select("*")
    .eq("id", id)
    .single()

  return Response.json({ data });
}
