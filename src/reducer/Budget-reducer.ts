import type { Budget } from "../interfaces"

export type BudgetAcions =
  { type: 'budget-add', payload: { newBudget: Budget } }

export type BudgetState = {
  budget: Budget[];
}

export const initialValue: BudgetState = {
  budget: []
}

export const BudgetReducer = (
  state: BudgetState,
  action: BudgetAcions
) => {

  if (action.type === 'budget-add') {
    return {
      ...state,
      budget: [...state.budget, action.payload.newBudget]
    }
  }

  return state;

}