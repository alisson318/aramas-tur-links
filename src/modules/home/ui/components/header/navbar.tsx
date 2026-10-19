import Logo from "./logo";
import FlipLink from "@/components/flip-link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center gap-5 pb-3 px-4 relative">
        <Logo />
        <div className="hidden lg:flex gap-4">
          <FlipLink
            href="/"
            className="text-white transition-colors hover:text-white/70"
          >
            Sobre Nós
          </FlipLink>
          <FlipLink
            href="/roteiros"
            className="text-white transition-colors hover:text-white/70"
          >
            Roteiros
          </FlipLink>
          <FlipLink
            href="https://nossafrota.aramastur.com/"
            className="text-white transition-colors hover:text-white/70"
          >
            Nossa Frota
          </FlipLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
