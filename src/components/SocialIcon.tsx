type SocialIconProps = {
  name: string;
  url: string;
  svg: JSX.Element;
};

export function SocialIcon({ name, url, svg }: SocialIconProps) {
  return (
    <a href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
      {svg}
    </a>
  );
}
