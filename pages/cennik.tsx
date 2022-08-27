import Head from "../components/Head";
import Section from "../components/Section";
import Header from "../components/Header";
import Main from "../components/Main";
import MainHeader from "../components/MainHeader";
import Link from "../components/Link";
import Banner from "../components/Banner";
import PricingList from "../components/PricingList";

import addressSeparator from "../data/seo/addressSeparator";
import siteName from "../data/seo/siteName";

import { tworzenieStronInternetowychPricing } from "../data/content/pricing/tworzenieStronInternetowych";

const Pricing = () => {
  return (
    <>
      <Head
        title={`Oferta ${addressSeparator} ${siteName}`}
        description={`Programuję strony internetowe, koduję szablony graficzne oraz przygotowuję projekty graficzne stron internetowych.`}
        contentType="website"
      />
      <MainHeader />
      <Main withMarginOnTop>
        <Section bgColor="bg-whiteGreen" id="cennik">
          <Header
            subtitle="Cennik"
            title="Poznaj moje przystępne ceny"
            description={
              <>
                <p>
                  Poniżej znajdują się startowe ceny za konkretny typ projektu. Aby poznać dokładną wycenę, zachęcam do{" "}
                  <Link href="/kontakt">kontaktu</Link>.
                </p>
              </>
            }
            centered
            titleAsH1
          />
          <PricingList items={tworzenieStronInternetowychPricing} withMarginOnTop />
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
