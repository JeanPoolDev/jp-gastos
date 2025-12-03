
function App() {

  return (
    <main className="flex">

      <article className="w-1/2 flex justify-center">
        <div className="w-full glassMorphismo p-40 space-y-10 flex flex-col justify-center">

          <div className="space-y-4">
            <h1 className="text-[#e394b5] font-bold text-4xl">
              !Listo para comenzar!
            </h1>
            <p className="text-white font-semibold">
              Crea una cuenta para manejar tus gatos
            </p>
          </div>

          <form className="space-y-10">
            <div className="grid grid-cols-1 text-white gap-3 text-lg">
              <label htmlFor="name">Tu Nombre :</label>
              <input type="text" id="name" className="border-2 p-2 rounded-lg bg-transparent focus:outline-none" autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 text-white gap-3 text-lg">
              <label htmlFor="budget">Tu Presupuesto :</label>
              <input type="text" id="budget" className="border-2 p-2 rounded-lg bg-transparent focus:outline-none" autoComplete="off" />
            </div>

            <div className="flex justify-end">
              <button className="px-4 py-3 bg-[#e394b5] text-white font-semibold rounded-lg">
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
  )
}

export default App
