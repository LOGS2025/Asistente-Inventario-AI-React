import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://lbjmufktznzdwvkzriks.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxiam11Zmt0em56ZHd2a3pyaWtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3MjkzNDEsImV4cCI6MjA5MjMwNTM0MX0.78EFS_FPgY_q3mucbfiOY5ibulv567MT9DuZdCXQ5GU",
)

