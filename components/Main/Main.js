const Main = ({ children, withMarginTop }) => {
  return withMarginTop ? (
    <main id="tresc" className="mt-[4.375rem] lg:mt-36">
      {children}
    </main>
  ) : (
    <main id="tresc">{children}</main>
  );
};

export default Main;
