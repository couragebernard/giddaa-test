"use client";

import Link from "next/link";
import { useState } from "react";
import { menuItems } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MdArrowDropDown } from "react-icons/md";

export default function Menu() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const handleMenuToggle = (menuName: string) => {
        setOpenMenu((prev) => (prev === menuName ? null : menuName));
    };

    return (
        <div className="flex gap-4">
            <nav className="flex space-x-1">
                {menuItems.map((menu) => (
                    <div key={menu.name} className="relative">
                        {menu.submenu ? (
                            <DropdownMenu open={openMenu === menu.name} onOpenChange={() => handleMenuToggle(menu.name)}>
                                <DropdownMenuTrigger asChild>
                                    <Link href={`#`}
                                        className="px-2 pb-1 font-medium text-[#4B4B4B] hover:text-giddaa-500 hover:font-bold transition flex items-center gap-1 relative group text-[12px] "
                                        onClick={() => handleMenuToggle(menu.name)}
                                    >
                                        {menu.name}
                                        <MdArrowDropDown className="text-lg" />
                                        <span className="absolute left-1/2 -bottom-1 w-6 h-[3px] bg-giddaa-500 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform rounded-full"></span>
                                    </Link>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56 mt-2">
                                    {menu.submenu.map((sub) => (
                                        <DropdownMenuItem key={sub.name}>
                                            <Link href={sub.link} className="w-full block px-3 py-2 hover:bg-gray-100">
                                                {sub.name}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link href={menu.link}
                                className="px-4 pb-1 font-medium text-gray-700 hover:text-giddaa-500 hover:font-bold transition flex items-center gap-1 relative group text-[12px] "
                            >
                                {menu.name}
                                <span className="absolute left-1/2 -bottom-1 w-6 h-[3px] bg-giddaa-500 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform rounded-full"></span>
                            </Link>
                        )}
                    </div>
                ))}
            </nav>
            <nav className="border-x border-r-slate-300">
                <Link href="/refer"
                    className="px-4 pb-1 font-medium text-gray-700 hover:text-giddaa-500 hover:font-bold transition flex items-center gap-1 relative group text-[12px] "
                >
                    Refer & Earn
                    <span className="absolute left-1/2 -bottom-1 w-6 h-[3px] bg-giddaa-500 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform rounded-full"></span>
                </Link>
            </nav>
        </div>

    );
}
