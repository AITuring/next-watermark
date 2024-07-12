import Globe from "@/components/magicui/globe";

export default function HomeGlobe() {

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Globe
        className="top-28"
      />
      {/* <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" /> */}
    </div>
  );
}
