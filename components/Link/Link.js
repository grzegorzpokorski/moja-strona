import LinkNext from "next/link";

const Link = (props) => {
  const href = props.href;
  const isInternal = href && (href.startsWith("#") || href.startsWith("/"));

  return isInternal ? (
    <LinkNext href={href}>
      <a {...props}>{props.children}</a>
    </LinkNext>
  ) : (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {props.children}
    </a>
  );
};

export default Link;
