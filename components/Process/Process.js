import Header from "../Header";
import Section from "../Section";
import StepItem from "./parts/StepItem";

const Process = ({ header, steps, bgColor }) => {
  return (
    <Section bgColor={bgColor}>
      <Header
        title={header.title}
        subtitle={header.subtitle}
        description={header.description}
        centered
      />
      <ul className="flex flex-col gap-6 md:gap-0 mt-16 lg:mt-24 process">
        {steps &&
          steps.map((step, i) => (
            <StepItem key={`${i} ${step.title}`} {...step} />
          ))}
      </ul>
    </Section>
  );
};

export default Process;
