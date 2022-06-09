import Head from "../components/Head";
import MainHeader from "../components/MainHeader";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Link from "next/link";

import addressSeparator from "../data/seo/addressSeparator";
import siteName from "../data/seo/siteName";
import heroImage from "../public/images/contact.png";

const Contact = () => {
  return (
    <>
      <Head
        title={`Kontakt ${addressSeparator} ${siteName}`}
        description={`Jeśli interesuje Cię współpraca lub po prostu chcesz pogadać, to tutaj znajdziesz kontakt do mnie!`}
        contentType="website"
      />
      <MainHeader>
        <Hero
          title="Kontakt"
          description={
            <>
              <p>
                Jeśli interesuje Cię współpraca lub po prostu chcesz pogadać,
                nie bój się napisać na mojego maila:
              </p>
              <p>
                <Link
                  href="mailto:mr.pokorski@gmail.com"
                  className="text-white"
                >
                  mr.pokorski@gmail.com
                </Link>
              </p>
              <p>
                Vestibulum ultricies eu tortor elementum congue. Nunc ut
                consectetur ante, luctus dapibus urna. Vivamus hendrerit tempus
                tortor. Nulla accumsan consequat nibh sed eleifend. Nunc sed
                nisl ultricies.
              </p>
              <p>
                semper odio convallis, tempor eros. Praesent laoreet vulputate
                sapien, at pellentesque dolor eleifend quis. Curabitur
                hendrerit, elit ac dignissim tristique, erat lacus eleifend
                lorem, nec tempus ipsum felis at enim.
              </p>
            </>
          }
          image={{
            src: heroImage,
            alt: "mężczyzna czekający siedzący z laptopem na kolanach",
          }}
          withMarginOnTop
        />
      </MainHeader>
      <Main></Main>
    </>
  );
};

export default Contact;
