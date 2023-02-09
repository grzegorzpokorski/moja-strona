import Image from "next/image";
import { Head } from "../components/Head/Head";
import { Section } from "../components/Section/Section";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { MainHeader } from "../components/MainHeader/MainHeader";
import { Link } from "../components/Link/Link";
import { Banner } from "../components/Banner/Banner";
import { ContactForm } from "../components/ContactForm/ContactForm";

import addressSeparator from "../data/seo/addressSeparator";
import siteName from "../data/seo/siteName";

import image from "../public/images/contact.webp";
import { SocialMenu } from "../components/Footer/parts/SocialMenu";
import socialMenu from "../data/menu/socialMenu";

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
        <Section bgColor="bg-whiteGreen" id="kontakt">
          <Header
            subtitle="Kontakt"
            title="Porozmawiajmy o Twoich potrzebach"
            description={
              <>
                <p>
                  Jeśli interesuje Cię współpraca lub po prostu chcesz zadać pytanie, nie bój się
                  napisać na mojego maila:{" "}
                  <Link href="mailto:mr.pokorski@gmail.com" className="font-medium">
                    mr.pokorski@gmail.com
                  </Link>{" "}
                  lub skorzystać z formularza kontaktowego. Zachęcam do zapoznania się z{" "}
                  <Link href="/czesto-zadawane-pytania">najczęściej zadawanymi pytaniami</Link>,
                  gdzie być może znajdziesz odpowiedź na swoje pytanie.
                </p>
                <ul className="list-none flex flex-row grow basis-0 gap-4 text-green justify-center md:order-3 text-lg p-0 [&>li]:mt-5">
                  <SocialMenu items={socialMenu} />
                </ul>
              </>
            }
            centered
            titleAsH1
            customClasses={`pb-16 md:pb-24`}
          />
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="w-full lg:w-1/2">
              <ContactForm />
            </div>
            <picture className="w-full lg:w-1/2">
              <Image
                src={image}
                alt="Zadowolony mężczyzna siedzi korzystając z laptopa"
                height={image.height}
                width={image.width}
                sizes="(max-width: 960px) 100vw, 50vh"
                className="max-w-full h-auto"
              />
            </picture>
          </div>
        </Section>
        <Banner
          title="Powierz realizację swojego projektu profesjonaliście!"
          description="Chętnie pomogę zrealizować Twój pomysł i przekuję go na wysokiej jakości produkt."
          buttons={[
            {
              label: "Zobacz ofertę",
              href: "/oferta",
              style: "white",
            },
          ]}
        />
      </Main>
    </>
  );
};

export default Pricing;
