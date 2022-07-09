import Head from "../components/Head";
import MainHeader from "../components/MainHeader";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Link from "../components/Link";

import addressSeparator from "../data/seo/addressSeparator";
import siteName from "../data/seo/siteName";
import heroImage from "../public/images/contact.webp";

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
                Jeśli interesuje Cię współpraca lub po prostu chcesz zadać
                pytanie, nie bój się napisać na mojego maila:
              </p>
              <p>
                <Link
                  href="mailto:mr.pokorski@gmail.com"
                  className="font-medium"
                >
                  mr.pokorski@gmail.com
                </Link>
              </p>
              <p>
                Zachęcam do zapozniana się z{" "}
                <Link href="/czesto-zadawane-pytania">
                  najczęściej zadawanymi pytaniami
                </Link>
                , gdzie być może znajdziesz odpowiedz na swoje pytanie.
              </p>
            </>
          }
          image={{
            src: heroImage,
            alt: "mężczyzna siedzący z laptopem na kolanach",
          }}
          withMarginOnTop
        />
      </MainHeader>
      <Main></Main>
    </>
  );
};

export default Contact;
