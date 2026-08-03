import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <Image
        className="landing-video"
        src="/images/new_landingpage.png"
        alt="Holy Fire — An American Fairytale"
        fill
        priority
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center">
        <span className="animate-bounce font-serif text-sm tracking-[0.3em] text-gold/90 uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
          Scroll to begin
        </span>
      </div>
    </div>
  );
}
