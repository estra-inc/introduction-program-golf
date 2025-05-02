import TitleWithSubTitle from "@/components/elements/TitleWithSubTitle";

type MainTemplateProps = {
  title: string;
  subTitle: string;
  children: React.ReactNode;
};

export default function MainTemplate({
  title,
  subTitle,
  children,
}: MainTemplateProps) {
  return (
    <div className="flex flex-col gap-12">
      <TitleWithSubTitle title={title} subTitle={subTitle} />
      {children}
    </div>
  );
}