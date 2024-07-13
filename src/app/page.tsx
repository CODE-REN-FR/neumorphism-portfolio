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
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1600) {
       router.push('/m');
    }
    setWindowWidth(window.innerWidth);
  }, []);

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
    if (windowWidth !== null && windowWidth < 1600) {
      router.push('/m');
    }
  }, [windowWidth]);



  return (
    <main className="w-full h-full flex justify-center items-center">
      <div className="flex w-[95vw] h-[90vh] bg-[#e0e0e0]-500 rounded-[50px] shadowNeumorphism px-[3vw] py-[5vh]">
        <div className="flex items-center flex-col justify-center h-full w-[30%] space-y-10">
          <Me />
          <Rating />
        </div>
        <div className="flex flex-col w-[70%] pl-[5%]">
          <Projects />
          <div className="flex mt-10 h-full w-full">
            <Skills />
            <Terminal />
          </div>
        </div>
      </div>
    </main>
  );
}



