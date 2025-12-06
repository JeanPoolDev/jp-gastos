import { useContext } from "react";
import { BudgetContext } from "../context/Budget-context";

export function useBudget() {

  const context = useContext(BudgetContext);

  if (!context) {
    throw new Error('Hubo un problema con el context')
  }

  return context;
}