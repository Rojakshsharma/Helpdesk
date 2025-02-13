import { createContext} from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const url =  import.meta.env.VITE_API_URL
  
    const value = {url}
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};
