export default function Footer() {
  //* Update the copyright year
  const getCurrentYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <footer className="flex flex-row flex-wrap p-4">
      <p className="font-display flex-initial text-3xl font-medium">K/W</p>
      <p className="flex-auto content-center text-right text-sm">
        © Copyright {getCurrentYear()} Kevin Wessa. All rights reserved. Site
        by{" "}
        <a
          href="https://brewww.studio"
          className="hover:text-prussian-dark font-medium"
        >
          Brewww Studio
        </a>
      </p>
    </footer>
  );
}
