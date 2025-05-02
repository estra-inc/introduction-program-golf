export type TitleWithSubTitleProps = {
  title: string;
  subTitle: string;
};

export default function TitleWithSubTitle({
  title,
  subTitle,
}: TitleWithSubTitleProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl text-gray-500">{subTitle}</p>
    </div>
  );
}