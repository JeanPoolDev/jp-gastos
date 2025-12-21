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
    <main className="flex h-screen bg-[#f5f2eb] items-center justify-center">

      <div className="shadow h-[500px] w-[350px] md:w-[400px] rounded-4xl px-6 md:px-10 py-8 bg-white 
      space-y-8">

        <div className="text-center space-y-2">
          <h1 className="font-bold text-2xl">Control de Gastos</h1>
          <p className="text-sm">Controla tus gastos desde un solo lugar.</p>
        </div>

        <div className="mb-15">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-1">
              <label htmlFor="name" className="text-sm">Ingresé su Nombre :</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleChange}
                className="border border-[#f5f2eb] shadow py-1 px-4 rounded-lg" autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 gap-1">
              <label htmlFor="name" className="text-sm">Ingresé su Saldo :</label>
              <input
                type="text"
                id="amount"
                value={amount}
                onChange={handleChange}
                className="border border-[#f5f2eb] shadow py-1 px-4 rounded-lg" autoComplete="off" />
            </div>

            <div className="text-sm font-semibold">
              <p>Recuerda el saldo es mensual</p>
            </div>

            <div className="flex">
              <button
                className="px-4 py-2 bg-[#fec984] font-semibold
           rounded-lg cursor-pointer flex-1">
                Comenzar
              </button>
            </div>
          </form>
        </div>

        <div className="text-center">
          <p className="text-sm">Copyright @Jp 2025 | <span className="font-semibold">Politica Privacidad</span></p>
        </div>

      </div>

    </main >
  );
};


