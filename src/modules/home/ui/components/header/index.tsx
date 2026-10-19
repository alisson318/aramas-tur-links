import Graphic from "../../../../../components/graphic";
import MobileMenuButton from "./mobile-menu-button";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header
      className="fixed left-3 z-50 bg-[#00518f] text-white rounded-br-[18px]"
      style={{ top: "calc(env(safe-area-inset-top, 0px) + 12px)" }}
    >
      <div className="relative">
        <Navbar />

        {/* MOBILE TOP BAR — original full-width safe-area fill */}
        <div
          className="fixed top-0 left-0 w-full bg-[#00518f] block lg:hidden"
          style={{ height: "calc(env(safe-area-inset-top, 0px) + 12px)" }}
        />

        {/* DESKTOP ONLY: fill top gap above header + right decorative curve */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-3 -right-[18px] hidden bg-[#00518f] lg:block"
          style={{
            top: "calc(-1 * (env(safe-area-inset-top, 0px) + 12px))",
            height: "calc(env(safe-area-inset-top, 0px) + 12px)",
          }}
        />
        {/* DESKTOP ONLY: fill left gap beside the header */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-3 top-0 bottom-0 hidden w-3 bg-[#00518f] lg:block"
        />

        <div className="absolute left-0 -bottom-[18px] size-[18px]">
          <Graphic fillClassName="fill-[#00518f]" />
        </div>

        <div className="absolute top-0 -right-[18px] size-[18px]">
          <Graphic fillClassName="fill-[#00518f]" />
        </div>
      </div>

      <MobileMenuButton />
    </header>
  );
};

export default Header;
