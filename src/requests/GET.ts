import { API } from "../config/server.config";
import { authFromUserData, userType } from "../helpers/userAuthHelpers";

const getCurrentUser = async (userData: userType) => {
   try {
      const res = await API.get("/users/current/", {
         headers: {
            ...authFromUserData(userData)
         }
      });
      return res.data;
   } catch (err) {
      console.log(err);
      return null;
   }
};

export { getCurrentUser };
