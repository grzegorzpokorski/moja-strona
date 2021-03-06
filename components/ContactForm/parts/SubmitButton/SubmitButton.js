import React, { forwardRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCircleNotch,
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const SubmitButton = forwardRef(
  ({ sending, errorMessage, successMessage, ...props }, ref) => {
    return (
      <>
        <button
          className={`inline-flex items-center gap-2 transition-colors border-2 rounded px-4 md:px-6 py-2 md:py-3 text-base ${
            errorMessage
              ? "bg-red-400 border-red-400"
              : "bg-green hover:bg-greenHover border-green"
          } text-white disabled:cursor-not-allowed`}
          type="submit"
          {...{ ref, ...props }}
        >
          {sending === true ? (
            <>
              Wysyłanie
              <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" />
            </>
          ) : errorMessage ? (
            <>
              Wystąpił błąd. Spróbuj ponownie pózniej
              <FontAwesomeIcon icon={faCircleExclamation} />
            </>
          ) : successMessage ? (
            <>
              Wysłano
              <FontAwesomeIcon icon={faCircleCheck} className="animate-scale" />
            </>
          ) : (
            <>
              Wyślij wiadomość
              <FontAwesomeIcon icon={faPaperPlane} />
            </>
          )}
        </button>
      </>
    );
  }
);

SubmitButton.displayName = "SubmitButton";

export default SubmitButton;
