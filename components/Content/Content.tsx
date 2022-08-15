import { ReactNode } from "react";

type ContentProps = {
  columns?: 1 | 2 | 3;
  content: ReactNode;
  withSpaceAbove?: boolean;
};

const Content = ({ columns, content, withSpaceAbove }: ContentProps) => {
  console.log();
  return columns ? (
    <div
      className={`w-full prose dark:prose-invert max-w-none gap-8 ${
        withSpaceAbove ? "mt-8 md:mt-12" : ""
      } content content--col-${columns}`}
    >
      {content}
    </div>
  ) : (
    <div
      className={`w-full prose max-w-none gap-8 ${
        withSpaceAbove ? "mt-8 md:mt-12" : ""
      }`}
    >
      {content}
    </div>
  );
};

export default Content;
