import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@/context/UserContext";

export const PublicRoute = () => {
    const { user } = useUser();
    return user ? <Navigate to="/dashboard" replace /> : <Outlet />;
};