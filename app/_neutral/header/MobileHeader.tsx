"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/neutral/logo/Logo";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { menuItemsType } from "@/types/neutral";

type Props = {
    menu: menuItemsType[]
}

const MobileHeader = (props:Props) => {
    const {menu} = props
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header>
            <nav className="bg-white border-b border-gray-300 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Logo bg="white" />
                    <div className="flex items-center lg:order-2">
                        {/* Mobile Menu Toggle Button */}
                        <button
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg"
                            aria-controls="mobile-menu"
                            aria-expanded={showMenu}
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            {/* Menu Icon */}
                            <RiMenu3Fill className={`w-6 h-6 ${showMenu ? "hidden" : "block"}`} />

                            {/* Close Icon */}
                            <MdClose className={`w-6 h-6 ${showMenu ? "block" : "hidden"}`} />

                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        id="mobile-menu"
                        className={`w-full ${showMenu ? "block" : "hidden"}`}
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {
                                menu.map((item) => (
                                    <li key={item.link}>
                                        <Link
                                            href={item.link}
                                            className="block py-2 pr-4 pl-3 text-giddaa-500 rounded"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default MobileHeader;
