import type { Metadata } from "next";
import { Inter, Roboto, Poppins } from "next/font/google";
import "../globals.css";
import Provider from "@/components/layout/Provider";
import Navbar from "@/components/layout/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="w-[60%] mx-auto">
            <Navbar />
            {children}
          </div>
        </Provider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
