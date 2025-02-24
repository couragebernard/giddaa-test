import { menuItemsType } from "@/types/neutral"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const menuItems:menuItemsType[] = [
  {
      name: "Buy",
      link: "/buy",
      submenu: [
          {
              name: "Buy properties",
              link: "/#"
          },
          {
              name: "Buy shares",
              link: "/#"
          },
      ]
  },
  {
      name: "Shortlets",
      link: "/shortlets",
      submenu: [
          {
              name: "Shortlets on the Island",
              link: "/#"
          },
          {
              name: "Shortlets on the Mainland",
              link: "/#"
          },
      ]
  },
  {
      name: "Sell",
      link: "/sell",
      submenu: [
          {
              name: "Sell your properties",
              link: "/#"
          },
      ]
  },
  {
      name: "Invest",
      link: "/invest",
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
  },
  {
      name: "Services",
      link: "/services",
      submenu: [
          {
              name: "Service 1",
              link: "/#"
          },
          {
              name: "Service 2",
              link: "/#"
          },
      ]
  },
  {
      name: "Enterprise",
      link: "/enterprise",
      submenu: [
          {
              name: "About us",
              link: "/#"
          },
          {
              name: "Contact us",
              link: "/#"
          },
      ]
  },
  {
      name: "Agents & Realtors",
      link: "/agents-realtors",
  },

]