const Image = (props) => {
  return <img src={props.src} alt={props.alt} loading="lazy" />;
};

export default Image;
