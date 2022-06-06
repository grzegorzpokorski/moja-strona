const MdxImage = (props) => {
  return (
    <img src={props.src} alt={props.alt} loading="lazy" decoding="async" />
  );
};

export default MdxImage;
