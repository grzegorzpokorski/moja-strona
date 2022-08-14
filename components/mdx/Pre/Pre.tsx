import { ReactNode } from "react";

type Props = {
  className: string;
  children: ReactNode;
};

const MdxPre = ({ className, children }: Props) => {
  return (
    <pre>
      <code className={className}>{children}</code>
    </pre>
  );
};

export default MdxPre;
