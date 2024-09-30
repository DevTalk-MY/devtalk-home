/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import DevtalkLogo from "../assets/DevtalkLogo";

const MediaKit = () => {
  return (
    <div className="font-sans h-screen overflow-scroll flex bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="flex flex-col text-center gap-4 relative lg:fixed z-10 bg-zinc-800 rounded-xl top-40 lg:right-40 py-12 px-10 lg:px-20 w-full max-w-3xl m-8 lg:m-0 shadow-lg bg-opacity-70 backdrop-blur-lg hover:bg-opacity-80 transition-all duration-500 max-h-[70%] overflow-scroll">
        <Link href="/">
          <DevtalkLogo className="h-20 w-full fill-white" />
        </Link>
        <h1 className="text-4xl font-bold">Media Kit</h1>
        <p>The story behind this logo will be told later, but for now, please, take this media kit in case you need it!</p>

        <Link href="/devtalk-logo.zip" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all">Download the media kit</Link>

        <hr className="opacity-20 my-4" />

        <h2 className="text-2xl font-bold">Logo</h2>
        <div className="flex flex-col gap-12 justify-center items-center">
          <div className="flex flex-row items-center gap-4">
            <img src="/media-kit/logo/logo-devtalk-primary.svg" alt="Devtalk Logo Primary" className="w-20 h-20 object-contain bg-zinc-400 rounded-lg p-4" />
            <div className="flex gap-4">
              <Link target="_blank" href="/media-kit/logo/logo-devtalk-primary.png" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                PNG
              </Link>
              <Link target="_blank" href="/media-kit/logo/logo-devtalk-primary.svg" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                SVG
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <img src="/media-kit/logo/logo-devtalk-light.svg" alt="Devtalk Logo Light" className="w-20 h-20 object-contain bg-zinc-400 rounded-lg p-4" />
            <div className="flex gap-4">
              <Link target="_blank" href="/media-kit/logo/logo-devtalk-light.png" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                PNG
              </Link>
              <Link target="_blank" href="/media-kit/logo/logo-devtalk-light.svg" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                SVG
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <img src="/media-kit/logo/logo-devtalk-dark.svg" alt="Devtalk Logo Dark" className="w-20 h-20 object-contain bg-zinc-400 rounded-lg p-4" />
            <div className="flex gap-4">
              <Link target="_blank" href="/media-kit/logo/logo-devtalk-dark.png" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                PNG
              </Link>
              <Link target="_blank" href="/media-kit/logo/logo-devtalk-dark.svg" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                SVG
              </Link>
            </div>
          </div>
        </div>

        <hr className="opacity-20 my-4" />

        <h2 className="text-2xl font-bold">Logo with Background</h2>
        <div className="flex flex-col gap-12 justify-center items-center">
          <div className="flex flex-row items-center gap-4">
            <img src="/media-kit/logo-with-bg/devtalk-primary-with-bg.svg" alt="Devtalk Logo with Background Primary" className="w-20 h-20 object-contain" />
            <div className="flex gap-4">
              <Link target="_blank" href="/media-kit/logo-with-bg/devtalk-primary-with-bg.png" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                PNG
              </Link>
              <Link target="_blank" href="/media-kit/logo-with-bg/devtalk-primary-with-bg.svg" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                SVG
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <img src="/media-kit/logo-with-bg/devtalk-light-with-bg.svg" alt="Devtalk Logo with Background Light" className="w-20 h-20 object-contain" />
            <div className="flex gap-4">
              <Link target="_blank" href="/media-kit/logo-with-bg/devtalk-light-with-bg.png" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                PNG
              </Link>
              <Link target="_blank" href="/media-kit/logo-with-bg/devtalk-light-with-bg.svg" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                SVG
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <img src="/media-kit/logo-with-bg/devtalk-dark-with-bg.svg" alt="Devtalk Logo with Background Dark" className="w-20 h-20 object-contain" />
            <div className="flex gap-4">
              <Link target="_blank" href="/media-kit/logo-with-bg/devtalk-dark-with-bg.png" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                PNG
              </Link>
              <Link target="_blank" href="/media-kit/logo-with-bg/devtalk-dark-with-bg.svg" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                SVG
              </Link>
            </div>
          </div>
        </div>

        <hr className="opacity-20 my-4" />

        <h2 className="text-2xl font-bold">Logo with Text</h2>
        <div className="flex flex-col gap-12 justify-center items-center">
          <div className="flex flex-row items-center gap-4">
            <img src="/media-kit/logo-with-text/devtalk-primary.svg" alt="Devtalk Logo with Text Primary" className="w-40 h-20 object-contain bg-zinc-400 py-2 px-6 rounded-lg" />
            <div className="flex gap-4">
              <Link target="_blank" href="/media-kit/logo-with-text/devtalk-primary.png" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                PNG
              </Link>
              <Link target="_blank" href="/media-kit/logo-with-text/devtalk-primary.svg" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                SVG
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <img src="/media-kit/logo-with-text/devtalk-light.svg" alt="Devtalk Logo with Text Light" className="w-40 h-20 object-contain bg-zinc-400 py-2 px-6 rounded-lg" />
            <div className="flex gap-4">
              <Link target="_blank" href="/media-kit/logo-with-text/devtalk-light.png" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                PNG
              </Link>
              <Link target="_blank" href="/media-kit/logo-with-text/devtalk-light.svg" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                SVG
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <img src="/media-kit/logo-with-text/devtalk-dark.svg" alt="Devtalk Logo with Text Dark" className="w-40 h-20 object-contain bg-zinc-400 py-2 px-6 rounded-lg" />
            <div className="flex gap-4">
              <Link target="_blank" href="/media-kit/logo-with-text/devtalk-dark.png" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                PNG
              </Link>
              <Link target="_blank" href="/media-kit/logo-with-text/devtalk-dark.svg" className="bg-white rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                SVG
              </Link>
            </div>
          </div>
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
        className="w-full h-full object-cover absolute bg-repeat"
      />
    </div>
  );
}

export default MediaKit;