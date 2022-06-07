import StepItem from "./StepItem";

const StepsList = ({ steps }) => {
  return (
    <ul className="flex flex-col gap-6 md:gap-0 mt-16 lg:mt-24 process">
      {steps &&
        steps.map((step, i) => (
          <StepItem key={`${i} ${step.title}`} {...step} />
        ))}
    </ul>
  );
};

export default StepsList;
