import socialIconsData from "../data/socialIconsData";

export default function SocialIcons() {
  return (
    <div className="flex space-x-4">
      {socialIconsData.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.svg}
        </a>
      ))}
    </div>
  );
}
