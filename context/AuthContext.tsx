"use client";

import React, { createContext, useContext, useEffect, ReactNode, useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { showToast } from "@/lib/ShowToast";
import { loggedInUser } from "@/actions/auth";
import { FaSpinner } from "react-icons/fa6";

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
        return <div className="h-[100vh] w-[100vw] flex justify-center items-center">
            <div className="flex items-center gap-1 text-giddaa-500"><FaSpinner className="animate-spin" /> <p>Loading...</p></div>
        </div>;
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
