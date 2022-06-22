const Item = ({ question, answer, open }) => {
  return (
    <details
      open={open}
      className={`bg-white shadow-md border-2 border-greenLight accordion`}
    >
      <summary
        className={`flex bg-white text-zinc-900 py-4 px-6 transition cursor-pointer accordion__title`}
      >
        <h3 className={`font-medium text-md`}>{question}</h3>
      </summary>
      <div className={`prose max-w-none py-4 px-6 accordion__content`}>
        {answer}
      </div>
    </details>
  );
};

export default Item;
