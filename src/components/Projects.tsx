"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import leftArrow from "../../public/left-arrow.svg";
import rightArrow from "../../public/right-arrow.svg";

export default function Project() {
  const [projects, setProjects] = useState([
    { id: 1, url: "https://picsum.photos/200/150" },
    { id: 2, url: "https://picsum.photos/200/150" },
    { id: 3, url: "https://picsum.photos/200/150" },
    { id: 4, url: "https://picsum.photos/200/150" },
    { id: 5, url: "https://picsum.photos/200/150" },
    { id: 6, url: "https://picsum.photos/200/150" },
    { id: 7, url: "https://picsum.photos/200/150" },
    { id: 8, url: "https://picsum.photos/200/150" },
    { id: 9, url: "https://picsum.photos/200/150" },
  ]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const projectContainerRef = useRef(null);

  const scrollLeft = () => {
    setScrollPosition((prev) => prev - 200);
  };

  const scrollRight = () => {
    setScrollPosition((prev) => prev + 200);
  };

  useEffect(() => {
    if (projectContainerRef.current) {
      projectContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [scrollPosition]);

  return (
    <div className="flex justify-center items-center px-[3vw] py-[5vh] w-full shadowNeumorphism rounded-[50px] bg-[#e0e0e0]-500">
      <button
        className="shadowNeumorphism2 rounded-full mr-10"
        onClick={scrollLeft}
      >
        <Image src={leftArrow} alt="Left Arrow" width={20} height={20} />
      </button>

      <div
        className="rounded-[10px] bg-[#e0e0e0]-500 overflow-hidden"
        style={{
          maxWidth: "80vw",
          width: "100%",
          display: "flex",
          flexWrap: "nowrap",
          transition: "transform 0.5s ease",
        }}
        ref={projectContainerRef}
      >
        {projects.map((project) => (
          <img
            key={project.id}
            src={project.url}
            alt={`Project ${project.id}`}
            className="w-[200px] h-[150px] object-cover rounded-[10px] marginspecial"
            style={{ minWidth: "200px", width: "200px", height: "150px" }}
          />
        ))}
      </div>

      <button
        className="shadowNeumorphism2 rounded-full ml-10"
        onClick={scrollRight}
      >
        <Image src={rightArrow} alt="Right Arrow" width={20} height={20} />
      </button>
    </div>
  );
}
