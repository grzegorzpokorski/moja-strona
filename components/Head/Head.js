import HeadTag from "next/head";
import usePermalink from "../../hooks/usePermalink";
import siteUrl from "../../data/seo/siteUrl";

const Head = (props) => {
  const permalink = usePermalink();
  // const robotsMeta =
  //   "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
  const robotsMeta = "noindex, nofollow";

  return (
    <HeadTag>
      <title>{props.title}</title>
      <meta key="description" name="description" content={props.description} />

      <meta key="robots" name="robots" content={robotsMeta} />
      <meta key="googlebot" name="googlebot" content={robotsMeta} />
      <meta key="bingbot" name="bingbot" content={robotsMeta} />

      <link key="canonical" rel="canonical" href={permalink} />
      <link rel="index" title="Strona główna" href={siteUrl} />
    </HeadTag>
  );
};

export default Head;
