type Props = {
  message: string;
  name: string;
};

export const Error = ({ message, name }: Props) => {
  return (
    <p className="text-sm text-red-400 mt-2" id={`${name}-hint`}>
      {message}
    </p>
  );
};
