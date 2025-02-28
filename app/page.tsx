import { neutralMenuItems } from "@/lib/utils";
import BackToTopButton from "../components/neutral/buttons/BackToTopButton";
import Hero from "./_neutral/_sections/Hero";
import Header from "./_neutral/header/Header";
import MobileHeader from "./_neutral/header/MobileHeader";



export default function Home() {
  return (
    <section>
      <div className="hidden lg:block">
      <Header />
      </div>
      <div className="lg:hidden">
      <MobileHeader menu={neutralMenuItems} />
      </div>
      
      <section>
        <Hero />
      </section>

      <BackToTopButton />
    </section>
  );
}
