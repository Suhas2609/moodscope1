import { createClient } from "@supabase/supabase-js";

if (!process.env.SUrl) {
    throw new Error("Missing env.SupabaseUrl");
}
if (!process.env.SKey) {
    throw new Error("Missing env.SupabaseKey");
}

const supabase = createClient(
    process.env.SUrl!,
    process.env.SKey!,
);
console.log(typeof process.env.SUrl)
export default supabase;