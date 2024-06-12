"use client"

import { SiDiscord, SiGithub } from "react-icons/si";
import DevtalkLogo from "./assets/DevtalkLogo";

export default function Home() {
  console.log("If you are looking at this, yes, I am doing a simple design for now. I will update this will a full design soon.");
  console.log("You can also contribute (if you will) at https://github.com/devtalk-my/devtalk-home");

  return (
    <div className="font-sans min-h-screen flex bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="flex flex-col justify-center text-center gap-8 relative lg:absolute z-10 bg-zinc-800 rounded-xl top-40 lg:right-40 py-12 px-10 lg:px-20 w-full max-w-3xl h-fit m-8 lg:m-0 shadow-lg bg-opacity-70 backdrop-blur-lg hover:bg-opacity-80 transition-all duration-500">
        <DevtalkLogo className="h-20 w-full fill-white" />
        <p className="text-balance text-lg">
          A Buzzing Hangout to Swap Code Secrets 💻 , Career Hacks 🕵️ , and Tech Savvy 👾 Over Virtual Brews ☕️
        </p>
        <div className="flex flex-row gap-8 items-center justify-center">
          <a href="https://invite.devtalk.club" target="_blank" rel="noopener noreferrer" className="outline-none hover:scale-125 focus-visible:scale-125 transition-transform">
            <SiDiscord className="h-8 w-8 fill-white" />
          </a>
          <a href="https://github.com/devtalk-my" target="_blank" rel="noopener noreferrer" className="outline-none hover:scale-125 focus-visible:scale-125 transition-transform">
            <SiGithub className="h-8 w-8 fill-white" />
          </a>
        </div>

        <div className="hidden">
          Thing need to be done:
          1. Brand guidelines
          2. About
        </div>
      </div>

      <footer className="fixed bottom-4 w-full flex items-center justify-center z-10">
        <div className="flex gap-2 items-center justify-center bg-white rounded-lg py-2 px-4 text-black">
          <p className="text-xs">Made with ❤️ by </p>
          <DevtalkLogo className="h-4 fill-brand w-fit" />
        </div>
      </footer>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/sound-of-silence.jpeg"
        alt="Sound of Silence"
        className="w-full h-full object-cover absolute"
      />
    </div>
  );
}
