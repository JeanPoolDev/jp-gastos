import { useEffect, useState } from "react";
import { categories } from "../data/categories";
import type { DraftExpense } from "../interfaces";
import { useBudget } from "../hooks/useBudget";
import { BannerError } from "./bannerError";

const initialState = (): DraftExpense => ({
  amount: 0,
  category: '',
  date: '',
  name: ''
})

export function ExpenseForm() {

  const [expense, setExpense] = useState(initialState);
  const { state, dispatch } = useBudget();
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!state.editingId) return;

    const editingExpense = state.expense.find(exp => exp.id === state.editingId);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (editingExpense) setExpense(editingExpense);

  }, [state.editingId]);

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

    if (Object.values(expense).includes('')) {
      setError('Todos los campos tienen que estar llenado crack');
      return;
    }


    if (state.editingId) {
      dispatch({ type: 'edit-expense', payload: { expense: { id: state.editingId, ...expense } } })
    } else {
      dispatch({ type: 'add-expense', payload: { newExpense: expense } })
    }

    // TODO: LIMPIAR EL FORMULARIO
    initialState()
  }


  return (
    <form className="space-y-5" onSubmit={handleSubmit}>

      <h1 className="font-bold text-3xl border-b-4 w-1/2">
        Nuevo Gasto
      </h1>

      {error && <BannerError />}

      <div className="grid grid-cols-1 space-y-2">
        <label htmlFor="name">Nombre del Gasto :</label>
        <input
          type="text"
          id="name"
          value={expense.name}
          onChange={handleChange}
          autoComplete="off"
          className="p-2 border-2 rounded-xl"
        />
      </div>

      <div className="grid grid-cols-1 space-y-2">
        <label htmlFor="amount">Cantidad :</label>
        <input
          type="number"
          id="amount"
          value={expense.amount}
          onChange={handleChange}
          autoComplete="off"
          className="p-2 border-2 rounded-xl"
        />
      </div>

      <div className="grid grid-cols-1 space-y-2">
        <label htmlFor="category">Cateogia :</label>
        <select
          id="category"
          value={expense.category}
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
          value={expense.date}
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