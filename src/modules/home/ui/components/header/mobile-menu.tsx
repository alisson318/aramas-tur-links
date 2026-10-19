"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Graphic from "../../../../../components/graphic";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { isValidUrl } from "@/lib/utils";
import { siteConfig } from "@/site.config";

interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Sobre Nós", href: "/" },
  { label: "Roteiros", href: "/roteiros" },
  { label: "Nossa Frota", href: "https://nossafrota.aramastur.com/" },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: Props) {
  const router = useRouter();

  const handleNavigation = (href: string) => {
    if (isValidUrl(href)) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      router.push(href);
    }
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 lg:hidden bg-[#00518f] p-3"
        >
          <div className="bg-[#00518f] h-full flex flex-col justify-between rounded-[18px] text-white">
            {/* Header */}
            <div className="relative p-6">
              {/* CLOSE BUTTON  */}
              <button
                onClick={onClose}
                className="fixed top-3 right-3 z-50 bg-white text-[#00518f] rounded-bl-[18px] cursor-pointer select-none transition-colors hover:bg-white/90"
              >
                <div className="relative pb-3 px-4">
                  <h1 className="text-sm font-light text-[#00518f]">Fechar</h1>
                  <Graphic
                    fillClassName="fill-white"
                    className="absolute -bottom-4 right-0 rotate-90"
                  />
                  <Graphic
                    fillClassName="fill-white"
                    className="absolute -left-4 top-0 rotate-90"
                  />
                </div>
              </button>

              <div className="flex gap-4 items-center">
                {/* AVATAR  */}
                <Avatar className="size-[60px]">
                  <AvatarImage src={siteConfig.avatar} alt="Avatar" />
                  <AvatarFallback>{siteConfig.initials}</AvatarFallback>
                </Avatar>

                {/* NAME  */}
                <div className="flex flex-col">
                  <h1 className="text-lg text-white">{siteConfig.name}</h1>
                  <p className="text-sm text-white/75">{siteConfig.role}</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="overflow-y-auto px-4 py-2 scrollbar-none">
              {menuItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className="w-full text-left p-4 rounded-xl mb-3 flex items-center justify-between bg-white/10 text-white text-sm transition-colors hover:bg-white/20"
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                  <ArrowRight size={18} />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
