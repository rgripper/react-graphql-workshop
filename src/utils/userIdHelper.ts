import uuidv4 from "uuid/v4";

export const setUserId = () => {
  let userId = localStorage.getItem("userId");
  if (!userId) {
    userId = uuidv4();
    localStorage.setItem("userId", userId);
  }
};

export const getUserId = () => {
  return localStorage.getItem("userId");
};
