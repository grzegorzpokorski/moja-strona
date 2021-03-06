const Section = ({ bgColor, children, withMarginOnTop, customClasses, id }) => {
  return (
    <section
      className={`py-16 md:py-24 ${bgColor ? bgColor : "bg-white"} ${
        withMarginOnTop ? "mt-20 lg:mt-28" : ""
      } ${customClasses ? customClasses : ""}`}
      id={id}
    >
      <div className="container px-3 mx-auto">{children}</div>
    </section>
  );
};

export default Section;
