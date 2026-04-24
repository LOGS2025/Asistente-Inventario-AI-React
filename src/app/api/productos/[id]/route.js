import { supabase } from "@/app/lib/supabase";

export async function GET({ params }) {
  const { id } = await params;

  const { data, error} = await supabase
    .from("productos")
    .select("*")
    .eq("id", id)
    .single()

  return Response.json({ data });
}
