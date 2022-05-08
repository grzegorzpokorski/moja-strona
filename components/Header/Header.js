const Header = ({ subtitle, title, description, centered }) => {
  return (
    <header className="text-center w-full md:w-4/6 mx-auto flex flex-col gap-4">
      {subtitle && (
        <span className="text-green uppercase font-bold">{subtitle}</span>
      )}
      {title && (
        <h2 className="font-bold text-3xl md:text-4xl text-customGray">
          {title}
        </h2>
      )}
      {description && <p>{description}</p>}
    </header>
  );
};

export default Header;
