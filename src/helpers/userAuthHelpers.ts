type userType = {
   id: string;
   username: string;
   email: string;
   password: string;
};

const authFromUserData = (userData: userType) => {
   const username = userData.username || "front9778";
   const password = userData.password || "custompass1";
   return { Authorization: `Basic ${btoa(`${username}:${password}`)}` };
};

const isUserEmpty = (userData: userType) => {
   return userData.username.length === 0;
};

export { authFromUserData, isUserEmpty };

export type { userType };
