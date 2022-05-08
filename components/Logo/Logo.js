const Logo = ({ isHome, isTitle }) => {
  return (
    <a href={`${isHome ? "#" : "/"}`}>
      {isTitle ? (
        <h1 className="text-lg font-bold">
          <span className="text-green">Grzegorz </span>
          <span className="text-gray">Pokorski</span>
        </h1>
      ) : (
        <>
          <span className="text-lg font-bold text-green">Grzegorz </span>
          <span className="text-lg font-bold text-gray">Pokorski</span>
        </>
      )}
    </a>
  );
};

export default Logo;