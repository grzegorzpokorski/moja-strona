type MdxImageProps = {
  alt?: string;
  src: string;
  height?: number;
};

export const Image = ({ alt, src }: MdxImageProps) => {
  return <img src={src} alt={alt} width="100%" loading="lazy" decoding="async" />;
};
