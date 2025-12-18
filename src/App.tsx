import { BudgetForm } from "./components/BudgetForm"
import { BudgetMain } from "./components/BudgetMain";
import { useBudget } from "./hooks/useBudget"

function App() {

  const { state } = useBudget();

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
