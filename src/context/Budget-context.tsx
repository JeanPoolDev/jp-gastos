import { createContext, useReducer, type Dispatch, type ReactNode } from "react";
import { BudgetReducer, initialValue, type BudgetAcions, type BudgetState } from "../reducer/Budget-reducer";

interface PropsContext {
  state: BudgetState,
  dispatch: Dispatch<BudgetAcions>
}

export const BudgetContext = createContext<PropsContext>(null!);

interface PropProvider {
  children: ReactNode;
}

export function BudgetProvider({ children }: PropProvider) {

  const [state, dispatch] = useReducer(BudgetReducer, initialValue);

  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </BudgetContext.Provider>
  )
}