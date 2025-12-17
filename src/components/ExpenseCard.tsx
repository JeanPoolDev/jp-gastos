import { categories } from "../data/categories";
import { formatNumber } from "../helpers";
import { useBudget } from "../hooks/useBudget";
import type { Expense } from "../interfaces";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css';

interface Props {
  expense: Expense;
}

export function ExpenseCard({ expense }: Props) {

  const { dispatch } = useBudget();

  const findCategory = (idCategory: Expense["category"]) => {
    const existCategory = categories.find(cat => cat.id === idCategory);
    if (existCategory) return existCategory.color;
  }

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => dispatch({ type: 'set-id', payload: { id: expense.id } })}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => dispatch({ type: 'delete-expense', payload: { id: expense.id } })}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div
          style={{ backgroundColor: findCategory(expense.category) }}
          className="flex justify-between h-[150px] rounded-bl-3xl w-full
                rounded-tr-3xl p-8 select-none">
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
      </SwipeableListItem>
    </SwipeableList>
  );
};