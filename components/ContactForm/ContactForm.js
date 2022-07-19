import Link from "../Link";

const ContactForm = () => {
  return (
    <form className="bg-white shadow-md rounded-md px-8 py-10 border-2 border-greenLight">
      <div className="w-full mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Imie *
        </label>
        <input
          className="text-sm appearance-none border-2 border-gray-200 focus:border-green rounded w-full py-3 px-4 text-gray-600 focus:outline-none focus:shadow-outline bg-whiteGreen focus:bg-white transition duration-200"
          id="name"
          type="text"
          placeholder="Imie"
          aria-required="true"
          aria-invalid="false"
          required
        />
      </div>
      <div className="w-full mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="surrname"
        >
          Nazwisko *
        </label>
        <input
          className="text-sm appearance-none border-2 border-gray-200 focus:border-green rounded w-full py-3 px-4 text-gray-600 focus:outline-none focus:shadow-outline bg-whiteGreen focus:bg-white transition duration-200"
          id="surrname"
          type="text"
          placeholder="Nazwisko"
          aria-required="true"
          aria-invalid="false"
          required
        />
      </div>
      <div className="w-full mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Adres email *
        </label>
        <input
          className="text-sm appearance-none border-2 border-gray-200 focus:border-green rounded w-full py-3 px-4 text-gray-600 focus:outline-none focus:shadow-outline bg-whiteGreen focus:bg-white transition duration-200"
          id="email"
          type="email"
          placeholder="Adres email"
          aria-required="true"
          aria-invalid="false"
          required
        />
      </div>
      <div className="w-full mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="message"
        >
          Treść wiadomości / opis projektu
        </label>
        <textarea
          className="text-sm appearance-none border-2 border-gray-200 focus:border-green rounded w-full h-36 lg:h-48 py-3 px-4 text-gray-600 focus:outline-none focus:shadow-outline bg-whiteGreen focus:bg-white transition duration-200"
          id="message"
          type="text"
          placeholder="Treść wiadomości / opis projektu"
        />
      </div>
      <div className="flex items-center  mb-6">
        <input
          id="gdpr"
          type="checkbox"
          className="w-4 h-4 rounded border-green focus:ring-green focus:ring-2 accent-green"
          aria-required="true"
          aria-invalid="false"
          required
        />
        <label htmlFor="gdpr" className="ml-2 text-sm text-gray-500">
          Wyrażam zgodę na przechowywanie przez tę witrynę przesłanych przeze
          mnie informacji, w celu związanym z odpowiedzią na moje zapytanie. Aby
          dowiedzieć się więcej, odwiedź{" "}
          <Link href={"/"} className="text-green hover:underline">
            politykę prywatności
          </Link>
          .
        </label>
      </div>
      <button
        className="inline-flex transition-colors border-2 rounded px-4 md:px-6 py-2 md:py-3 text-base bg-green hover:bg-greenHover text-white border-green"
        type="submit"
      >
        Wyśli wiadomość
      </button>
    </form>
  );
};

export default ContactForm;
