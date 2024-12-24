import { PropsWithChildren } from "react";

function Box({ children }: PropsWithChildren) {
   return (
      <div className="border border-stone-200 rounded-lg p-4">{children}</div>
   );
}

export { Box };
