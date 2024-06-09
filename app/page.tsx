"use client";

import Image from "next/image";
import Background from "./components/layouts/Background";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full">
      {/* <main className="snap-mandatory h-dvh block snap-y overflow-y-scroll"> */}
      {/* <main className="flex min-h-dvh flex-col items-center justify-between p-24"> */}
      <Background></Background>
      {/* <Parallax></Parallax> */}
      <section className="hero w-full h-dvh relative">
        <div className="heroTitle absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center">
          <h2 className="text-6xl">MOTOKI TAKADA</h2>
          <p className="text-6xl">PORTFOLIO</p>
        </div>
      </section>
      <section
        id="works"
        className="works w-11/12 max-w-screen-xl h-auto min-h-dvh py-16 lg:py-32 m-auto flex flex-row"
      >
        <div className="w-1/2 relative">
          <div
            className="worksImage left-0 top-20 absolute"
            style={{ width: "90%" }}
          >
            <Image src="/twgss.jpg" fill alt="" />
          </div>
          <div
            className="worksImage worksImage2 flex justify-center right-0 top-20 absolute overflow-hidden worksImage_small"
            style={{ width: "60%" }}
          >
            <Image src="/cby.jpg" fill alt="" />
          </div>
          <div
            className="worksImage left-10 top-20 absolute worksImage_large"
            style={{ width: "75%" }}
          >
            <Image src="/noranekoatsume.jpg" fill alt="" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="sectionTitle mb-12 text-center">
            <h3 className="en mb-2 text-6xl font-bold">WORKS</h3>
            <p className="jp text-3xl">作品</p>
          </div>
          <div className="worksLink w-full flex justify-around">
            <Link
              href="https://mkmkmkn.sakura.ne.jp/portfolio/#works-section"
              target="_blank"
              rel="noopener noreferrer"
            >
              制作実績を見る
            </Link>
            <Link
              href="https://matchbox.work/portfolio/P47373376"
              target="_blank"
              rel="noopener noreferrer"
            >
              実務での制作実績を見る
            </Link>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="about w-11/12 max-w-screen-xl h-auto min-h-dvh py-16 lg:py-32 m-auto flex flex-row"
      >
        <div className="w-1/2">
          <div className="sectionTitle mb-12 text-center">
            <h3 className="en mb-2 text-6xl font-bold">ABOUT</h3>
            <p className="jp text-3xl">自己紹介</p>
          </div>
          <p className="aboutText w-full text-m">
            髙田 幹&#040;たかだ もとき&#041;
            <br />
            1992年 大阪生まれ
            <br />
            <br />
            略歴
            <br />
            機械科の専門学校を卒業。
            <br />
            機械設計の会社を退職後、独学にてWebデザインを学びWeb制作会社にてアルバイト開始。
            <br />
            その後Web制作･開発を行う会社へ転職。同社退職後、現在はフリーランスとしてWordPressを使用したWebサイトをメインに、最近ではLaravelの案件（更新、機能追加）にも携わっています。
            <br />
            <br />
            趣味
            <br />
            旅行、釣り、バイク、カメラ、動画編集、温泉など
          </p>
        </div>
        <div className="w-1/2 relative">
          <div
            className="aboutImage left-20 bottom-24 absolute"
            style={{ width: "80%" }}
          >
            <Image src="/about3.webp" fill alt="" />
          </div>
          <div
            className="aboutImage aboutImage2 flex justify-center right-0 top-64 absolute overflow-hidden worksImage_small"
            style={{ width: "52%" }}
          >
            <Image src="/about2.jpg" fill alt="" />
          </div>
          <div
            className="aboutImage left-10 -top-20 absolute worksImage_large"
            style={{ width: "44%" }}
          >
            <Image src="/about1.jpg" fill alt="" />
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="contact w-11/12 max-w-screen-xl h-dvh py-16 lg:py-32 m-auto flex flex-col items-center"
      >
        <div className="sectionTitle mb-12 text-center">
          <h3 className="en mb-2 text-6xl font-bold">CONTACT</h3>
          <p className="jp text-3xl">お問い合わせ</p>
        </div>
        <div className="worksLink w-full flex justify-around">
          <Link
            href="/contact"
          >
            メールフォームはこちら
          </Link>
        </div>
      </section>
    </main>
  );
}
