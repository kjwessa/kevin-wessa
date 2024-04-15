type SocialIconProps = {
  name: string;
  url: string;
  svg: JSX.Element;
};

function SocialIcon({ name, url, svg }: SocialIconProps) {
  return (
    <a href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
      {svg}
    </a>
  );
}

export default SocialIcon;
