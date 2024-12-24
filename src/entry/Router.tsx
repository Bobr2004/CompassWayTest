import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { EmailPage } from "../pages/EmailPage";
import { AuthPage } from "../pages/AuthPage";

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index path="/" element={<AuthPage />} />
               <Route index path="email" element={<EmailPage />} />
               <Route path="*" element={<p>404</p>} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

function Layout() {
   return (
      <>
         <header className="border-b border-stone-200 p-4">
            <h1 className="text-3xl font-bold text-center">CompassWay Test App</h1>
         </header>
         <main>
            <Outlet />
         </main>
      </>
   );
}

export { Router };
