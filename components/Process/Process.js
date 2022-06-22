import Header from "../Header";
import Section from "../Section";
import StepsList from "./parts/StepsList";

const Process = ({ header, steps, bgColor }) => {
  return (
    <Section bgColor={bgColor}>
      <Header
        title={header.title}
        subtitle={header.subtitle}
        description={header.description}
        centered
      />
      <StepsList steps={steps} />
    </Section>
  );
};

export default Process;
