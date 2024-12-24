import { useState } from "react";
import { Button } from "../components/ui/Button";

function AuthPage() {
   const [authMode, setAuthMode] = useState<"REG" | "LOG" | null>(null);
   return (
      <>
         <section className="container mx-auto mt-8 flex flex-col items-center gap-4">
            <h2 className="text-xl text-center">Authentication</h2>
            <div className="grid grid-cols-2 gap-2 w-[300px]">
               <Button
                  onClick={() => setAuthMode("REG")}
                  isActive={authMode === "REG"}
               >
                  Registration
               </Button>

               <Button
                  onClick={() => setAuthMode("LOG")}
                  isActive={authMode === "LOG"}
               >
                  Login
               </Button>
            </div>
            {authMode && <AuthForm {...{ authMode }} />}
         </section>
      </>
   );
}

function AuthForm({ authMode }: { authMode: "REG" | "LOG" }) {
   return <form></form>;
}

export { AuthPage };
