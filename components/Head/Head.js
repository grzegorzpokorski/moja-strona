import HeadTag from "next/head";
import usePermalink from "../../hooks/usePermalink";

const Head = (props) => {
  const permalink = usePermalink();

  return (
    <HeadTag>
      <title>{props.title}</title>
      <meta key="description" name="description" content={props.description} />
      <link key="canonical" rel="canonical" href={permalink} />
    </HeadTag>
  );
};

export default Head;
