import { useState, createContext } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
    const [user, setUser] = useState({});
    const [setor, setSetor] = useState({});
    const [patrim, setPatrim] = useState({});
    return (
        <UserContext.Provider value={{user, setUser, setor, setSetor, patrim, setPatrim}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;