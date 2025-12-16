import { categories } from "../data/categories";
import { formatNumber } from "../helpers";
import type { Expense } from "../interfaces";

interface Props {
  expense: Expense;
}

export function ExpenseCard({ expense }: Props) {

  const findCategory = (idCategory: Expense["category"]) => {
    const existCategory = categories.find(cat => cat.id === idCategory);
    if (existCategory) return existCategory.color;
  }

  return (
    <div
      style={{ backgroundColor: findCategory(expense.category) }}
      className="flex justify-between h-[150px] rounded-bl-3xl 
    rounded-tr-3xl p-8">
      <div className="flex gap-5">
        <div className="w-20 rounded-xl flex items-center justify-center glassMorphismo">
          <p className="text-5xl font-bold">{expense.name.charAt(0).toUpperCase()}</p>
        </div>
        <div className="flex flex-col justify-around">
          <h2 className="font-bold text-2xl">{expense.name}</h2>
          <p className="text-lg">{expense.date}</p>
        </div>
      </div>
      <div className="flex flex-col justify-around items-end">
        <h2 className="font-bold text-2xl">{formatNumber(expense.amount)}</h2>
        <p className="text-lg">por mes</p>
      </div>
    </div>
  );
};