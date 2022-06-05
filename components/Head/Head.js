import HeadTag from "next/head";
import usePermalink from "../../hooks/usePermalink";
import siteUrl from "../../data/seo/siteUrl";
import siteName from "../../data/seo/siteName";
import getISOStringFromPublicationDate from "../../data/seo/getISOStringFromPublicationDate";

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

      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />

      <meta property="og:url" content={permalink} />
      <meta property="og:site_name" content={siteName} />

      <meta property="og:locale" content="pl_PL" />
      <meta property="og:type" content={props.contentType} />

      {props.contentType === "article" && (
        <>
          <meta
            property="article:author"
            content="https://www.linkedin.com/in/grzegorz-pokorski/"
          />
          <meta
            property="article:published_time"
            content={getISOStringFromPublicationDate(props.publicationDate)}
          />
        </>
      )}

      <link rel="index" title="Strona główna" href={siteUrl} />

      <meta
        property="og:image"
        content={`${siteUrl}${
          props.featuredImage
            ? props.featuredImage
            : "/images/default-og-image.jpg"
        }`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />

      <meta name="twitter:card" content="summary_large_image" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </HeadTag>
  );
};

export default Head;
