import Image from "next/image";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";

import Graphic from "@/components/graphic";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getExternalLinkProps } from "@/lib/utils";

interface NavigationCardProps {
  title: string;
  image: string;
  href: string;
  sizes: string;
}

const NavigationCard = ({ title, image, href, sizes }: NavigationCardProps) => {
  return (
    <Link
      href={href}
      {...getExternalLinkProps(href)}
      className="w-full relative group cursor-pointer"
    >
      <AspectRatio
        ratio={0.75 / 1}
        className="overflow-hidden rounded-lg relative"
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-300 ease-out lg:group-hover:scale-105"
        />
      </AspectRatio>

      <div className="absolute top-0 left-0 z-20 max-w-[92%]">
        <div className="relative bg-background rounded-br-[18px]">
          <div className="pt-2 px-4 pb-3 overflow-hidden">
            <div className="text-sm font-light flex items-center">
              <p className="max-w-[11rem] leading-snug sm:max-w-[14rem]">
                {title}
              </p>
              <div className="w-0 group-hover:w-[24px] transition-[width] duration-300 ease-out overflow-hidden">
                <PiArrowRight size={14} className="ml-2 shrink-0" />
              </div>
            </div>
          </div>

          <div className="absolute size-[18px]">
            <Graphic />
          </div>
          <div className="absolute size-[18px] top-0 -right-[18px]">
            <Graphic />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NavigationCard;
