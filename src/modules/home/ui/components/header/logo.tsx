import Image from "next/image";
import Link from "next/link";
import WordRotate from "../word-rotate";
import { siteConfig } from "@/site.config";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex gap-2 items-center text-white transition-opacity hover:opacity-80"
    >
      <div className="relative size-[18px] shrink-0">
        <Image
          src="/imagens/logo-aramas-branca.png"
          alt="Aramas Tur"
          width={24}
          height={24}
          className="size-full origin-center object-contain scale-150"
        />
      </div>
      <WordRotate
        label={siteConfig.name}
        label2={siteConfig.tagline}
        style="font-medium whitespace-nowrap text-white"
      />
    </Link>
  );
};

export default Logo;
