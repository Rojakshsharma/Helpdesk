import { createContext} from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const url =  "http://localhost:8000/api"
  
    const value = {url}
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};
