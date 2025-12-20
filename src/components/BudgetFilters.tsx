import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

export function BudgetFilters() {

  const { dispatch } = useBudget();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    dispatch({ type: 'set-categoryId', payload: { id: e.target.value } })
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <label htmlFor="filtros" className="text-2xl font-bold">Filtros Categoría</label>
      </div>

      <div className="flex">
        <select
          id="filtros"
          onChange={handleChange}
          className="border-2 border-[#988e6b]
              rounded-4xl
              p-4
              flex-1
              bg-transparent
              font-semibold
              focus:outline-none
              appearance-none">
          <option value="">Todos</option>
          {categories.map(cat => (
            <option value={cat.id} key={cat.id} >{cat.name}</option>
          ))}
        </select>
      </div>

    </div>
  );
};