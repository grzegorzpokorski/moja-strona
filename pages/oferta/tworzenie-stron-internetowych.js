import MainHeader from "../../components/MainHeader";
import Main from "../../components/Main";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import Section from "../../components/Section";
import Header from "../../components/Header";
import BoxesList from "../../components/BoxesList";
import ContentWithImage from "../../components/ContentWithImage";
import Link from "../../components/Link";

import heroImage from "../../public/images/pages.webp";
import logosImage from "../../public/images/logos.webp";
import { pageFeatures } from "../../data/content/pageFeatures";

const Pages = () => {
  return (
    <>
      <MainHeader />
      <Main withMarginTop>
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
          image={{ src: heroImage, alt: "człowieczek koduje na sofie" }}
        />
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

export default Pages;
