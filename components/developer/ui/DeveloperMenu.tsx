"use client";

import { useState } from "react";
import { MdArrowDropDown, MdOutlineDashboard } from "react-icons/md";
import Link from "next/link";
import { LuClipboardList } from "react-icons/lu";
import { developerMenuItemsType } from "@/types/developer";
import { TbHomeEco } from "react-icons/tb";
import { TbHomeDollar } from "react-icons/tb";


export const developerMenuItems: developerMenuItemsType[] = [
    {
        name: "Dashboard",
        link: "/developer/dashboard",
        icon: <MdOutlineDashboard />
    },
    {
        name: "Properties",
        link: "/developer/properties",
        icon: <TbHomeEco />
    },
    {
        name: "Plans",
        link: "/developer/plans",
        icon: <LuClipboardList />,
        submenu: [
            {
                name: "Plans",
                link: "/#"
            },
        ]
    },
    {
        name: "Mortgage Options",
        link: "/developer/mortgage-options",
        icon: <TbHomeDollar />,
        submenu: [
            {
                name: "Invest in Giddaa",
                link: "/#"
            },
            {
                name: "Giddaa funds",
                link: "/#"
            },
        ]
    }

]



export default function DeveloperMenu() {
    const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});

    const toggleSubmenu = (name: string) => {
        setOpenSubmenus((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <nav className="w-full">
            <ul className="space-y-2">
                {developerMenuItems.map((item) => (
                    <li key={item.name}>
                        <div
                            className="flex items-center justify-between p-3 rounded-md cursor-pointer"
                            onClick={() => item.submenu && toggleSubmenu(item.name)}
                        >
                            <Link href={item.link} className="flex items-center gap-2 flex-1">
                                {item.icon}
                                <span className="font-medium">{item.name}</span>
                            </Link>
                            {item.submenu && <MdArrowDropDown className={`transition-transform ${openSubmenus[item.name] ? "rotate-180" : ""}`} />}
                        </div>

                        {item.submenu && openSubmenus[item.name] && (
                            <ul className="ml-6 mt-2 space-y-1">
                                {item.submenu.map((sub) => (
                                    <li key={sub.name}>
                                        <Link
                                            href={sub.link}
                                            className="block p-2 text-sm text-gray-600 rounded-md hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700"
                                        >
                                            {sub.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
