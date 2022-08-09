import Dropdown from "./parts/Dropdown";
import Heading from "./parts/Heading";

type Props = {
  subtitle?: string;
  title: string;
  description?: JSX.Element;
  titleAsH1?: boolean;
  categories: string[];
  initialDropdownValue: string;
};

const HeaderWithSelectCategory = ({
  subtitle,
  title,
  description,
  titleAsH1,
  categories,
  initialDropdownValue,
}: Props) => {
  return (
    <header className={`flex flex-col lg:flex-row gap-6 lg:gap-20`}>
      <Heading
        title={title}
        subtitle={subtitle}
        description={description}
        titleAsH1={titleAsH1}
      />
      <Dropdown
        initialDropdownValue={initialDropdownValue}
        categories={categories}
      />
    </header>
  );
};

export default HeaderWithSelectCategory;
