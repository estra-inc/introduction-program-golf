import AccountSidebar from "../elements/sidebars/AccountSidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <AccountSidebar />
      <div className="flex-1 px-16 my-16 ml-80">{children}</div>
    </div>
  );
}