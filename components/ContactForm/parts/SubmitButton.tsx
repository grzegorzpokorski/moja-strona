import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCircleNotch,
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  sendingStatus: "initial" | "sending" | "sended" | "error";
};

const SubmitButton = ({ sendingStatus }: Props) => {
  return (
    <button
      className={`inline-flex items-center gap-2 transition-colors border-2 rounded px-4 md:px-6 py-2 md:py-3 text-base text-white dark:text-zinc-800 disabled:cursor-not-allowed ${
        sendingStatus && sendingStatus === "error"
          ? "bg-red-400 border-red-400"
          : "bg-green hover:bg-greenHover border-green"
      }`}
    >
      {sendingStatus && sendingStatus === "initial" && (
        <>
          Wyślij wiadomość
          <FontAwesomeIcon icon={faPaperPlane} />
        </>
      )}
      {sendingStatus && sendingStatus === "sending" && (
        <>
          Wysyłanie
          <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" />
        </>
      )}
      {sendingStatus && sendingStatus === "sended" && (
        <>
          Wysłano
          <FontAwesomeIcon icon={faCircleCheck} className="animate-scale" />
        </>
      )}
      {sendingStatus && sendingStatus === "error" && (
        <>
          Wystąpił błąd. Spróbuj ponownie pózniej
          <FontAwesomeIcon icon={faCircleExclamation} />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
