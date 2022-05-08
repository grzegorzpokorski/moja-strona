import Section from "../Section";
import Header from "../Header";
import List from "./parts/List";

const OfferList = ({
  items,
  subtitle,
  title,
  description,
  withMarginTop,
  bgColor,
}) => {
  return (
    <Section bgColor={bgColor}>
      <Header
        subtitle={subtitle}
        title={title}
        description={description}
        centered
      />
      <List items={items} withMarginTop={withMarginTop} />
    </Section>
  );
};

export default OfferList;
