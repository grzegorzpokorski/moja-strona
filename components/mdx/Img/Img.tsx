type MdxImageProps = {
  alt?: string;
  src: string;
  height?: number;
};

const MdxImage = ({ alt, src }: MdxImageProps) => {
  return (
    <img src={src} alt={alt} width="100%" loading="lazy" decoding="async" />
  );
};

export default MdxImage;
