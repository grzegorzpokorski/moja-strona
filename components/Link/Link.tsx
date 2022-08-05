import { FC, ReactNode } from "react";
import LinkNext from "next/link";

type LinkType = {
  href: string;
  children: ReactNode;
  className?: string;
};

const Link: FC<LinkType> = ({ href, children, className }) => {
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
