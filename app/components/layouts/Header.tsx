
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" w-11/12 max-w-screen-xl m-auto rounded-full fixed z-50 top-0 left-1/2 top-4 -translate-x-1/2 flex w-full h-12 justify-between items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pr-8 pl-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
      {/* lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 */}
      <h1 className="font-mono font-bold text-2xl">
          <Link className="w-20" href="/">MOTOKI&nbsp;TAKADA</Link>
        
      </h1>
      <nav className="w-1/3 flex justify-between">
        <div className="">
          <Link className="w-20" href="#works">WORKS</Link>
        </div>
        <div className="">
          <Link href="#about">ABOUT</Link>
        </div>
        <div className="">
          <Link href="#contact">CONTACT</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
