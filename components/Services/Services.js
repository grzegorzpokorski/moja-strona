import ContentWithImage from "../ContentWithImage";

const Services = ({ services }) => {
  return (
    <>
      {services &&
        services.map((item, i) =>
          i % 2 ? (
            <ContentWithImage
              key={item.title}
              {...item}
              bgColor="bg-whiteGreen"
            />
          ) : (
            <ContentWithImage key={item.title} {...item} reverse />
          )
        )}
    </>
  );
};

export default Services;
