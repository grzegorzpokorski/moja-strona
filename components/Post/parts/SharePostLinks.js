import Button from "../../Button";
import siteUrl from "../../../data/seo/siteUrl";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SharePostLinks = ({ slug, title }) => {
  const postUrl = `${siteUrl}/blog/${slug}`;

  return (
    <ul className={`list-none flex flex-wrap gap-3`}>
      <li>
        <Button
          href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
          label={
            <>
              <span className="sr-only">Udostepnij na Facebooku.</span>
              <FontAwesomeIcon icon={faFacebook} />
            </>
          }
          size="social"
        />
      </li>
      <li>
        <Button
          href={`https://twitter.com/intent/tweet?url=${postUrl}`}
          label={
            <>
              <span className="sr-only">Udostepnij na Twitterze.</span>
              <FontAwesomeIcon icon={faTwitter} />
            </>
          }
          size="social"
        />
      </li>
      <li>
        <Button
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}`}
          label={
            <>
              <span className="sr-only">Udostepnij na Linkedin.</span>
              <FontAwesomeIcon icon={faLinkedin} />
            </>
          }
          size="social"
        />
      </li>
      <li>
        <Button
          href={`mailto:?subject=${title}&body=${title}`}
          label={
            <>
              <span className="sr-only">Udostepnij emailem.</span>
              <FontAwesomeIcon icon={faEnvelope} />
            </>
          }
          size="social"
        />
      </li>
    </ul>
  );
};

export default SharePostLinks;
