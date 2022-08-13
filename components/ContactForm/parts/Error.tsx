type Props = {
  message: string;
};

const Error = ({ message }: Props) => {
  return <p className="text-sm text-red-400 mt-2">{message}</p>;
};

export default Error;
