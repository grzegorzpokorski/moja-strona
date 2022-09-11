import { ReactNode } from "react";
import { getIdFromString } from "../../helpers/functions/getIdFromString";
import { Header } from "../Header/Header";
import { Section } from "../Section/Section";
import { StepItem } from "./parts/StepItem";

export type StepItemType = {
  title: string;
  content: ReactNode;
};

type ProcessProps = {
  header: {
    title: string;
    subtitle: string;
    description: ReactNode;
  };
  steps: StepItemType[];
  bgColor?: "bg-white" | "bg-green" | "bg-whiteGreen";
};

export const Process = ({ header, steps, bgColor }: ProcessProps) => {
  return (
    <Section bgColor={bgColor} id={getIdFromString(header.title)}>
      <Header
        title={header.title}
        subtitle={header.subtitle}
        description={header.description}
        centered
      />
      <ul className="flex flex-col gap-6 md:gap-0 mt-16 lg:mt-24 process">
        {steps && steps.map((step, i) => <StepItem key={`${i} ${step.title}`} {...step} />)}
      </ul>
    </Section>
  );
};
