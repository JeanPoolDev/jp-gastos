import { useState } from "react";
import { categories } from "../data/categories";
import type { Expense } from "../interfaces";
import { useBudget } from "../hooks/useBudget";

const initialState = (): Expense => ({
  amount: 0,
  category: '',
  date: '',
  name: ''
})

export function ExpenseForm() {

  const [{ amount, category, date, name }, setExpense] = useState(initialState);
  const { dispatch } = useBudget();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    const { id, value } = e.target;

    const isNumber = ['amount'].includes(id);

    setExpense((prevState) => {
      return {
        ...prevState,
        [id]: isNumber ? Number(value) : value
      }
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: 'add-expense', payload: { newExpense: { amount, category, date, name } } });

    // TODO: LIMPIAR EL FORMULARIO
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>

      <h1 className="font-bold text-3xl border-b-4 w-1/2">
        Nuevo Gasto
      </h1>

      <div className="grid grid-cols-1 space-y-2">
        <label htmlFor="name">Nombre del Gasto :</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          autoComplete="off"
          className="p-2 border-2 rounded-xl"
        />
      </div>

      <div className="grid grid-cols-1 space-y-2">
        <label htmlFor="amount">Cantidad :</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={handleChange}
          autoComplete="off"
          className="p-2 border-2 rounded-xl"
        />
      </div>

      <div className="grid grid-cols-1 space-y-2">
        <label htmlFor="category">Cateogia :</label>
        <select
          id="category"
          value={category}
          onChange={handleChange}
          className="p-2 border-2 rounded-xl">
          <option value=""> -- Seleccione -- </option>
          {
            categories.map(cat => (
              <option value={cat.id} key={cat.id}>
                {cat.name}
              </option>
            ))
          }
        </select>
      </div>

      <div className="grid grid-cols-1 space-y-2">
        <label htmlFor="date">Fecha :</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleChange}
          className="p-2 border-2 rounded-xl"
        />
      </div>

      <div className="flex justify-end">
        <button className="bg-black font-semibold text-white rounded-2xl px-10 py-3 
        cursor-pointer hover:bg-white hover:text-black transition-all">
          Guardar
        </button>
      </div>

    </form>
  );
};