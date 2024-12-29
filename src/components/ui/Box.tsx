import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

function Box({
   children,
   className = ""
}: PropsWithChildren & { className?: string }) {
   return (
      <div className="mx-3">
         <div
            className={twMerge(
               `border border-stone-200 rounded-lg p-4`,
               className
            )}
         >
            {children}
         </div>
      </div>
   );
}

export { Box };
