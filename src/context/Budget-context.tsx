import { createContext, useReducer, type Dispatch, type ReactNode } from "react";
import { BudgetReducer, initialValue, type BudgetAcions, type BudgetState } from "../reducer/Budget-reducer";

interface PropsContext {
  state: BudgetState,
  dispatch: Dispatch<BudgetAcions>,
  montoTotalGastado: number
}

export const BudgetContext = createContext<PropsContext>(null!);

interface PropProvider {
  children: ReactNode;
}

export function BudgetProvider({ children }: PropProvider) {

  const [state, dispatch] = useReducer(BudgetReducer, initialValue);

  const total = state.expense.reduce((acc, curret) => acc + curret.amount, 0);
  const montoTotalGastado = state.budget.amount - total

  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
        montoTotalGastado
      }}
    >
      {children}
    </BudgetContext.Provider>
  )
}