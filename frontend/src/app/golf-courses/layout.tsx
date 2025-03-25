import BaseLayout from "@/Components/templates/BaseLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BaseLayout>{children}</BaseLayout>;
}
