import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Box } from "../components/ui/Box";
import Input from "../components/ui/Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "../requests/POST";

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

const authSchema = z.object({
   login: z.string().min(1, "Login is required"),
   email: z.string().email("Invalid email").optional(),
   password: z.string().min(6, "Password must be at least 6 characters")
});

type AuthFormData = z.infer<typeof authSchema>;

function AuthForm({ authMode }: { authMode: "REG" | "LOG" }) {
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm<AuthFormData>({
      resolver: zodResolver(authSchema)
   });

   const onSubmit = async (data: AuthFormData) => {
      console.log("ya3");
      await createUser(data);
      return "2";
   };

   return (
      <Box>
         <form
            className="w-[300px] flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
         >
            <h2 className="text-center text-lg">
               {authMode === "REG"
                  ? "Create an account"
                  : "Log into an account"}
            </h2>
            <Input register={register("login")} placeholder="Login" />
            {authMode === "REG" && (
               <Input
                  register={register("email")}
                  placeholder="Email"
                  type="email"
               />
            )}
            <Input
               register={register("password")}
               placeholder="Password"
               type="password"
            />
            {JSON.stringify(errors)}
            {authMode == "REG" && <Button>Sign up</Button>}
            {authMode == "LOG" && <Button>Sign in</Button>}
         </form>
      </Box>
   );
}

export { AuthPage };
