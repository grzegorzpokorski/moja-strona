import Button from "../Button";
import { ButtonType } from "./../../types/button";

type BannerProps = {
  title: string;
  description?: string;
  buttons?: ButtonType[];
};

const Banner = ({ title, description, buttons }: BannerProps) => {
  return (
    <section className="py-24 bg-green">
      <div className="container px-3 mx-auto">
        <header className="w-full md:w-2/3 text-center mx-auto text-white flex flex-col gap-5">
          {title && <h2 className="text-3xl font-bold">{title}</h2>}
          {description && <p>{description}</p>}
          {buttons && (
            <div className="flex flex-row flex-wrap gap-2 justify-center items-center">
              {buttons.map((item, i) => (
                <Button key={`btn-${i}`} {...item} />
              ))}
            </div>
          )}
        </header>
      </div>
    </section>
  );
};

export default Banner;
