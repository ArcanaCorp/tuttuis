import { UserProvider } from "@/context/UserContext"

export const Providers = ({ children }) => {

    return (

        <>
            <UserProvider>
                {children}
            </UserProvider>
        </>

    )

}