import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/lib/ShowToast";



export const metadata: Metadata = {
  title: "Giddaa",
  description: "Find a Home to Buy In Nigeria On Various Purchase Plans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-millik antialiased`}
      >
        
        <Toaster />
        
        {children}
      
      </body>
    </html>
  );
}
