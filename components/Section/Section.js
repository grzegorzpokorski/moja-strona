const Section = ({ bgColor, children }) => {
  return (
    <section className={`py-16 md:py-24 ${bgColor ? bgColor : "bg-white"}`}>
      <div className="container px-3 mx-auto">{children}</div>
    </section>
  );
};

export default Section;
