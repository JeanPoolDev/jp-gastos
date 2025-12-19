import type { PropsWithChildren } from "react";

export function BannerError({ children }: PropsWithChildren) {
  return (
    <div className="p-2 rounded-br-2xl rounded-tl-2xl bg-[#e4aca0]">
      <p className="text-center font-semibold">
        {children}
      </p>
    </div>
  );
};