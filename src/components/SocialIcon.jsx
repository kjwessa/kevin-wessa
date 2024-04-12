export default function SocialIcon({ name, url, svg }) {
  return (
    <a href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
      {svg}
    </a>
  );
}
