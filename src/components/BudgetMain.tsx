import { useBudget } from "../hooks/useBudget";

export function BudgetMain() {

  const { state } = useBudget();

  return (
    <section className="max-w-3xl m-auto py-10">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-zinc-500 text-lg">Buenos Días.</p>
          <h1 className="text-white text-xl">{state.budget[0].name}</h1>
        </div>

        <div className="w-[10%] border-white">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://i.pinimg.com/1200x/60/ef/ff/60effff1052085826c1eda5c1db835e6.jpg"
            alt="logo principal" />
        </div>

      </div>

    </section>
  );
};