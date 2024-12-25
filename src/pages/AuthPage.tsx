import { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import { Box } from "../components/ui/Box";
import { Input } from "../components/ui/Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "../requests/POST";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import { getCurrentUser } from "../requests/GET";
import { isUserEmpty } from "../helpers/userAuthHelpers";

function AuthPage() {
   const [authMode, setAuthMode] = useState<"REG" | "LOG" | null>(null);
   const navigateTo = useNavigate();
   const { userData } = useUserContext();

   const [loading, setLoading] = useState(true);

   useEffect(() => {
      if (isUserEmpty(userData)) setLoading(false);
      else
         (async () => {
            const currentUser = await getCurrentUser(userData);
            if (currentUser) navigateTo("/email");
            else setLoading(false);
         })();
   });

   if (loading)
      return (
         <section className="container mx-auto mt-8 flex flex-col items-center gap-4">
            <p style={{ fontSize: "6rem" }}>
               <i className="pi pi-spin pi-cog"></i>
            </p>
         </section>
      );

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
   username: z.string().min(1, "Username is required"),
   email: z.string().email("Invalid email"),
   password: z.string().min(6, "Password must be at least 6 characters")
});

type AuthFormData = z.infer<typeof authSchema>;

function AuthForm({ authMode }: { authMode: "REG" | "LOG" }) {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting }
   } = useForm<AuthFormData>({
      resolver: zodResolver(authSchema)
   });

   const navigateTo = useNavigate();
   const { userData, setUserData } = useUserContext();

   const onSubmit = async (data: AuthFormData) => {
      console.log(data);
      const res = await createUser(data, userData);
      if (res?.status === 201) {
         setUserData({ ...data, id: res.data.id });
         navigateTo("/email");
      } else console.log("something went wrong");
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
            <Input
               register={register("username")}
               placeholder="Username"
               error={errors.username}
            />
            {authMode === "REG" && (
               <Input
                  register={register("email")}
                  placeholder="Email"
                  error={errors.email}
               />
            )}
            <Input
               register={register("password")}
               placeholder="Password"
               type="password"
               error={errors.password}
            />
            {isSubmitting ? (
               <p className="py-2 px-4 text-center">
                  <i className="pi pi-spin pi-spinner"></i>
               </p>
            ) : (
               <>
                  {authMode === "REG" && <Button>Sign up</Button>}
                  {authMode === "LOG" && <Button>Sign in</Button>}
               </>
            )}
         </form>
      </Box>
   );
}

export { AuthPage };
