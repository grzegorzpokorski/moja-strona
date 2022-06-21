import Head from "../../components/Head";
import Services from "../../components/Services";
import BoxesList from "../../components/BoxesList";
import Section from "../../components/Section";
import Header from "../../components/Header";
import Main from "../../components/Main";
import MainHeader from "../../components/MainHeader";

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
        <Section bgColor="bg-whiteGreen" withMarginOnTop>
          <Header
            subtitle="Oferta"
            title="Poznaj moją ofertę"
            description={
              <p>
                Można być człowiekiem renesansu. Ja jednak staram się doskonalić
                w konkretnych specjalizacjach. Potrzebujesz nowoczesnej, ultra
                szybkiej strony strony internetowej aby zaistnieć w internecie?
                A może gotowy projekt graficzny czeka na zakodowanie? Oferuję
                profesjonalne usługi, które pomogą Ci wkroczyć na szerokie wody
                internetu.
              </p>
            }
            centered
            titleAsH1
          />
        </Section>
      </MainHeader>
      <Main>
        <Section>
          <BoxesList items={offerList} />
        </Section>
        <Services services={servicesList} />
      </Main>
    </>
  );
};

export default Offer;
