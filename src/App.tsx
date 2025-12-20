import { useEffect } from "react";
import { BudgetForm } from "./components/BudgetForm"
import { BudgetMain } from "./components/BudgetMain";
import { useBudget } from "./hooks/useBudget"

function App() {

  const { state } = useBudget();

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(state.budget));
    localStorage.setItem('expense', JSON.stringify(state.expense));
  }, [state.expense, state.budget])


  const ifExistBudget = state.budget.amount > 0;

  return (
    <>
      {
        ifExistBudget
          ? <BudgetMain />
          : <BudgetForm />
      }

    </>
  )
}

export default App
