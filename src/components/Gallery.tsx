import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { galleryData } from "../data/gallery";
import Image from "./Image";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {}, { scope: containerRef });

  return (
    <section ref={containerRef} className="grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden">
      {galleryData.map((item) => (
        <Image key={item.id} {...item} />
      ))}
    </section>
  );
}
