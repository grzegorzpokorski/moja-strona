import Image from "next/image";
import Head from "../components/Head";
import Section from "../components/Section";
import Header from "../components/Header";
import Main from "../components/Main";
import MainHeader from "../components/MainHeader";
import Link from "../components/Link";
import Banner from "../components/Banner";

import addressSeparator from "../data/seo/addressSeparator";
import siteName from "../data/seo/siteName";

import image from "../public/images/contact.webp";

const Pricing = () => {
  return (
    <>
      <Head
        title={`Kontakt ${addressSeparator} ${siteName}`}
        description={`Jeśli interesuje Cię współpraca lub po prostu chcesz pogadać, to tutaj znajdziesz kontakt do mnie!`}
        contentType="website"
      />
      <MainHeader />
      <Main withMarginOnTop>
        <Section bgColor="bg-whiteGreen">
          <Header
            subtitle="Kontakt"
            title="Porozmawiajmy o Twoich potrzebach"
            description={
              <>
                <p>
                  Jeśli interesuje Cię współpraca lub po prostu chcesz zadać
                  pytanie, nie bój się napisać na mojego maila:{" "}
                  <Link
                    href="mailto:mr.pokorski@gmail.com"
                    className="font-medium"
                  >
                    mr.pokorski@gmail.com
                  </Link>{" "}
                  lub skorzystać z formularza kontaktowego. Zachęcam do
                  zapoznania się z{" "}
                  <Link href="/czesto-zadawane-pytania">
                    najczęściej zadawanymi pytaniami
                  </Link>
                  , gdzie być może znajdziesz odpowiedz na swoje pytanie.
                </p>
              </>
            }
            centered
            titleAsH1
            customClasses={`pb-16 md:pb-24`}
          />
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2">{/* <ContactForm /> */}</div>
            <picture className="w-full lg:w-1/2">
              <Image src={image} alt={image.alt} />
            </picture>
          </div>
        </Section>
        <Banner
          title="Zbuduj swoją ultra szybką stronę internetową ze mną!"
          description="Chętnie pomogę zrealizować Twój projekt."
          buttons={[
            {
              label: "Skontaktuj się ze mną",
              href: "/kontakt",
              style: "white",
            },
            {
              label: "Zobacz ofertę",
              href: "/oferta",
              style: "transparentWhite",
            },
          ]}
        />
      </Main>
    </>
  );
};

export default Pricing;
