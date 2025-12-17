
export type Budget = {
  amount: number;
  name: string;
}

export type DraftExpense = {
  name: string;
  amount: number;
  category: string;
  date: string;
}

export type Expense = DraftExpense & {
  id: string;
}