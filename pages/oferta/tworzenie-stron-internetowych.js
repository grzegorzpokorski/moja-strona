import Head from "../../components/Head";
import Hero from "../../components/Hero";
import Main from "../../components/Main";
import MainHeader from "../../components/MainHeader";
import Banner from "../../components/Banner";
import ContentWithImage from "../../components/ContentWithImage";
import Section from "../../components/Section";
import Header from "../../components/Header";
import BoxesList from "../../components/BoxesList";
import Process from "../../components/Process";

import heroImage from "../../public/images/pages.webp";
import logosImage from "../../public/images/logos.webp";
import { pageFeatures } from "../../data/content/pageFeatures";

import addressSeparator from "../../data/seo/addressSeparator";
import siteName from "../../data/seo/siteName";

const Offer = () => {
  return (
    <>
      <Head
        title={`Tworzenie stron internetowych ${addressSeparator} ${siteName}`}
        description={`Tworzenie stron ładujących się poniżej jeden sekundy w oparciu o najnowsze technologie.`}
        contentType="website"
      />
      <MainHeader>
        <Hero
          title="Tworzenie stron w oparciu o CMS WordPress"
          description={
            <>
              <p>
                Niepowtarzalne, indywidualnie przygotowywane, ultra szybkie
                strony internetowe z najpopularniejszym systemem zażądania
                treścią.
              </p>
            </>
          }
          image={{
            alt: "tworzenie strony na kanapie",
            src: heroImage,
          }}
          buttons={[
            {
              label: "Rozpocznijmy współpracę",
              href: "/kontakt",
              customClasses: "bg-green hover:bg-greenHover text-white",
            },
            {
              label: "Dowiedz się więcej",
              href: "/oferta",
              customClasses:
                "bg-white text-green hover:bg-greenHover hover:text-white border-2 border-green",
            },
          ]}
          withMarginOnTop
          titleAsH1
        />
      </MainHeader>
      <Main>
        <Section bgColor="bg-whiteGreen">
          <Header
            subtitle="Zalety"
            title="Czym wyróżniają się moje strony?"
            centered
          />
          <BoxesList items={pageFeatures} withMarginTop />
        </Section>
        <ContentWithImage
          subtitle="TECHNOLOGIE"
          title="Technologie, z których korzystam"
          content={
            <>
              <p>
                Do wykonania szczegółowych projektów graficznych witryn
                internetowych wykorzystuję&nbsp;<strong>Figmę</strong>
                &nbsp;oraz&nbsp;<strong>Adobe Phtoshop</strong>. Po zakończeniu
                tworzenia makiet witryny, wykorzystuje najnowszą,&nbsp;
                <strong>niezawodną dostępną technologię</strong>&nbsp;do
                przekształcenia jej w&nbsp;
                <strong>
                  funkcjonalną, wolną od błędów i responsywną stronę internetową
                </strong>
                .
              </p>
              <p>
                Do zaprogramowania oraz wdrożenia projektu wykorzystuję
                technologie takie jak:{" "}
                <strong>HTML5, CSS3, PHP7, Java Script ES6+</strong>, oraz
                praktyki:&nbsp;<strong>Mobile First, BEM</strong>. Wszystko to
                aby dostarczyć jak najlepszy jakościowo produkt.
              </p>
            </>
          }
          href="/kontakt"
          image={{
            src: logosImage,
            alt: "loga wykożystywanych przez mnie technologii",
          }}
          reverse
          bgColor
        />
        <Process
          header={{
            title: "Jak przebiega współpraca?",
            subtitle: "WSPÓŁPRACA",
            description:
              "Aenean sed accumsan dolor. Nunc blandit tristique suscipit. Sed at augue sit amet magna tempor ornare ac sed diam. Suspendisse purus sem, bibendum quis aliquam at",
          }}
          steps={[
            {
              title: "Brief",
              content:
                "Każdą współpracę zaczynam od szczególowego zbadania porzeb. Uważam że w dużej mierze pomyśla realizacja projektu musi zostać poprzedona wnikliną analiza wielu aspektów takich jak: cel witryny, stylistyka, grupa odbiorców, zakładane rezultaty czy cele biznesowe.",
            },
            {
              title: "Brief",
              content:
                "Każdą współpracę zaczynam od szczególowego zbadania porzeb. Uważam że w dużej mierze pomyśla realizacja projektu musi zostać poprzedona wnikliną analiza wielu aspektów takich jak: cel witryny, stylistyka, grupa odbiorców, zakładane rezultaty czy cele biznesowe.",
            },
            {
              title: "Brief",
              content:
                "Każdą współpracę zaczynam od szczególowego zbadania porzeb. Uważam że w dużej mierze pomyśla realizacja projektu musi zostać poprzedona wnikliną analiza wielu aspektów takich jak: cel witryny, stylistyka, grupa odbiorców, zakładane rezultaty czy cele biznesowe.",
            },
            {
              title: "Brief",
              content:
                "Każdą współpracę zaczynam od szczególowego zbadania porzeb. Uważam że w dużej mierze pomyśla realizacja projektu musi zostać poprzedona wnikliną analiza wielu aspektów takich jak: cel witryny, stylistyka, grupa odbiorców, zakładane rezultaty czy cele biznesowe.",
            },
            {
              title: "Brief",
              content:
                "Każdą współpracę zaczynam od szczególowego zbadania porzeb. Uważam że w dużej mierze pomyśla realizacja projektu musi zostać poprzedona wnikliną analiza wielu aspektów takich jak: cel witryny, stylistyka, grupa odbiorców, zakładane rezultaty czy cele biznesowe.",
            },
          ]}
        />
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

export default Offer;
