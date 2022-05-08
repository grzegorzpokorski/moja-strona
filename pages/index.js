import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <a
        href="#tresc"
        class="fixed py-4 px-8 m-4 bg-gray-500 text-white skip-link"
      >
        Przejdź do treści
      </a>
      <Header isHome logoAsTitle />
      <main id="tresc" className="mt-[4.375rem] lg:mt-36"></main>
      <Footer isHome />
    </>
  );
};

export default Home;
