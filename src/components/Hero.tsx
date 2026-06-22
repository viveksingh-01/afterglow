import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!titleRef.current) return;

    gsap.to(titleRef.current, {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 60%",
        scrub: true,
      },
    });
  });
  return (
    <section className="pointer-events-none fixed top-0 left-0 flex h-screen w-full items-center justify-center">
      <h1 ref={titleRef} className="text-5xl font-extralight tracking-[90px] text-amber-300">
        AFTERGLOW
      </h1>
    </section>
  );
};

export default Hero;
