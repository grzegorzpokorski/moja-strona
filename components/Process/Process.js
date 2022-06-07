import Header from "../Header";
import Section from "../Section";
import StepsList from "./parts/StepsList";

const Process = ({ header, steps }) => {
  return (
    <Section>
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
