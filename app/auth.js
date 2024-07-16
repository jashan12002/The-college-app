// auth.js
import { account, ID } from './appwrite';

let loggedInUser = null;

export const logout = (setUser) => {
  return async () => {
    await account.deleteSession("current");
    loggedInUser = null;
    setUser(null);
     localStorage.removeItem('accessToken');
  };
};

// Export the loggedInUser as well, so you can use it in other components
export { loggedInUser };