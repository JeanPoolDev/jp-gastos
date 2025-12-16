import { useBudget } from "../hooks/useBudget";
import { ExpenseCard } from "./ExpenseCard";
import ExpenseModal from "./ExpenseModal";

export function BudgetMain() {

  const { state } = useBudget();

  const fechaActual = () => {

    const fecha = new Date();

    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;

    return `${dia}/${mes}`
  }

  return (
    <section className="max-w-3xl m-auto py-10 space-y-8">

      <div className="flex justify-around items-center">

        <div className="w-[10%] border-white">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://i.pinimg.com/1200x/60/ef/ff/60effff1052085826c1eda5c1db835e6.jpg"
            alt="logo principal" />
        </div>

        <h1 className="text-2xl font-semibold">{state.budget[0].name}</h1>

        <div>
          <ExpenseModal />
        </div>

      </div>

      <div className="flex justify-between bg-[#db7e5d] h-[200px] rounded-bl-3xl rounded-tr-3xl p-8">
        <div className="flex flex-col justify-between">
          <p className="text-2xl font-semibold">Presupuesto</p>
          <p className="text-5xl font-bold">S/1200.00</p>
        </div>

        <div className="flex items-end">
          <p className="text-2xl font-semibold">{fechaActual()}</p>
        </div>
      </div>

      <section>
        <h1 className="text-2xl font-bold mb-5">Lista de Gasto</h1>

        <div className="space-y-5">
          {
            state.expense.map(expense => (
              <ExpenseCard key={expense.name} expense={expense} />
            ))
          }
        </div>
      </section>

    </section>
  );
};