import Header from "../components/Header";

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
      <main id="tresc"></main>
      <Footer isHome />
    </>
  );
};

export default Home;
