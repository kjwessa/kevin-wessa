import socialIconsData from "@/data/socialIconsData";
import { SocialIcon } from "./SocialIcon";

type socialIconsData = {
  id: number;
  name: string;
  url: string;
  svg: JSX.Element;
};

type SocialIconsListProps = {
  filter?: string[];
};

export function SocialIconsList({ filter }: SocialIconsListProps) {
  // if a 'filter' prop is provided, use it to determine which icons to display
  const filteredIcons = filter
    ? // the 'filter' method creates a new array with all elements that pass the test
      socialIconsData.filter((icon: socialIconsData) =>
        filter.includes(icon.name),
      )
    : // if no 'filter' prop is provided, use the entire array of social icons
      socialIconsData;

  // the 'sort' method is used to order icons based on their id, lowest to highest
  const sortedIcons = filteredIcons.sort((a, b) => a.id - b.id);

  return (
    <div className="flex gap-2 pb-1 pt-4 text-prussian-medium hover:text-prussian-dark">
      {sortedIcons.map((icon: socialIconsData) => (
        <SocialIcon
          key={icon.id}
          name={icon.name}
          url={icon.url}
          svg={icon.svg}
        />
      ))}
    </div>
  );
}
