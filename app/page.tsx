import Image from "next/image";
import HomeDock from "./homeDock";
import HomeGlobe from "./homeGlobe";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-5">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-md lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-200 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          👋 Hello
        </p>

      </div>

      <HomeGlobe />
      <HomeDock />
    </main>
  );
}
