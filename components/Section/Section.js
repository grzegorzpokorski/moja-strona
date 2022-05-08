const Section = ({ bgColor, children }) => {
  return (
    <section class={`py-16 md:py-24 ${bgColor ? bgColor : "bg-white"}`}>
      <div class="container px-3 mx-auto">{children}</div>
    </section>
  );
};

export default Section;
