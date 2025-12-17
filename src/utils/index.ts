import { WrappedResponse } from "@/app/hooks/useWrapped";

export interface UserData extends WrappedResponse {
  date?: string | null;
}
