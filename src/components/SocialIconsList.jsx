import socialIconsData from "../data/socialIconsData";
import SocialIcon from "./SocialIcon";

export default function SocialIconsList() {
  return (
    <div className="flex gap-2 pt-4 text-prussian-medium hover:text-prussian-dark">
      {socialIconsData.map((icon) => {
        return (
          <SocialIcon
            key={icon.id}
            id={icon.id}
            name={icon.name}
            url={icon.url}
            svg={icon.svg}
          />
        );
      })}
    </div>
  );
}
