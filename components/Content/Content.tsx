import { ReactNode } from "react";
import cn from "classnames";
import styles from "./content.module.scss";

type ContentProps = {
  columns: 1 | 2 | 3 | 4;
  content: ReactNode;
  withSpaceAbove?: boolean;
};

export const Content = ({ columns, content, withSpaceAbove }: ContentProps) => {
  return columns ? (
    <div
      className={cn(
        "w-full prose max-w-none gap-8",
        { "mt-8 md:mt-12": withSpaceAbove },
        styles.content,
        styles[`col${columns}`],
      )}
    >
      {content}
    </div>
  ) : (
    <div className={cn("w-full prose max-w-none gap-8", { "mt-8 md:mt-12": withSpaceAbove })}>
      {content}
    </div>
  );
};
