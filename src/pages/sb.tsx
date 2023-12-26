import { createClient } from '@supabase/supabase-js';
const supabaseUrl:string= process.env.SUrl! ||'';
const supabaseKey:string = process.env.SKey! ||'';

export const supabase = createClient(supabaseUrl, supabaseKey);
