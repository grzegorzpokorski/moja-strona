import { ReactNode, ReactElement, FC } from "react";
import LinkNext from "next/link";

export type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  tabIndex?: number;
};

const Link: FC<LinkProps> = (props) => {
  const isInternal = props.href && (props.href.startsWith("#") || props.href.startsWith("/"));
  return isInternal ? (
    <LinkNext href={props.href}>
      <a {...props}>{props.children}</a>
    </LinkNext>
  ) : (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {props.children}
    </a>
  );
};

export default Link;
