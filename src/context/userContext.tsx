import {
   createContext,
   PropsWithChildren,
   useContext,
   useEffect,
   useState
} from "react";

type userType = {
   id: string;
   username: string;
   email: string;
   password: string;
};

type userContextType = {
   userData: userType;
   setUserData: (usr: userType) => void;
   removeUser: () => void;
};

const unknownUser = {
   id: "",
   username: "",
   email: "",
   password: ""
};

const userContext = createContext<userContextType>({
   userData: unknownUser,
   setUserData: () => {},
   removeUser: () => {}
});

function UserContextProvider({ children }: PropsWithChildren) {
   const [userData, setUserData] = useState<userType>(() => {
      const storredUser = localStorage.getItem("userData");
      if (storredUser) return JSON.parse(storredUser);
      return unknownUser;
   });

   const removeUser = () => {
      setUserData({ ...unknownUser });
   };

   useEffect(() => {
      localStorage.setItem("userData", JSON.stringify(userData));
   }, [userData]);

   return (
      <userContext.Provider value={{ userData, setUserData, removeUser }}>
         {children}
      </userContext.Provider>
   );
}

function useUserContext() {
   const context = useContext(userContext);
   return context;
}

export { UserContextProvider, useUserContext };
