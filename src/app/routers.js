import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "@/routes/ProtectRoute";
import { PublicRoute } from "@/routes/PublicRoute";

import AuthLayout from "@/featured/auth/layout";
import LoginPage from "@/featured/auth/page";

import DashboardLayout from "@/featured/dashboard/layout";
import HomeView from "@/featured/dashboard/views/home/view";
import ReportView from "@/featured/dashboard/views/report/view";
import ScanView from "@/featured/dashboard/views/scan/view";

export const router = createBrowserRouter([
    {
        element: <PublicRoute/>,
        children: [
            {
                path: '/',
                element: <AuthLayout/>,
                children: [
                    {
                        index: true,
                        element: <LoginPage/>
                    }
                ]
            }
        ]
    },
    {
        element: <ProtectedRoute/>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardLayout/>,
                children: [
                    {
                        index: true,
                        element: <HomeView/>
                    },
                    {
                        path: 'reports',
                        element: <ReportView/>
                    },
                    {
                        path: 'scan',
                        element: <ScanView/>
                    },
                    {
                        path: 'search'
                    },
                    {
                        path: 'account'
                    }
                ]
            }
        ]
    },
    {
        path: '/scan',
        element: <ScanView/>
    }
])