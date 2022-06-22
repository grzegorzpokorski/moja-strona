import Head from "../components/Head";
import Section from "../components/Section";
import Header from "../components/Header";
import Main from "../components/Main";
import MainHeader from "../components/MainHeader";
import Link from "../components/Link";
import Accordion from "../components/Accordion";
import Banner from "../components/Banner";

import addressSeparator from "../data/seo/addressSeparator";
import siteName from "../data/seo/siteName";

import { faqs } from "../data/content/faqs";

const FAQ = () => {
  return (
    <>
      <Head
        title={`Oferta ${addressSeparator} ${siteName}`}
        description={`Programuję strony internetowe, koduję szablony graficzne oraz przygotowuję projekty graficzne stron internetowych.`}
        contentType="website"
      />
      <MainHeader />
      <Main withMarginOnTop>
        <Section bgColor="bg-whiteGreen">
          <Header
            subtitle="FAQ"
            title="Często zadawane pytania"
            description={
              <p>
                Tutaj znajdziesz odpowiedzi na najczęściej zadawwane pytania.
                Jeśli masz inne pytanie napisz do{" "}
                <Link href="/kontakt">napisz do mnie</Link>.
              </p>
            }
            centered
            titleAsH1
          />
          <Accordion items={faqs} withMarginOnTop />
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

export default FAQ;
