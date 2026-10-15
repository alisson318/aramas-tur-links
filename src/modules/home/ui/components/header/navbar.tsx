import Logo from "./logo";
import FlipLink from "@/components/flip-link";
import { ThemeSwitch } from "@/components/theme-toggle";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center gap-5 pb-3 px-4 relative">
        <Logo />
        <div className="hidden lg:flex gap-4">
          <FlipLink href="/">Sobre Nós</FlipLink>
          <FlipLink href="/roteiros">Roteiros</FlipLink>
          <FlipLink href="https://nossafrota.aramastur.com/">
            Nossa Frota
          </FlipLink>
        </div>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
