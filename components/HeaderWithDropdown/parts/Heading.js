const Heading = ({ subtitle, title, description, titleAsH1 }) => {
  return (
    <div className={`w-full lg:w-8/12 flex flex-col gap-3`}>
      {subtitle && (
        <span className={`uppercase font-bold text-green`}>{subtitle}</span>
      )}
      {titleAsH1 ? (
        <h1 className={`font-bold text-3xl md:text-4xl text-customGray`}>
          {title}
        </h1>
      ) : (
        <h2 className={`font-bold text-2xl md:text-3xl text-customGray`}>
          {title}
        </h2>
      )}
      {description && <div className="prose max-w-none">{description}</div>}
    </div>
  );
};

export default Heading;
