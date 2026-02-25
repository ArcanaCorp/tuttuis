"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AuthGuard({ children }) {

    const router = useRouter();
    const pathname = usePathname();
    const { loading, isAuthenticated, hasSchool } = useAuth();

    useEffect(() => {
        if (loading) return;

        const isAuthRoute = pathname.startsWith("/auth");
        const isOnboarding = pathname.startsWith("/onboarding");

        // ❌ NO AUTH → LOGIN
        if (!isAuthenticated) {
            if (!isAuthRoute) router.replace("/auth/login");
            return;
        }

        // ✅ AUTH + SIN SCHOOL → SOLO ONBOARDING
        if (!hasSchool) {
            if (!isOnboarding) router.replace("/onboarding/school");
            return;
        }

        // ✅ AUTH + CON SCHOOL → NO AUTH / NO ONBOARDING
        if (isAuthRoute || isOnboarding) {
            router.replace("/dashboard");
        }

    }, [loading, isAuthenticated, hasSchool, pathname, router]);

    if (loading) {
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <span className="text-sm opacity-60">
                    Validando sesión…
                </span>
            </div>
        );
    }

    return children;
}