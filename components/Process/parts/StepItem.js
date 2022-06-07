const StepItem = ({ title, content }) => {
  return (
    <li className="flex flex-row justify-end md:even:justify-start process__item">
      <article className="w-10/12 md:w-5/12 flex flex-col gap-3 bg-white drop-shadow-md p-8">
        <header className="flex flex-row gap-3 process__header">
          <span className="font-bold text-green text-lg process__counter"></span>
          <h3 className="font-bold text-lg">{title}</h3>
        </header>
        <p>{content}</p>
      </article>
    </li>
  );
};

export default StepItem;