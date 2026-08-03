"use client";

import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip-enhanced";
import LandingPage from "@/components/LandingPage";
import StoryPage from "@/components/StoryPage";
import { storyPages } from "@/lib/pages";
import { CurrentPageProvider } from "@/lib/current-page-context";

const FLIP_MS = 1000;
const WHEEL_THRESHOLD = 25;

type PageFlipInstance = {
  flipNext: () => void;
  flipPrev: () => void;
};

type FlipBookHandle = {
  pageFlip: () => PageFlipInstance;
};

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  function Page({ children }, ref) {
    return (
      <div ref={ref} className="relative h-full w-full overflow-hidden bg-black">
        {children}
      </div>
    );
  }
);

export default function PageFlipBook() {
  const pageCount = storyPages.length + 1;
  const bookRef = useRef<FlipBookHandle>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [size, setSize] = useState<{ width: number; height: number } | null>(
    null
  );
  const isAnimatingRef = useRef(false);
  const unlockTimer = useRef<number | undefined>(undefined);
  const currentIndexRef = useRef(0);
  const mountPageRef = useRef(0);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      mountPageRef.current = currentIndexRef.current;
      setSize({ width: el.clientWidth, height: el.clientHeight });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const unlock = useCallback(() => {
    isAnimatingRef.current = false;
    window.clearTimeout(unlockTimer.current);
  }, []);

  const handleFlip = useCallback(
    (event: { data: number }) => {
      setCurrentIndex(event.data);
      unlock();
    },
    [unlock]
  );

  const next = useCallback(() => {
    if (isAnimatingRef.current || currentIndex >= pageCount - 1) return;
    const pf = bookRef.current?.pageFlip();
    if (!pf) return;
    isAnimatingRef.current = true;
    unlockTimer.current = window.setTimeout(unlock, FLIP_MS + 400);
    pf.flipNext();
  }, [currentIndex, pageCount, unlock]);

  const prev = useCallback(() => {
    if (isAnimatingRef.current || currentIndex <= 0) return;
    const pf = bookRef.current?.pageFlip();
    if (!pf) return;
    isAnimatingRef.current = true;
    unlockTimer.current = window.setTimeout(unlock, FLIP_MS + 400);
    pf.flipPrev();
  }, [currentIndex, unlock]);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (Math.abs(event.deltaY) < WHEEL_THRESHOLD) return;
      if (event.deltaY > 0) next();
      else prev();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        next();
      }
      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        prev();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(unlockTimer.current);
    };
  }, [next, prev]);

  return (
    <div
      ref={containerRef}
      className="relative h-dvh w-dvw overflow-hidden bg-black"
    >
      <CurrentPageProvider value={currentIndex}>
        {size && (
          <HTMLFlipBook
            key={`${size.width}x${size.height}`}
            ref={bookRef}
            width={size.width}
            height={size.height}
            size="fixed"
            minWidth={size.width}
            maxWidth={size.width}
            minHeight={size.height}
            maxHeight={size.height}
            style={{}}
            startPage={mountPageRef.current}
            drawShadow
            flippingTime={FLIP_MS}
            usePortrait={false}
            startZIndex={10}
            autoSize={false}
            maxShadowOpacity={0.65}
            showCover={false}
            mobileScrollSupport={false}
            swipeDistance={40}
            clickEventForward={false}
            useMouseEvents
            showPageCorners
            disableFlipByClick
            singlePage
            renderOnlyPageLengthChange
            className="h-full w-full"
            onFlip={handleFlip}
          >
            <Page>
              <LandingPage />
            </Page>
            {storyPages.map((page, i) => (
              <Page key={page.id}>
                <StoryPage data={page} pageIndex={i + 1} />
              </Page>
            ))}
          </HTMLFlipBook>
        )}
      </CurrentPageProvider>

      <div className="pointer-events-none absolute bottom-6 right-6 z-50 flex items-center gap-2">
        {Array.from({ length: pageCount }, (_, i) => (
          <span
            key={i}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: i === currentIndex ? "1.5rem" : "0.375rem",
              backgroundColor:
                i === currentIndex ? "#e8c987" : "rgba(232, 201, 135, 0.32)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
