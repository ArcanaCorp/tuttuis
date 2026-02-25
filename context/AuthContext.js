"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
    getSession,
    onAuthChange,
    fetchUserWithSchool,
    signOut
} from "@/services/auth.service";

const AuthContext = createContext(null);
const CACHE_KEY = "auth:user:v1";

export function AuthProvider({ children }) {

    const [session, setSession] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    /* ---------------- SESSION ---------------- */
    useEffect(() => {
        getSession().then((session) => {
            setSession(session);
        });

        const { data: listener } = onAuthChange((session) => {
            setSession(session);

            if (!session) {
                localStorage.removeItem(CACHE_KEY);
                setUser(null);
                setLoading(false);
            }
        });

        return () => listener.subscription.unsubscribe();
    }, []);

    /* ---------------- USER ---------------- */
    useEffect(() => {
        if (!session?.user) {
            setLoading(false);
            return;
        }

        let usedCache = false;

        // ⚡ Cache inmediato
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
            try {
                setUser(JSON.parse(cached));
                usedCache = true;
                setLoading(false); // 🔥 clave
            } catch {
                localStorage.removeItem(CACHE_KEY);
            }
        }

        // 🔄 Fuente real (background)
        fetchUserWithSchool(session.user.id)
            .then((freshUser) => {
                setUser(freshUser);
                localStorage.setItem(CACHE_KEY, JSON.stringify(freshUser));
            })
            .finally(() => {
                if (!usedCache) setLoading(false);
            });

    }, [session]);

    const value = {
        session,
        user,
        school: user?.school || null,

        loading,

        // ✅ auth real
        isAuthenticated: !!session && !!user,
        hasSchool: !!user?.school_id,

        logout: async () => {
            localStorage.removeItem(CACHE_KEY);
            await signOut();
            setSession(null);
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}