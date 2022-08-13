type MdxImageProps = {
  alt?: string;
  src: string;
  height?: number;
};

const MdxImage = ({ alt, src }: MdxImageProps) => {
  return <img src={src} alt={alt} loading="lazy" decoding="async" />;
};

export default MdxImage;
