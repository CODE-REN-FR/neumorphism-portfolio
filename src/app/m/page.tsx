"use client";

import Image from "next/image";
import Me from "@/components/Me";
import Rating from "@/components/Rating";
import Projects from "@/components/Projects";
import Terminal from "@/components/Terminal";
import Skills from "@/components/Skills";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth !== null && windowWidth > 1600) {
      router.push('/');
    }
  }, [windowWidth]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth > 1600) {
       router.push('/m');
    }

    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <main className="w-full h-full flex justify-center items-center p-[10vw]">
      Sorry, I&apos;m still working on this page. The responsive design is not ready yet. Please come back later.
    </main>
  );
}
