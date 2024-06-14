import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
export default function Home() {
  return (
    <div className="flex min-h-svh flex-col bg-champagne-light text-prussian-medium">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
