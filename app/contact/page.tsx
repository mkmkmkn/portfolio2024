"use client";

import Image from "next/image";
import Background from "../components/layouts/Background";
import { ContactForm } from "../components/layouts/ContactForm";

export default function Home() {
  return (
    <main className="w-full h-dvh">
      {/* <main className="flex min-h-dvh flex-col items-center justify-between p-24"> */}
      <Background></Background>
      <section className="works w-11/12 max-w-screen-md h-auto min-h-dvh py-16 lg:py-32 m-auto flex flex-col items-center">
        <div className="sectionTitle mb-12 text-center">
          <h3 className="en mb-2 text-6xl font-bold">CONTACT</h3>
          <p className="jp text-3xl">お問い合わせ</p>
        </div>
        <div className="w-full p-20 border flex flex-wrap">
          <ContactForm></ContactForm>
        </div>
      </section>
    </main>
  );
}
