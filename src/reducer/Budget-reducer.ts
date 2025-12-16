import type { Budget, Expense } from "../interfaces"

export type BudgetAcions =
  { type: 'budget-add', payload: { newBudget: Budget } } |
  { type: 'add-expense', payload: { newExpense: Expense } } |
  { type: 'toogle-modal' }

export type BudgetState = {
  budget: Budget[];
  modal: boolean;
  expense: Expense[];
}

export const initialValue: BudgetState = {
  budget: [],
  expense: [],
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

  if (action.type === 'add-expense') {
    return {
      ...state,
      expense: [...state.expense, action.payload.newExpense],
      modal: false
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