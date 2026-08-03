import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { StoryPageData } from "@/lib/pages";
import { useCurrentPage } from "@/lib/current-page-context";

export default function StoryPage({
  data,
  pageIndex,
}: {
  data: StoryPageData;
  pageIndex: number;
}) {
  const currentPage = useCurrentPage();
  const isActive = currentPage === pageIndex;
  const totalLines = data.paragraphs.reduce(
    (acc, p) => acc + p.split("\n").length,
    0
  );
  const isLong = totalLines > 12;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const block = blockRef.current;
    if (!wrapper || !block) return;

    const measure = () => {
      const available = wrapper.clientHeight;
      const natural = block.scrollHeight;
      setScale(natural > available ? Math.max(available / natural, 0.4) : 1);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(wrapper);
    observer.observe(block);
    return () => observer.disconnect();
  }, [data]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <Image
        src={data.background}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div
        aria-hidden
        className="absolute inset-y-0 w-[80%] sm:w-[62%] md:w-[55%]"
        style={{
          left: data.align === "left" ? 0 : "auto",
          right: data.align === "right" ? 0 : "auto",
          background:
            data.align === "left"
              ? "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0) 100%)"
              : "linear-gradient(to left, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div
        ref={wrapperRef}
        className={`absolute inset-0 flex items-center overflow-y-auto px-5 py-8 sm:px-14 sm:py-10 md:px-20 ${
          data.align === "left" ? "justify-start" : "justify-end"
        }`}
      >
        <div
          ref={blockRef}
          className={`flex max-w-3xl flex-col ${
            data.align === "right" ? "text-right" : "text-left"
          }`}
          style={{
            gap: `clamp(6px, ${isLong ? 1.8 : 2.6}vh, 28px)`,
            transform: `scale(${scale})`,
            transformOrigin: "center",
          }}
        >
          {data.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="whitespace-pre-line font-serif text-gold leading-[1.16] drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] transition-all duration-700 ease-out"
              style={{
                fontSize: `clamp(1rem, ${isLong ? 4.1 : 5.2}vh, 3rem)`,
                opacity: isActive ? 1 : 0,
                transform: isActive ? "translateY(0)" : "translateY(16px)",
                transitionDelay: isActive ? `${300 + i * 220}ms` : "0ms",
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
