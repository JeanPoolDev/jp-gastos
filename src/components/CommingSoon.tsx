export function CommingSoon() {
  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold">Muy Pronto</h1>
        <button className="font-semibold border-2 border-[#988e6b] rounded-full 
          px-3 py-2 md:px-4 md:py-3 cursor-pointer">
          Ver más
        </button>
      </div>

      <div className="flex gap-5 overflow-x-auto">

        <div className="border-2 border-[#988e6b]  p-5 rounded-4xl shrink-0 min-w-[260px]">
          <div className="flex gap-5 justify-between items-center mb-3">
            <div className="glassMorphismo w-17 h-15 flex justify-center 
              items-center rounded-2xl border">
              N
            </div>
            <div className=" w-3/4">
              <p className="font-bold text-xl">$10.00</p>
              <p>12 dias despues</p>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-2xl">Notion Team</h2>
          </div>
        </div>

        <div className="border-2 border-[#988e6b]  p-5 rounded-4xl shrink-0 min-w-[260px]">
          <div className="flex gap-5 justify-between items-center mb-3">
            <div className="glassMorphismo w-17 h-15 flex justify-center 
              items-center rounded-2xl border">
              C
            </div>
            <div className=" w-3/4">
              <p className="font-bold text-xl">$10.00</p>
              <p>12 dias despues</p>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-2xl">Notion Team</h2>
          </div>
        </div>
      </div>
    </div>
  );
};