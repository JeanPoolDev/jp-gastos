import { useState } from "react";
import type { Budget } from "../interfaces";
import { useBudget } from "../hooks/useBudget";

const initialValue = (): Budget => ({
  amount: 0,
  name: ''
})

export function BudgetForm() {

  const [{ amount, name }, setBudget] = useState(initialValue);
  const { dispatch } = useBudget();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const isNumber = ['amount'].includes(id);

    setBudget(prevState => {
      return {
        ...prevState,
        [id]: isNumber ? Number(value) : value
      }
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'budget-add', payload: { newBudget: { amount, name } } })
  }


  return (
    <main className="flex">

      <article className="w-1/2 flex justify-center">
        <div className="w-full glassMorphismo p-40 space-y-10 flex flex-col justify-center">

          <div className="space-y-4">
            <h1 className="text-[#e394b5] font-bold text-5xl">
              !Listo para comenzar!
            </h1>
            <p className="text-white font-semibold">
              Crea una cuenta para manejar tus gatos
            </p>
          </div>
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 text-white gap-3 text-lg">
              <label htmlFor="name">Tu Nombre :</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleChange}
                className="border-2 p-2 rounded-lg bg-transparent focus:outline-none" autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 text-white gap-3 text-lg">
              <label htmlFor="amount">Tu Presupuesto :</label>
              <input
                type="text"
                id="amount"
                value={amount}
                onChange={handleChange}
                className="border-2 p-2 rounded-lg bg-transparent focus:outline-none" autoComplete="off" />
            </div>

            <div className="flex justify-end">
              <button
                className="px-4 py-3 bg-[#e394b5] text-white font-semibold 
          rounded-lg cursor-pointer">
                Comenzar
              </button>
            </div>
          </form>
        </div>
      </article>

      <div className="w-1/2">
        <img src="/logofondo.png" className="w-full h-full bg-cover" draggable="false" />
      </div>

    </main>
  );
};