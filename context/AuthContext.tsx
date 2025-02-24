"use client";

import React, { createContext, useContext, useEffect, ReactNode, useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { showToast } from "@/lib/ShowToast";
import { loggedInUser } from "@/actions/auth";

interface AuthContextType {
    isPending: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathname = usePathname()

    useEffect(() => {
        const checkToken = async () => {

            startTransition(async () => {
                const { error } = await loggedInUser();

                if (error) {
                    const encodedRedirect = encodeURIComponent(pathname);
                    showToast("error", "Please login to continue");
                    router.push(`/login?redirect=${encodedRedirect}`);
                   
                }
            })

        };

        checkToken();
    }, [pathname, router]);

    if (isPending) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ isPending }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
