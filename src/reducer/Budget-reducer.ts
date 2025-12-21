import type { Budget, DraftExpense, Expense } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';

export type BudgetAcions =
  { type: 'budget-add', payload: { newBudget: Budget } } |
  { type: 'add-expense', payload: { newExpense: DraftExpense } } |
  { type: 'delete-expense', payload: { id: Expense['id'] } } |
  { type: 'edit-expense', payload: { expense: Expense } } |
  { type: 'set-id', payload: { id: Expense['id'] } } |
  { type: 'set-categoryId', payload: { id: Expense['id'] } } |
  { type: 'reset-app' } |
  { type: 'toogle-modal' }

export type BudgetState = {
  budget: Budget;
  modal: boolean;
  expense: Expense[];
  editingId: Expense["id"];
  categoryId: Expense["category"];
}

const initialExpense = () => {
  const state = localStorage.getItem('expense');
  return state ? JSON.parse(state) : [];
}

const initialBudget = () => {
  const state = localStorage.getItem('budget');
  return state ? JSON.parse(state) : { amount: 0, name: '' }
}

export const initialValue: BudgetState = {
  budget: initialBudget(),
  expense: initialExpense(),
  modal: false,
  editingId: '',
  categoryId: ''
}

const createExpense = (drafExpense: DraftExpense): Expense => {
  return {
    ...drafExpense,
    id: uuidv4()
  }
}

export const BudgetReducer = (
  state: BudgetState,
  action: BudgetAcions
) => {

  if (action.type === 'budget-add') {
    return {
      ...state,
      budget: action.payload.newBudget
    }
  }

  if (action.type === 'add-expense') {

    const expense = createExpense(action.payload.newExpense)

    return {
      ...state,
      expense: [...state.expense, expense],
      modal: false
    }
  }

  if (action.type === 'edit-expense') {

    const { expense: updateExpense } = action.payload;

    return {
      ...state,
      expense: state.expense.map(exp => exp.id === updateExpense.id
        ? updateExpense
        : exp),
      modal: false,
      editingId: ''
    }
  }

  if (action.type === 'delete-expense') {
    return {
      ...state,
      expense: state.expense.filter(exp => exp.id !== action.payload.id),
    }
  }

  if (action.type === 'set-id') {
    return {
      ...state,
      editingId: action.payload.id,
      modal: true
    }
  }

  if (action.type === 'set-categoryId') {
    return {
      ...state,
      categoryId: action.payload.id
    }
  }

  if (action.type === 'toogle-modal') {
    return {
      ...state,
      modal: !state.modal
    }
  }

  if (action.type === 'reset-app') {
    return {
      budget: {
        name: '',
        amount: 0
      },
      expense: [],
      modal: false,
      editingId: '',
      categoryId: ''
    }
  }

  return state;

}