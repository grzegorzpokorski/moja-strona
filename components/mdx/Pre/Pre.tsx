import { ReactNode } from "react";

type Props = {
  className: string;
  children: ReactNode;
};

export const Pre = ({ className, children }: Props) => {
  return (
    <pre>
      <code className={className}>{children}</code>
    </pre>
  );
};
