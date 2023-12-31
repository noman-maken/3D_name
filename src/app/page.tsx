import { Suspense } from "react";
import Experience from "~/components/Experience";

export default function Home() {
  return (
    <main>
      <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center overflow-hidden bg-black">
        <Suspense
          fallback={
            <p className="animate-pulse text-3xl uppercase text-white">
              loading...
            </p>
          }
        >
          <Experience />
        </Suspense>
      </div>
      <div className="flex justify-center">
        <div className="fixed bottom-0 flex w-max flex-col gap-1 p-4 text-white antialiased md:right-0">
          <div>
            <a
              href="https://www.itsolp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Noman Maken - Creative Developer
            </a>
          </div>
          <div className=" flex items-center justify-between">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent transition-all hover:border-white"
            >
              ➥ Twitter
            </a>
            <a
              href="https://github.com/noman-maken"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent transition-all hover:border-white"
            >
              ➥ Github
            </a>
            <a
              href="https://pk.linkedin.com/in/muhammad-noman-aslam-maken-2ab81b178"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent transition-all hover:border-white"
            >
              ➥ Linkedin
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
