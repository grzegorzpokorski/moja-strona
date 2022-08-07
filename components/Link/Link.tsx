import { ReactNode } from "react";
import LinkNext from "next/link";

type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const Link = ({ href, children, className }: LinkProps) => {
  const isInternal = href && (href.startsWith("#") || href.startsWith("/"));

  return isInternal ? (
    <LinkNext href={href}>
      <a {...{ href, className }}>{children}</a>
    </LinkNext>
  ) : (
    <a target="_blank" rel="noopener noreferrer" {...{ href, className }}>
      {children}
    </a>
  );
};

export default Link;
