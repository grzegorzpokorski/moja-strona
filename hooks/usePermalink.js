import { useRouter } from "next/router";
import siteUrl from "../data/seo/siteUrl";

const usePermalink = () => {
  const router = useRouter();
  const { asPath: path } = router;

  if (path === "/") {
    return siteUrl;
  } else {
    return `${siteUrl}${path}`;
  }
};

export default usePermalink;
