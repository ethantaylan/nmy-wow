import { createClient } from "@supabase/supabase-js";
import { supabaseAnonKey, supabaseProjectUrl } from "../config";

export const supabase = createClient(supabaseProjectUrl, supabaseAnonKey);
