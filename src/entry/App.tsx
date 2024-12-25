import { UserContextProvider } from "../context/userContext";
import { Router } from "./Router";

function App() {
   return (
      <>
         <UserContextProvider>
            <Router />
         </UserContextProvider>
      </>
   );
}

export { App };
