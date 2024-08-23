"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Facebook, Instagram } from "lucide-react";

const Navbar = () => {
  const path = usePathname();
  return (
    <header className="flex justify-between  py-4">
      <div className="flex items-center gap-10">
        <Link
          href={"/"}
          className="size-[60px] border-2 border-gray-700 p-2 grid grid-cols-2 place-items-center"
        >
          <div className="text-sm font-medium">S</div>
          <div className="text-sm font-medium">S</div>
          <div className="text-sm font-medium">P</div>
          <div className="text-sm font-medium">N</div>
        </Link>
        <div>
          <nav>
            <ul className="flex gap-6">
              {navLinks.map((link, idx) => (
                <li key={idx} className="px-2 py-1">
                  <Link
                    className={cn(
                      " inline-block relative text-lg after:absolute after:rounded-lg after:w-0 after:left-0 after:-bottom-1 after:content-[''] after:h-[3px] hover:after:w-[50%] after:duration-300 after:bg-gray-600",
                      {
                        "after:absolute after:rounded-lg after:w-[50%] after:left-0 after:-bottom-1 after:content-[''] after:h-[3px] after:bg-gray-600":
                          path == link.href,
                      }
                    )}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex items-center gap-10 ">
        <div className="flex gap-2 items-center ">
          <Instagram className="stroke-[1.2]" />
          <Facebook className="stroke-[1.2]" />
        </div>
        <div>
          <Link
            href={"/upload"}
            className="inline-block hover:scale-[1.02] active:translate-y-1 py-3 px-6 cursor-pointer transition-all shadow-lg hover:shadow-gray-300/50 bg-gray-900 text-white rounded-full font-semibold"
          >
            Create Post
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },

  {
    href: "/contact",
    label: "Contact",
  },
];
