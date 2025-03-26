import Sidebar from "@/components/elements/sidebar/Sidebar";

export default function GuestSidebar() {
  return <Sidebar links={[{ label: "ゴルフ場一覧", href: "/golf-courses" }]} />;
}
