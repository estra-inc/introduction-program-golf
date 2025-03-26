"use client";

import Link from "next/link";

type SidebarProps = {
  links: {
    label: string;
    href: string;
  }[];
};

export default function Sidebar({ links }: SidebarProps) {
  return (
    <>
      <div className="w-80 bg-green-400 p-4 pt-16 h-full fixed top-0 left-0">
        <div className="flex flex-col gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-xl font-bold"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
