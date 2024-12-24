import { API } from "../config/server.config";

type createUserBody = {
   login: string;
   email?: string;
   password: string;
};

const createUser = async (body: createUserBody) => {
   const res = await API.post("/users", body);
   console.log(res);
};

export { createUser };
