import Head from "../../components/Head";
import ContentWithImage from "../../components/ContentWithImage";
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
            title="W czym się specjalizuje?"
            description="Gdyby zachodziła konieczność przeprowadzenia zabiegu na otwartym sercu, powierzyłbyś swoje zdrowie i życie mechanikowi? Między innymi dlatego warto korzystać z usług specjalisty."
            centered
            titleAsH1
          />
        </Section>
      </MainHeader>
      <Main>
        <Section>
          <BoxesList
            items={offerList}
            subtitle="Oferta"
            title="W czym się specjalizuje?"
            description="Gdyby zachodziła konieczność przeprowadzenia zabiegu na otwartym sercu, powierzyłbyś swoje zdrowie i życie mechanikowi? Między innymi dlatego warto korzystać z usług specjalisty."
            bgColor="bg-whiteGreen"
          />
        </Section>
        {servicesList &&
          servicesList.map((item, i) =>
            i % 2 ? (
              <ContentWithImage
                key={item.title}
                {...item}
                bgColor="bg-whiteGreen"
              />
            ) : (
              <ContentWithImage key={item.title} {...item} reverse />
            )
          )}
      </Main>
    </>
  );
};

export default Offer;
