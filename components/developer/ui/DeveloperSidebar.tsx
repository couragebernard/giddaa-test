"use client"

import { ChevronUp, User2 } from "lucide-react"


import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link"
import Logo from "@/components/neutral/logo/Logo"
import { developerMenuItems } from "./DeveloperMenu"
import { MdArrowDropDown } from "react-icons/md";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";




export function DeveloperSidebar() {
    const router = useRouter();
    // const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});
    const pathname = usePathname();

    //   const toggleSubmenu = (name: string) => {
    //     setOpenSubmenus((prev) => ({ ...prev, [name]: !prev[name] }));
    //   };

    const handleLogout = async () => {
        router.push("#")
    }

    return (
        <Sidebar>
            <SidebarHeader className="mb-4 py-3 px-3 space-y-2 border-b border-b-gray-200">

                <Logo bg='green' width={24} height={10} />
                <p className='text-[10px]'>Residencia Moderno Smart...</p>

            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        {/* <SidebarMenu className="gap-3">
                            {developerMenuItems.map((item) => (
                                <SidebarMenuItem key={item.name} className="h-auto">
                                    <SidebarMenuButton asChild isActive={pathname === item.link} className={`py-0 ${pathname === item.link ? "border-l-4 border-blue-500 bg-[#FCE918] text-black" : "hover:border-l-4 hover:border-blue-500"
                                                    }`}>
                                        <div className="flex flex-col gap-5 h-auto !items-start">
                                            <div
                                                className={`flex items-center justify-between py-2 h-auto px-3 rounded-md cursor-pointer `}
                                                onClick={() => item.submenu && toggleSubmenu(item.name)}
                                            >
                                                <Link href={item.link} className="flex items-center gap-3 flex-1">
                                                    <span className="text-xl">{item.icon}</span>
                                                    <span>{item.name}</span>
                                                </Link>
                                                {item.submenu && (
                                                    <MdArrowDropDown
                                                        className={`transition-transform text-xl ${openSubmenus[item.name] ? "rotate-180" : ""}`}
                                                    />
                                                )}
                                            </div>

                                            {item.submenu && openSubmenus[item.name] && (
                                                <div className="ml-6 space-y-1">
                                                    {item.submenu.map((sub) => (
                                                        <SidebarMenuButton asChild key={sub.name} isActive={pathname === sub.link}>
                                                            <Link
                                                                href={sub.link}
                                                                className="block p-2 text-sm text-gray-600 rounded-md hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700"
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                        </SidebarMenuButton>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu> */}


                        <SidebarMenu className="gap-3">
                            {developerMenuItems.map((item) =>
                                item.submenu ? (
                                    <Collapsible key={item.name} defaultOpen={pathname.startsWith(item.link)} className="group/collapsible">
                                        <SidebarMenuItem>
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton className="flex items-center justify-between w-full py-3 px-3 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-xl">{item.icon}</span>
                                                        <span>{item.name}</span>
                                                    </div>
                                                    <MdArrowDropDown className="text-xl transition-transform group-data-[state=open]:rotate-180" />
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <SidebarMenuSub>
                                                    {item.submenu.map((sub) => (
                                                        <SidebarMenuSubItem key={sub.name}>
                                                            <SidebarMenuSubButton isActive={pathname === sub.link} className="w-full px-0">
                                                                <Link
                                                                    href={sub.link}
                                                                    className={`w-full block py-2 px-4 text-sm rounded-md transition ${pathname === sub.link
                                                                            ? "bg-blue-500 text-white"
                                                                            : "hover:bg-gray-200 dark:hover:bg-gray-800"
                                                                        }`}
                                                                >
                                                                    {sub.name}
                                                                </Link>
                                                            </SidebarMenuSubButton>

                                                        </SidebarMenuSubItem>
                                                    ))}
                                                </SidebarMenuSub>
                                            </CollapsibleContent>
                                        </SidebarMenuItem>
                                    </Collapsible>
                                ) : (
                                    <SidebarMenuItem key={item.name}>
                                        <SidebarMenuButton asChild isActive={pathname === item.link}>
                                            <Link
                                                href={item.link}
                                                className={`flex items-center gap-3 w-full py-3 px-3 rounded-md transition ${pathname === item.link ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-800"
                                                    }`}
                                            >
                                                <span className="text-xl">{item.icon}</span>
                                                <span>{item.name}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            )}
                        </SidebarMenu>



                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>


            {/* footer */}
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> Name
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                //   className="w-[100%]"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem className="">
                                    <Link href="/user/edit-profile" className="w-full">
                                        <span>Edit profile</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/user/change-password" className="w-full">
                                        <span>Change Password</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                    <Link href="#" onClick={handleLogout} className="w-full">
                                        <span>Sign out</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
