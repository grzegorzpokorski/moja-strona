import Head from "../../components/Head";
import Services from "../../components/Services";
import BoxesList from "../../components/BoxesList";
import Section from "../../components/Section";
import Header from "../../components/Header";
import Main from "../../components/Main";
import MainHeader from "../../components/MainHeader";
import Link from "../../components/Link";
import Banner from "../../components/Banner";

import { offerList } from "../../data/content/offerList";
import { servicesList } from "../../data/content/servicesList";

import addressSeparator from "../../data/seo/addressSeparator";
import siteName from "../../data/seo/siteName";

const Offer = () => {
  return (
    <>
      <Head
        title={`Oferta ${addressSeparator} ${siteName}`}
        description={`Programuję strony internetowe, koduję szablony graficzne oraz przygotowuję projekty graficzne stron internetowych.`}
        contentType="website"
      />
      <MainHeader>
        <h1 className="sr-only">Oferta</h1>
        <Section bgColor="bg-whiteGreen" withMarginOnTop>
          <Header
            subtitle="Oferta"
            title="Poznaj moją ofertę"
            description={
              <p>
                Można być człowiekiem renesansu. Ja jednak staram się doskonalić w konkretnych specjalizacjach.
                Potrzebujesz nowoczesnej, ultra szybkiej{" "}
                <Link href="/oferta/tworzenie-stron-internetowych">strony strony internetowej</Link> aby zaistnieć w
                internecie? A może gotowy projekt graficzny czeka na{" "}
                <Link href="/oferta/kodowanie-projektow-graficznych">zakodowanie</Link>? Oferuję profesjonalne usługi,
                które pomogą Ci wkroczyć na szerokie wody internetu.
              </p>
            }
            centered
          />
          <BoxesList items={offerList} withMarginOnTop />
        </Section>
      </MainHeader>
      <Main>
        <Services services={servicesList} />
        <Banner
          title="Powierz realizację swojego projektu profesjonaliście!"
          description="Chętnie pomogę zrealizować Twój pomysł i przekuję go na wysokiej jakości produkt."
          buttons={[
            {
              label: "Skontaktuj się ze mną",
              href: "/kontakt",
              style: "white",
            },
          ]}
        />
      </Main>
    </>
  );
};

export default Offer;
