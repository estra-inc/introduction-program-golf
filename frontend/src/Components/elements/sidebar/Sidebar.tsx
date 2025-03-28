"use client";

import logout from "@/features/auth/components/api/logout";
import Link from "next/link";
import { useRouter } from "next/navigation";

type SidebarProps = {
  links: {
    label: string;
    href: string;
    onClick?: () => void;
  }[];
  canLogout?: boolean;
};

export default function Sidebar({ links, canLogout = false }: SidebarProps) {
  const router = useRouter();

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
          {canLogout && (
            <button
              onClick={() => {
                logout();
                router.push("/login");
              }}
              className="text-white text-xl font-bold mr-auto"
            >
              ログアウト
            </button>
          )}
        </div>
      </div>
    </>
  );
}
