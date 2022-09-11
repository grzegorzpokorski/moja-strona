type Props = {
  subtitle?: string;
  title: string;
  description?: JSX.Element;
  titleAsH1?: boolean;
};

export const Heading = ({ subtitle, title, description, titleAsH1 }: Props) => {
  return (
    <div className={`w-full lg:w-8/12 flex flex-col gap-3`}>
      {subtitle && <span className={`uppercase font-bold text-green`}>{subtitle}</span>}
      {titleAsH1 ? (
        <h1 className={`font-bold text-3xl md:text-4xl text-customGray`}>{title}</h1>
      ) : (
        <h2 className={`font-bold text-2xl md:text-3xl text-customGray`}>{title}</h2>
      )}
      {description && <div className="prose max-w-none">{description}</div>}
    </div>
  );
};
