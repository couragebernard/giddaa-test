import BackToTopButton from "../components/neutral/buttons/BackToTopButton";
import Hero from "./_neutral/_sections/Hero";
import Header from "./_neutral/header/Header";



export default function Home() {
  return (
    <section>
      <Header />
      <section>
        <Hero />
      </section>

      <BackToTopButton />
    </section>
  );
}
