import { API } from "../config/server.config";

type createUserBody = {
   username: string;
   email?: string;
   password: string;
};

type userType = {
   id: string;
   username: string;
   email: string;
   password: string;
};

const createUser = async (body: createUserBody, userData: userType) => {
   const username = userData.username || "front9778";
   const password = userData.password || "custompass1";
   try {
      const res = await API.post("/users/", body, {
         headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${btoa(`${username}:${password}`)}`
         }
      });
      return res;
   } catch (err) {
      console.log(err);
   }
};

// const username = "front9778";
// const password = "custompass1";

// const url = "http://68.183.74.14:4005/api/users/";

// const createFetchUser = async (bodyParam: createUserBody) => {
//    console.log(bodyParam);
//    console.log(JSON.stringify(bodyParam));
//    const res = new Request(url, {
//       method: "POST",
//       headers: {
//          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
//          "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//          username: "12312123123123",
//          email: "ole31231231g@gmail.com",
//          password: "123123123121233"
//       })
//    });

//    console.log(res);
// };

export { createUser};
