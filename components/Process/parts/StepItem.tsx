import { StepItemType } from "../Process";
import styles from "../process.module.scss";

export const StepItem = ({ title, content }: StepItemType) => {
  return (
    <li className={`flex flex-row justify-end md:even:justify-start ${styles.item}`}>
      <article className="w-10/12 md:w-5/12 flex flex-col gap-3 bg-white drop-shadow-md p-8 border-2 border-greenLight rounded-md">
        <header className={`flex flex-row gap-3 ${styles.header}`}>
          <span className={`font-bold text-green text-lg ${styles.counter}`}></span>
          <h3 className="font-bold text-lg text-customGray">{title}</h3>
        </header>
        <div className="prose max-w-auto">{content}</div>
      </article>
    </li>
  );
};
