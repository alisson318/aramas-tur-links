import Image from "next/image";
import Link from "next/link";
import WordRotate from "../word-rotate";
import { siteConfig } from "@/site.config";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <div className="relative size-[18px] shrink-0 overflow-hidden">
        <Image
          src="/imagens/logo-aramas-preta.png"
          alt="Aramas Tur"
          width={24}
          height={24}
          className="size-full object-contain block dark:hidden"
        />
        <Image
          src="/imagens/logo-aramas-branca.png"
          alt="Aramas Tur"
          width={24}
          height={24}
          className="size-full object-contain hidden dark:block"
        />
      </div>
      <WordRotate
        label={siteConfig.name}
        label2={siteConfig.tagline}
        style="font-medium whitespace-nowrap"
      />
    </Link>
  );
};

export default Logo;
