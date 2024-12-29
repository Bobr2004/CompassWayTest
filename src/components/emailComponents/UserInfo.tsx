import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import { Box } from "../ui/Box";
import { Button } from "../ui/Button";

function UserInfo() {
   const navigateTo = useNavigate();
   const { userData, removeUser } = useUserContext();

   const logout = () => {
      removeUser();
      navigateTo("/");
      console.log("yay");
   };

   return (
      <Box className="max-w-[450px] mx-auto">
         <h2 className="text-center text-xl">User information</h2>
         <div className="flex items-start gap-4 mt-4 flex-wrap justify-center">
            <ul className="flex flex-col gap-2">
               <li>
                  Username: <span className="italic">{userData.username}</span>
               </li>
               <li>
                  Email: <span className="italic">{userData.email}</span>
               </li>
               <li>
                  ID: <span className="italic">{userData.id}</span>
               </li>
            </ul>
            <Button onClick={logout}>Logout</Button>
            <Button onClick={() => console.log("HelloWorld")}>Hello</Button>
         </div>
      </Box>
   );
}

export { UserInfo };
