import { TitleWithSubText } from "../elements/TitleWithSubText";

type MainTemplateProps = {
  title: string;
  subText: string;
  children: React.ReactNode;
};

export default function MainTemplate({
  title,
  subText,
  children,
}: MainTemplateProps) {
  return (
    <div className="flex flex-col gap-12">
      <TitleWithSubText title={title} subText={subText} />
      {children}
    </div>
  );
}
