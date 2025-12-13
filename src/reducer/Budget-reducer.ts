import type { Budget } from "../interfaces"

export type BudgetAcions =
  { type: 'budget-add', payload: { newBudget: Budget } } |
  { type: 'add-expense', payload: { newBudget: Budget } } |
  { type: 'toogle-modal' }

export type BudgetState = {
  budget: Budget[];
  modal: boolean;
}

export const initialValue: BudgetState = {
  budget: [],
  modal: false
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

  if (action.type === 'toogle-modal') {
    return {
      ...state,
      modal: !state.modal
    }
  }

  return state;

}