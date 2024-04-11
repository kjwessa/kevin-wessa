import socialLinks from "../data/socialLinks";

export default function SocialIcons() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
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
