import { AxiosRequestConfig } from "axios";
import { supabaseAnonKey, supabaseProjectUrl } from "../../../config";

export const getPlayers = (): AxiosRequestConfig => ({
  method: "GET",
  url: `${supabaseProjectUrl}/rest/v1/players`,
  params: {
    select: "*",
  },
  headers: {
    apikey: supabaseAnonKey,
  },
});
