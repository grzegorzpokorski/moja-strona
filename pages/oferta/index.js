import MainHeader from "../../components/MainHeader";
import Main from "../../components/Main";
import BoxesList from "../../components/BoxesList";
import Banner from "../../components/Banner/Banner";
import ContentWithImage from "../../components/ContentWithImage/ContentWithImage";

import { offerList } from "../../data/content/offerList";
import { servicesList } from "../../data/content/servicesList";

const Oferta = () => {
  return (
    <>
      <MainHeader />
      <Main withMarginTop>
        <BoxesList
          items={offerList}
          subtitle="Oferta"
          title="W czym się specjalizuje?"
          description="Gdyby zachodziła konieczność przeprowadzenia zabiegu na otwartym sercu, powierzyłbyś swoje zdrowie i życie mechanikowi? Między innymi dlatego warto korzystać z usług specjalisty."
          withMarginTop
          bgColor="bg-whiteGreen"
        />
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
        <Banner
          title="Zbuduj swoją wysokiej klasy stronę internetową ze mną!"
          description="Chętnie pomogę zrealizować Twój projekt."
          buttons={[
            {
              label: "Skontaktuj się ze mną",
              href: "/kontakt",
              customClasses: "bg-white hover:bg-whiteGreen text-gray-800",
            },
            {
              label: "Poczytaj mój blog",
              href: "/blog",
              customClasses:
                "bg-transparent hover:bg-whiteGreen text-white hover:text-gray-800 border-2 border-white",
            },
          ]}
        />
      </Main>
    </>
  );
};

export default Oferta;
