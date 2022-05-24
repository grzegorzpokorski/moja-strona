const Main = ({ children, withMarginOnTop }) => {
  return (
    <main id="tresc" className={`${withMarginOnTop ? "pt-20 lg:pt-28" : ""}`}>
      {children}
    </main>
  );
};

export default Main;
