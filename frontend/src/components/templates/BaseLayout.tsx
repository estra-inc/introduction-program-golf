import GuestSidebar from "../elements/sidebar/GuestSidebar";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <GuestSidebar />
      <div className="flex-1 px-16 my-16 ml-80">{children}</div>
    </div>
  );
}
