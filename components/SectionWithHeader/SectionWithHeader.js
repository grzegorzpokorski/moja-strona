import Section from "../Section";
import Header from "../Header";

const SectionWithHeader = ({
  bgColor,
  children,
  subTitle,
  title,
  description,
}) => {
  return (
    <Section bgColor={bgColor}>
      <Header
        subTitle={subTitle}
        title={title}
        description={description}
        centered
      />
      {children}
    </Section>
  );
};

export default SectionWithHeader;
