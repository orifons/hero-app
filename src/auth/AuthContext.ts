import type { ActionTypes, AuthState } from "@/types";
import { createContext } from "react";

export const AuthContext = createContext<
  | {
      authState: AuthState;
      dispatch: React.ActionDispatch<[action: ActionTypes]>;
    }
  | undefined
>(undefined);
