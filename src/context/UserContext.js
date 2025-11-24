import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState(() => {
        try {
            const token = Cookies.get('tuttis_user')
            if (!token) return null
                return jwtDecode(token)            
        } catch (error) {
            return null
        }
    });

    const getAccount = async (token) => {
        try {
            const decoded = jwtDecode(token)
            setUser(decoded);
        } catch (error) {
            setUser(null)
            console.log(error);
        }
    }

    const logout = () => {
        Cookies.remove('tuttis_user');
        setUser(null);
    };

    useEffect(() => {
        const verifyAccount = async () => {
            try {
                if (user === null) {
                    const token = Cookies.get('tuttis_user')
                    await getAccount(token)
                }
            } catch (error) {
                console.error(error);
            }
        }
        verifyAccount();
    }, []);

    const contextValue = {
        user,
        getAccount,
        logout,
    }

    return (
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    )

}

export const useUser = () => useContext(UserContext);