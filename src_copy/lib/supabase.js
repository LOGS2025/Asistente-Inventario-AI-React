import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://cronzswlhkesszludoif.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyb256c3dsaGtlc3N6bHVkb2lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1ODgwMDUsImV4cCI6MjA5MTE2NDAwNX0.eJSM5DLibRYR9LAJUhC0zggq7AMuWh17HujWOp15suE",
)
