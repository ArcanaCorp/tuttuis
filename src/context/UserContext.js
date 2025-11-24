import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState(null);

    useEffect(() => {
        // Cuando inicia la app, verificamos si existe el token
        const token = localStorage.getItem("token");

        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUser(decoded); // Guardamos la info del usuario
            } catch (error) {
                console.error("Token inválido:", error);
                localStorage.removeItem("token");
            }
        }

    }, []);

    const contextValue = {
        user
    }

    return (
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    )

}

export const useUser = () => useContext(UserContext);