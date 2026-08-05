"use client";

import { useEffect, useRef } from "react";

export default function LandingPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.defaultMuted = true;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="landing-video pointer-events-none h-full w-full select-none"
        src="/videos/landingpage_video_v2.mp4"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center">
        <span className="animate-bounce font-serif text-sm tracking-[0.3em] text-gold/90 uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
          Scroll to begin
        </span>
      </div>
    </div>
  );
}
