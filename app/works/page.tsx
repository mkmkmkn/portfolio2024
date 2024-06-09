"use client";

import Image from "next/image";
import Background from "../components/layouts/Background";

export default function Home() {
  return (
    <main className="snap-mandatory h-dvh block snap-y overflow-y-scroll">
      {/* <main className="flex min-h-dvh flex-col items-center justify-between p-24"> */}
      <Background></Background>
      <section className="works w-11/12 max-w-screen-xl h-auto min-h-dvh py-16 lg:py-32 m-auto flex flex-col items-center snap-start">
        <div className="sectionTitle text-center">
          <h3 className="en">WORKS</h3>
          <p className="jp">作品</p>
        </div>
        <div className="w-full flex justify-between flex-wrap">
          <div className="w-1/3 px-4 flex flex-col">
            <div className="imageBox w-full mb-2">
              {/* <Image></Image> */}
            </div>
            <div className="textBox">aaa</div>
          </div>
        </div>
      </section>
    </main>
  );
}
