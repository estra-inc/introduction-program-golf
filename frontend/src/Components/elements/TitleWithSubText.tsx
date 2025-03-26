export type TitleWithSubTextProps = {
  title: string;
  subText: string;
};

export default function TitleWithSubText({
  title,
  subText,
}: TitleWithSubTextProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl text-gray-500">{subText}</p>
    </div>
  );
}
